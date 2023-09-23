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

```
