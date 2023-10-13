# waybar

Wayland bar for Sway and Wlroots based compositors.

## install dependencies

```bash
sudo pacman -S gtkmm3 jsoncpp libsigc++ fmt wayland chrono-date spdlog gtk3 base-devel  \
    gobject-introspection libpulse libnl libappindicator-gtk3 \
    libdbusmenu-gtk3 libmpdclient libevdev upower
```

## reset waybar

```bash
killall waybar
waybar
```

## fonts

```bash
# icons
sudo pacman -S ttf-font-awesome 
```

## set default conf

```bash
cp /etc/xdg/waybar/config ~/.config/waybar/config.jsonc     # yes, the 'c' is not an error
cp /etc/xdg/waybar/style.css ~/.config/waybar/
```




