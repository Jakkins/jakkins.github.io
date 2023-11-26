# better microphone

```bash
sudo pacman -Rdd pulseaudio
sudo pacman -S pipewire-{jack,alsa,pulse}
systemctl --user enable --now pipewire pipewire-pulse pipewire-media-session
```

## raw info 

```bash
# remove pulseaudio if present
sudo pacman -Rdd pulseaudio

pacman -Sc                # autoclean
pacman -R $(pacman -Qdtq) # autoremove

# install pipewire
sudo pacman -S pipewire pipewire-alsa
# sudo pacman -S pipewire pipewire-alsa pipewire-jack
# pacman -S pipewire --overwrite '*'

# use wireplumber
# >>> pipewire-media-session is deprecated and will soon be removed from the
#    repositories. Please use 'wireplumber' instead.


# enable services
systemctl --user enable --now pipewire pipewire-alsa pipewire-media-session

pactl info # check if working
```



