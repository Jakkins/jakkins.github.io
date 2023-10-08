# hyprland

## modify

```bash
vim .config/hypr/hyprland.conf 
```

## reload

```bash
hyprctl reload
```

## brightness

```bash
sudo pacman -S brightnessctl
```

```bash
# --------------------------------------------------------------
# brightness
bind = $mainMod, F8, exec, brightnessctl set 5%-
bind = $mainMod, F9, exec, brightnessctl set +5%
```




