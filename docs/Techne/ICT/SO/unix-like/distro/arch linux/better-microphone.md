# better microphone

```bash
# remove pulseaudio if present
sudo pacman -R pulseaudio-bluetooth
sudo pacman -R pulseaudio

pacman -Sc                # autoclean
pacman -R $(pacman -Qdtq) # autoremove

# install pipewire
sudo pacman -S pipewire pipewire-alsa
pactl info # check if working
```



