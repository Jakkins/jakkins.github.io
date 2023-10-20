# ~/.config

## ~/.config/hypr/hyprland.conf

```bash
# See https://wiki.hyprland.org/Configuring/Monitors/
# monitor=,preferred,auto,auto
monitor=DP-1, 1920x1080, 0x0, 1
# monitor=DP-2, 1920x1080, 1920x0, 1

# See https://wiki.hyprland.org/Configuring/Keywords/ for more
exec-once = waybar
# https://wiki.hyprland.org/FAQ/#how-do-i-autostart-my-favorite-apps
# exec-once = [workspace 1 silent] terminator -x 'nvim ~/.todo'      did't work, maybe don't fucking use spaces
exec-once = hyprctl dispatch exec "[workspace 1 silent]" "terminator -x 'nvim ~/.todo'"

# Source a file (multi-file configs)
# source = ~/.config/hypr/myColors.conf

# Some default env vars.
env = XCURSOR_SIZE,24

# For all categories, see https://wiki.hyprland.org/Configuring/Variables/
input {
    kb_layout = us
    kb_variant =
    kb_model =
    kb_options =
    kb_rules =

    follow_mouse = 1

    touchpad {
        natural_scroll = yes
    }

    sensitivity = -0.3 # -1.0 - 1.0, 0 means no modification.
}

xwayland {
  force_zero_scaling = true
}

general {
    # See https://wiki.hyprland.org/Configuring/Variables/ for more
    gaps_in = 2
    gaps_out = 2
    border_size = 1
    col.active_border = rgba(33ccffee) rgba(00ff99ee) 45deg
    col.inactive_border = rgba(595959aa)
    layout = dwindle
}

misc {
    disable_hyprland_logo = yes
}

decoration {
    # See https://wiki.hyprland.org/Configuring/Variables/ for more

    rounding = 1
    
    blur {
	enabled = false
        size = 3
        passes = 1
    }

    drop_shadow = no
    shadow_range = 4
    shadow_render_power = 3
    col.shadow = rgba(1a1a1aee)
}

dwindle {
    # See https://wiki.hyprland.org/Configuring/Dwindle-Layout/ for more
    pseudotile = yes # master switch for pseudotiling. Enabling is bound to mainMod + P in the keybinds section below
    preserve_split = yes # you probably want this
}

master {
    # See https://wiki.hyprland.org/Configuring/Master-Layout/ for more
    new_is_master = false
}

gestures {
    # See https://wiki.hyprland.org/Configuring/Variables/ for more
    workspace_swipe = on
}

# Example per-device config
# See https://wiki.hyprland.org/Configuring/Keywords/#executing for more
device:epic-mouse-v1 {
    sensitivity = -0.5
}

# Example windowrule v1
# windowrule = float, ^(kitty)$
# Example windowrule v2
# windowrulev2 = float,class:^(kitty)$,title:^(kitty)$
# See https://wiki.hyprland.org/Configuring/Window-Rules/ for more
# windowrulev2=move 0 0,title:^(Firefox)(.*)$
# windowrulev2=float,title:^(Firefox)(.*)$

# See https://wiki.hyprland.org/Configuring/Keywords/ for more
$mainMod = SUPER

# Example binds, see https://wiki.hyprland.org/Configuring/Binds/ for more
bind = $mainMod, Q, exec, terminator
bind = $mainMod, C, killactive, 
bind = $mainMod, M, exit, 
bind = $mainMod, E, exec, dolphin
bind = $mainMod, V, togglefloating,  # yo -------------------------------- 
bind = $mainMod, R, exec, wofi --show drun
bind = $mainMod, P, pseudo, # dwindle
bind = $mainMod, J, togglesplit, # dwindle

# Move focus with mainMod + arrow keys
bind = $mainMod, left, movefocus, l
bind = $mainMod, right, movefocus, r
bind = $mainMod, up, movefocus, u
bind = $mainMod, down, movefocus, d

# Switch workspaces with mainMod + [0-9]
bind = $mainMod, 1, workspace, 1
bind = $mainMod, 2, workspace, 2
bind = $mainMod, 3, workspace, 3
bind = $mainMod, 4, workspace, 4
bind = $mainMod, 5, workspace, 5
bind = $mainMod, 6, workspace, 6
bind = $mainMod, 7, workspace, 7
bind = $mainMod, 8, workspace, 8
bind = $mainMod, 9, workspace, 9
bind = $mainMod, 0, workspace, 10

# Move active window to a workspace with mainMod + SHIFT + [0-9]
bind = $mainMod SHIFT, 1, movetoworkspace, 1
bind = $mainMod SHIFT, 2, movetoworkspace, 2
bind = $mainMod SHIFT, 3, movetoworkspace, 3
bind = $mainMod SHIFT, 4, movetoworkspace, 4
bind = $mainMod SHIFT, 5, movetoworkspace, 5
bind = $mainMod SHIFT, 6, movetoworkspace, 6
bind = $mainMod SHIFT, 7, movetoworkspace, 7
bind = $mainMod SHIFT, 8, movetoworkspace, 8
bind = $mainMod SHIFT, 9, movetoworkspace, 9
bind = $mainMod SHIFT, 0, movetoworkspace, 10

# Scroll through existing workspaces with mainMod + scroll
bind = $mainMod, mouse_down, workspace, e+1
bind = $mainMod, mouse_up, workspace, e-1

# Move/resize windows with mainMod + LMB/RMB and dragging
bindm = $mainMod, mouse:272, movewindow
bindm = $mainMod, mouse:273, resizewindow

# --------------------------------------------------------------
# brightness
bind = $mainMod, F8, exec, brightnessctl set 5%-
bind = $mainMod, F9, exec, brightnessctl set +5%
```

##  ~/.config/waybar 

### ~/.config/waybar/style.css (default config)

```css
* {
    /* `otf-font-awesome` is required to be installed for icons */
    font-family: FontAwesome, Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
}

window#waybar {
    background-color: rgba(43, 48, 59, 0.5);
    border-bottom: 3px solid rgba(100, 114, 125, 0.5);
    color: #ffffff;
    transition-property: background-color;
    transition-duration: .5s;
}

window#waybar.hidden {
    opacity: 0.2;
}

/*
window#waybar.empty {
    background-color: transparent;
}
window#waybar.solo {
    background-color: #FFFFFF;
}
*/

window#waybar.termite {
    background-color: #3F3F3F;
}

window#waybar.chromium {
    background-color: #000000;
    border: none;
}

button {
    /* Use box-shadow instead of border so the text isn't offset */
    box-shadow: inset 0 -3px transparent;
    /* Avoid rounded borders under each button name */
    border: none;
    border-radius: 0;
}

/* https://github.com/Alexays/Waybar/wiki/FAQ#the-workspace-buttons-have-a-strange-hover-effect */
button:hover {
    background: inherit;
    box-shadow: inset 0 -3px #ffffff;
}

#workspaces button {
    padding: 0 5px;
    background-color: transparent;
    color: #ffffff;
}

#workspaces button:hover {
    background: rgba(0, 0, 0, 0.2);
}

#workspaces button.focused {
    background-color: #64727D;
    box-shadow: inset 0 -3px #ffffff;
}

#workspaces button.urgent {
    background-color: #eb4d4b;
}

#mode {
    background-color: #64727D;
    border-bottom: 3px solid #ffffff;
}

#clock,
#battery,
#cpu,
#memory,
#disk,
#temperature,
#backlight,
#network,
#pulseaudio,
#wireplumber,
#custom-media,
#tray,
#mode,
#idle_inhibitor,
#scratchpad,
#mpd {
    padding: 0 10px;
    color: #ffffff;
}

#window,
#workspaces {
    margin: 0 4px;
}

/* If workspaces is the leftmost module, omit left margin */
.modules-left > widget:first-child > #workspaces {
    margin-left: 0;
}

/* If workspaces is the rightmost module, omit right margin */
.modules-right > widget:last-child > #workspaces {
    margin-right: 0;
}

#clock {
    background-color: #64727D;
}

#battery {
    background-color: #ffffff;
    color: #000000;
}

#battery.charging, #battery.plugged {
    color: #ffffff;
    background-color: #26A65B;
}

@keyframes blink {
    to {
        background-color: #ffffff;
        color: #000000;
    }
}

#battery.critical:not(.charging) {
    background-color: #f53c3c;
    color: #ffffff;
    animation-name: blink;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

label:focus {
    background-color: #000000;
}

#cpu {
    background-color: #2ecc71;
    color: #000000;
}

#memory {
    background-color: #9b59b6;
}

#disk {
    background-color: #964B00;
}

#backlight {
    background-color: #90b1b1;
}

#network {
    background-color: #2980b9;
}

#network.disconnected {
    background-color: #f53c3c;
}

#pulseaudio {
    background-color: #f1c40f;
    color: #000000;
}

#pulseaudio.muted {
    background-color: #90b1b1;
    color: #2a5c45;
}

#wireplumber {
    background-color: #fff0f5;
    color: #000000;
}

#wireplumber.muted {
    background-color: #f53c3c;
}

#custom-media {
    background-color: #66cc99;
    color: #2a5c45;
    min-width: 100px;
}

#custom-media.custom-spotify {
    background-color: #66cc99;
}

#custom-media.custom-vlc {
    background-color: #ffa000;
}

#temperature {
    background-color: #f0932b;
}

#temperature.critical {
    background-color: #eb4d4b;
}

#tray {
    background-color: #2980b9;
}

#tray > .passive {
    -gtk-icon-effect: dim;
}

#tray > .needs-attention {
    -gtk-icon-effect: highlight;
    background-color: #eb4d4b;
}

#idle_inhibitor {
    background-color: #2d3436;
}

#idle_inhibitor.activated {
    background-color: #ecf0f1;
    color: #2d3436;
}

#mpd {
    background-color: #66cc99;
    color: #2a5c45;
}

#mpd.disconnected {
    background-color: #f53c3c;
}

#mpd.stopped {
    background-color: #90b1b1;
}

#mpd.paused {
    background-color: #51a37a;
}

#language {
    background: #00b093;
    color: #740864;
    padding: 0 5px;
    margin: 0 5px;
    min-width: 16px;
}

#keyboard-state {
    background: #97e1ad;
    color: #000000;
    padding: 0 0px;
    margin: 0 5px;
    min-width: 16px;
}

#keyboard-state > label {
    padding: 0 5px;
}

#keyboard-state > label.locked {
    background: rgba(0, 0, 0, 0.2);
}

#scratchpad {
    background: rgba(0, 0, 0, 0.2);
}

#scratchpad.empty {
	background-color: transparent;
}
```

### ~/.config/waybar/config.jsonc (default config)

```jsonc
{
    // "layer": "top", // Waybar at top layer
    // "position": "bottom", // Waybar position (top|bottom|left|right)
    "height": 30, // Waybar height (to be removed for auto height)
    // "width": 1280, // Waybar width
    "spacing": 4, // Gaps between modules (4px)
    // Choose the order of the modules
    "modules-left": ["sway/workspaces", "sway/mode", "sway/scratchpad", "custom/media"],
    "modules-center": ["sway/window"],
    "modules-right": ["mpd", "idle_inhibitor", "pulseaudio", "network", "cpu", "memory", "temperature", "backlight", "keyboard-state", "sway/language", "battery", "battery#bat2", "clock", "tray"],
    // Modules configuration
    // "sway/workspaces": {
    //     "disable-scroll": true,
    //     "all-outputs": true,
    //     "warp-on-scroll": false,
    //     "format": "{name}: {icon}",
    //     "format-icons": {
    //         "1": "",
    //         "2": "",
    //         "3": "",
    //         "4": "",
    //         "5": "",
    //         "urgent": "",
    //         "focused": "",
    //         "default": ""
    //     }
    // },
    "keyboard-state": {
        "numlock": true,
        "capslock": true,
        "format": "{name} {icon}",
        "format-icons": {
            "locked": "",
            "unlocked": ""
        }
    },
    "sway/mode": {
        "format": "<span style=\"italic\">{}</span>"
    },
    "sway/scratchpad": {
        "format": "{icon} {count}",
        "show-empty": false,
        "format-icons": ["", ""],
        "tooltip": true,
        "tooltip-format": "{app}: {title}"
    },
    "mpd": {
        "format": "{stateIcon} {consumeIcon}{randomIcon}{repeatIcon}{singleIcon}{artist} - {album} - {title} ({elapsedTime:%M:%S}/{totalTime:%M:%S}) ⸨{songPosition}|{queueLength}⸩ {volume}% ",
        "format-disconnected": "Disconnected ",
        "format-stopped": "{consumeIcon}{randomIcon}{repeatIcon}{singleIcon}Stopped ",
        "unknown-tag": "N/A",
        "interval": 2,
        "consume-icons": {
            "on": " "
        },
        "random-icons": {
            "off": "<span color=\"#f53c3c\"></span> ",
            "on": " "
        },
        "repeat-icons": {
            "on": " "
        },
        "single-icons": {
            "on": "1 "
        },
        "state-icons": {
            "paused": "",
            "playing": ""
        },
        "tooltip-format": "MPD (connected)",
        "tooltip-format-disconnected": "MPD (disconnected)"
    },
    "idle_inhibitor": {
        "format": "{icon}",
        "format-icons": {
            "activated": "",
            "deactivated": ""
        }
    },
    "tray": {
        // "icon-size": 21,
        "spacing": 10
    },
    "clock": {
        // "timezone": "America/New_York",
        "tooltip-format": "<big>{:%Y %B}</big>\n<tt><small>{calendar}</small></tt>",
        "format-alt": "{:%Y-%m-%d}"
    },
    "cpu": {
        "format": "{usage}% ",
        "tooltip": false
    },
    "memory": {
        "format": "{}% "
    },
    "temperature": {
        // "thermal-zone": 2,
        // "hwmon-path": "/sys/class/hwmon/hwmon2/temp1_input",
        "critical-threshold": 80,
        // "format-critical": "{temperatureC}°C {icon}",
        "format": "{temperatureC}°C {icon}",
        "format-icons": ["", "", ""]
    },
    "backlight": {
        // "device": "acpi_video1",
        "format": "{percent}% {icon}",
        "format-icons": ["", "", "", "", "", "", "", "", ""]
    },
    "battery": {
        "states": {
            // "good": 95,
            "warning": 30,
            "critical": 15
        },
        "format": "{capacity}% {icon}",
        "format-charging": "{capacity}% ",
        "format-plugged": "{capacity}% ",
        "format-alt": "{time} {icon}",
        // "format-good": "", // An empty format will hide the module
        // "format-full": "",
        "format-icons": ["", "", "", "", ""]
    },
    "battery#bat2": {
        "bat": "BAT2"
    },
    "network": {
        // "interface": "wlp2*", // (Optional) To force the use of this interface
        "format-wifi": "{essid} ({signalStrength}%) ",
        "format-ethernet": "{ipaddr}/{cidr} ",
        "tooltip-format": "{ifname} via {gwaddr} ",
        "format-linked": "{ifname} (No IP) ",
        "format-disconnected": "Disconnected ⚠",
        "format-alt": "{ifname}: {ipaddr}/{cidr}"
    },
    "pulseaudio": {
        // "scroll-step": 1, // %, can be a float
        "format": "{volume}% {icon} {format_source}",
        "format-bluetooth": "{volume}% {icon} {format_source}",
        "format-bluetooth-muted": " {icon} {format_source}",
        "format-muted": " {format_source}",
        "format-source": "{volume}% ",
        "format-source-muted": "",
        "format-icons": {
            "headphone": "",
            "hands-free": "",
            "headset": "",
            "phone": "",
            "portable": "",
            "car": "",
            "default": ["", "", ""]
        },
        "on-click": "pavucontrol"
    },
    "custom/media": {
        "format": "{icon} {}",
        "return-type": "json",
        "max-length": 40,
        "format-icons": {
            "spotify": "",
            "default": "🎜"
        },
        "escape": true,
        "exec": "$HOME/.config/waybar/mediaplayer.py 2> /dev/null" // Script in resources folder
        // "exec": "$HOME/.config/waybar/mediaplayer.py --player spotify 2> /dev/null" // Filter player based on name
    }
}
```

## ~/.bashrc

```bash
#!/bin/bash

# alias dev='code ~/sfc/dev/'
alias android-studio='android-studio &'

export PATH=$PATH:~/sfc/dev/scripts
. "$HOME/.cargo/env"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

free_available_space=$(df -h ~/ | awk 'NR == 2 { print $4 }')
PS1='\[\e[0;38;5;40m\]['+$free_available_space'] '  # [free space available] 
PS1+='\u@\H \w \n> \[\e[0m\]'                        # username hostname ~/bin

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH=$BUN_INSTALL/bin:$PATH
```









