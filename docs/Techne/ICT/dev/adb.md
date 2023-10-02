# adb

## sources

- <https://stackoverflow.com/questions/41792867/adb-device-list-is-empty>
- <https://developer.android.com/studio/run/win-usb?hl=it>
- <https://www.youtube.com/watch?v=IYWEwQnobkQ&t=33s>

## faststart

0. if on windows with WSL
	- <https://www.xda-developers.com/wsl-connect-usb-devices-windows-11/>
1. download google driver
2. move them inside this dir `android_sdk\extras\google\usb_driver\`

```bash
sudo apt-get install usbutils
lsusb
wget https://dl.google.com/android/repository/usb_driver_r13-windows.zip
unzip usb_driver_r13-windows.zip
mkdir -p /usr/lib/android-sdk/extras/google
mv usb_driver android_sdk\extras\google\usb_driver\
sudo adb kill-server
sudo adb devices
```

# utils

```bash
adb shell getprop
adb shell getprop ro.product.cpu.abi
```










