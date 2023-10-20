# hyprland

## modify

```bash
vim .config/hypr/hyprland.conf 
```

## reload

```bash
hyprctl reload

# or else
# super + b or n
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

## open app at start-up

<https://wiki.hyprland.org/FAQ/#how-do-i-autostart-my-favorite-apps>

```bash
exec-once=[workspace 1 silent] nvim ~/.todo
```



