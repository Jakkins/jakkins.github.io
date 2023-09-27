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
