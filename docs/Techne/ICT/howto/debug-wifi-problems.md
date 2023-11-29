# how to debug wifi problems

## debug with journal

```bash
journalctl --since '3 minutes ago' 
journalctl -u NetworkManager.service --since '1 hour ago'
journalctl -u NetworkManager.service --since '30 minutes ago'

# from start
journalctl -u NetworkManager.service

# print all and exit
journalctl -u NetworkManager.service --no-pager      

# see latest and follow
journalctl -fu NetworkManager.service --no-pager
```

## prep before serach for info

```bash
# download new vendor PCI list
sudo update-pciids

# then show kernel driver
lspci -k
```

## how to debug wifi problems in unix

```bash
# get PCI wifi device
lspci | grep -iF net

# e.g. 
# 2b:00.0 Network controller: Intel Corporation Wi-Fi 6 AX200 (rev 1a)
# 2d:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller (rev 15)

# all in one
lspci -nn -s 2b:00.0 

# get vendor e product code
lspci -n -s 2b:00.0 

# e.g.
# 0c:00.0 0280: 8086:4235
# 0280 = Network controller
# :
# 8086:4235 = Intel Corporation Ultimate N WiFi Link 5300

# get more info and driver name
lspci -vv -s 2b:00.0

# e.g.
# Kernel driver in use: iwlwifi

# get driver info
modinfo iwlwifi
```

## utils

```bash
lshw
lsusb
lsmod
```

# my problem

## check enabled services

```bash
systemctl list-unit-files --state=enabled
```

# possibilities

```txt
1. delete dhcpcd (use systemd-networkd)
2. possibilities
    - wpa_supplicant + systemd-networkd + systemd-resolved
    - iwd + systemd-networkd + systemd-resolved
```

# FAQ

- Do I need NetworkManager?

You don't really need network-manager. The default networking management for Arch is systemd-networkd.

```bash
sudo pacman -S iwd

sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
sudo pacman -Rns networkmanager
sudo rm -rf /etc/NetworkManager
sudo pacman -Rns wpa_supplicant

sudo systemctl enable iwd
sudo systemctl start iwd

sudo nano /etc/iwd/main.conf
# uncomment UseDefaultInterface=true
```

- Do I need dhcpcd?

You can use also just systemd-networkd and systemd-resolved.

```bash
sudo systemctl stop dhcpcd
sudo systemctl disable dhcpcd
sudo pacman -Rns dhcpcd

sudo systemctl enable systemd-networkd
sudo systemctl start systemd-networkd

# enable dhcp with iwd
sudo vim /etc/iwd/main.conf
# [General]
# EnableNetworkConfiguration=true
```


