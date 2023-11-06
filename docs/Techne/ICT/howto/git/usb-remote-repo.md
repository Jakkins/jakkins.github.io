# usb remote local offline repo

```bash
# open USB path with powershell if on window
cd path/to/usb
mkdir myproject
cd myproject
git init --bare

# in local desktop
cd ~/projs/myproject
touch .gitignore
git init
git add .
git commit -m "Initial commit"
git remote add usb D:\path\to\usb\myproject
git push usb master
```

