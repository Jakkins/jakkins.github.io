# install xfce

```bash
# https://www.debugpoint.com/xfce-arch-linux-install-4-16/
sudo pacman -S --needed xorg
sudo pacman -S --needed xfce4 xfce4-goodies network-manager-applet 
# systemctl enable lightdm --- it's a Session manager (Login Manager) 
# systemctl enable NetworkManager
# startxfce4
vim ~/.xinitrc
```

```bash
#!/bin/sh

if [ -d /etc/X11/xinit/xinitrc.d ]; then
for f in /etc/X11/xinit/xinitrc.d/*; do
[ -x "$f" ] && . "$f"
done
unset f
fi

exec ck-launch-session startxfce4
```

## remove desktop env

```bash
pacman -Qe

# xfce
sudo pacman –Rsu xfce4 xfce4-goodies

# kde
# sudo pacman –Rsu startplasma-x11
sudo pacman –Rsu plasma-meta kde-applications-meta kde-applications
sudo pacman –Rsu plasma-desktop                      # kubuntu-desktop
sudo pacman –Rsu dolphine
```