# arch - wayland - hyprland

# stage 1

```bash
# connect to wifi, you'll need to download some things from internet
ip a
iwctl
    station wlan0 scan
    station wlan0 show
    station wlan0 connect SSID
    # insert password
    quit

# one line connection with iwctl
# iwctl --passphrase passphrase station device connect SSID

# load trusted keys to check the integrity of packets you'll download
# keys are used to check that packets are secure and not tampered
pacman-key --init                      # this will create your key
pacman-key --populate archlinux        # this will load some archlinux key
```

# stage 2

## way 1 - manual, easy to understand, not the recommended way

```bash
# it's time to study for new users
# https://wiki.archlinux.org/title/archinstall
archinstall
    # use / to search
```

## way 2 - minimalist, automatable

```bash
# --- set keyboard ---
ls /usr/share/kbd/keymaps/**/*.map.gz  # list keymap
loadkeys de-latin1                     # e.g. for german keyboard layout

# --- Verify the boot mode ---
ls /sys/firmware/efi/efivars

# directory exists -> UEFI mode
# directory does not exist -> BIOS || CSM

# --- set timezone offline ---
sudo systemctl stop systemd-timesyncd.service
timedatectl set-ntp false
timedatectl list-timezones
timedatectl set-timezone "Africa/Casablanca"
timedatectl set-time 15:58:30

# --- set timezone using internet ---
sudo systemctl restart systemd-timesyncd.service
timedatectl set-ntp true    # should be enough 
timedatectl status 
```

### partition the disk

The common partitioning practice is to create:
    
1. root (contains all the drivers and programs to make the system works (window manager, session manager, password manager, ...))
2. swap
3. home (contains your file)

As separate partitions.

Why?

If you put `/home` on it's own partition you can reinstall everything (deleting the `root` partition) without losing the files inside `home`.

```bash
# --- partition the disk, UEFI only ---
fdisk -l
fdisk /dev/nvme0n1
    # create primary FAT (efi) +512M
    # n, p, +512M, t, ef
    # create root
    # n, p, +30G, no need to change type 
    # create home
    # n, p, go on -> no need to change type: 'Linux' is good

# --- format the three partitions ---
lsblk
mkfs.fat -F32 /dev/nvme0n1p1
mkfs.ext4 /dev/nvme0n1p2
mkfs.ext4 /dev/nvme0n1p3

# check
fsck -N /dev/nvme0n1p1
fsck -N /dev/nvme0n1p2
fsck -N /dev/nvme0n1p3
```

### select an appropriate mirror

```bash
# backup if mirror-list file exists
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup
# uncomment server section
sed -i 's/^#Server/Server/' /etc/pacman.d/mirrorlist.backup
# put the better 6 mirrors (the ones with less lag) in the top of the list 
rankmirrors -n 6 /etc/pacman.d/mirrorlist.backup > /etc/pacman.d/mirrorlist
# update your mirrors
pacman -Syu pacman-mirrorlist

# if backup is corrupt, or file is missing, you can download it using
curl -o /etc/pacman.d/mirrorlist https://archlinux.org/mirrorlist/all/
```

### install arch-linux

```bash
lsblk      # look for the partitions position and name  
 
mount /dev/nvme0n1p2 /mnt                  # mount /root 
mount --mkdir /dev/nvme0n1p3 /mnt/home     # mount /home

# for UEFI, mount the EFI system partition
mount --mkdir /dev/nvme0n1p1 /mnt/boot
 
# mount swap if present

lsblk  # check again
```

### generate fstab file

```bash
genfstab -U /mnt >> /mnt/etc/fstab
cat /mnt/etc/fstab

# /            ext4
# /home        ext4
# /boot/efi    vfat
```

### install essentials and finish

```bash
pacstrap /mnt base linux linux-firmware vim/nano iwctl networkmanager iwd wpa_supplicant dhcpcd
arch-chroot /mnt
systemctl enable NetworkManager

# --- set hostname ---
echo myarch > /etc/hostname

# --- set hosts file ---
touch /etc/hosts

# 127.0.0.1	localhost
# ::1		localhost
# 127.0.1.1	myarch

# --- set Timezone again if needed ---
timedatectl list-timezones
timedatectl set-timezone Europe/Rome

# uncomment
nano /etc/locale.gen
locale-gen

# --- set root pwd ---
passwd

# --- install grub ---
pacman -S grub efibootmgr
mkdir /boot/efi
mount /dev/nvme0n1p1 /boot/efi
# one line : mount --mkdir /dev/nvme0n1p1 /boot/efi

grub-install --target=x86_64-efi --bootloader-id=GRUB --efi-directory=/boot/efi

# save configuration inside a grub.conf file
grub-mkconfig -o /boot/grub/grub.cfg

# --- add a new user and give him sudo capabilities ---
pacman -S sudo
useradd {username}
passwd {userpass}
EDITOR=nano visudo  # enable %wheel
# usermod -aG wheel,audio,video,storage team
usermod -aG wheel {username}

# now you can poweroff and remove the USB
poweroff     # OR sudo shutdown -h now
```

# stage 3 - install Hyprland

```bash
sudo pacman -S hyprland
```


