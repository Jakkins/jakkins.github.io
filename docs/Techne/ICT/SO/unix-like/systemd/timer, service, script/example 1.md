# backup timer+service

## timer

`cat /etc/systemd/system/lmb5m.timer`

```bash
[Unit]
Description=local mirror backup timer, 5 min
Requires=lmb5m.service

[Timer]
OnCalendar=*:0/5
Persistent=true
Unit=lmb5m.service

[Install]
WantedBy=timers.target
```

## service

`cat /etc/systemd/system/lmb5m.service`

```bash
[Unit]
Description=local mirror backup service

[Service]
ExecStart=/etc/systemd/system/lmb5m.script

[Install]
WantedBy=multi-user.target
```

## script

`cat /etc/systemd/system/lmb5m.script`

```bash
#!/bin/bash
dir1=/home/j/sfc/      # use the /
dir2=/home/j/BACKUPS/sfc       # do not use the /
rsync -vPa --delete --exclude={"node_modules","build",".idea","*.apk","target"} $dir1 $dir2
# use -v to debug command
```