# android studio 

## install an AndroidSDK

```bash
which java
java --version
sudo apt update && sudo apt install android-sdk

echo '
# AndroidSDK
export ANDROID_HOME="/usr/lib/android-sdk"
export ANDROID_SDK_ROOT="/usr/lib/android-sdk"
PATH=$PATH:$ANDROID_HOME/tools
PATH=$PATH:$ANDROID_HOME/platform-tools
' >> ~/.bashrc

source ~/.bashrc
```

## install NDK

<https://developer.android.com/ndk/downloads>

```bash
wget https://dl.google.com/android/repository/android-ndk-r26-linux.zip
unzip android-ndk-r26-linux.zip
sudo mv android-ndk-r26 /usr/lib/android-sdk/
```

```bash
echo '
# NDK
export NDK_HOME="$ANDROID_HOME/android-ndk-r26"
' >> ~/.bashrc

source ~/.bashrc
```


