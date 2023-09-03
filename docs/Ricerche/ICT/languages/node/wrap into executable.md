- nexe: It is a simple command-line utility that compiles your Node.js application into a single executable file. By default, it converts it into a Windows executable
- pkg: It is a Node.js package that can convert your Node.js app into several executable files for various operating systems (all at once) or of an individual operating system

# sources

- https://github.com/vercel/pkg#targets

# pkg

```bash
nvm use --lts
npm install -g pkg
npm install                                  # download all dependencies
pkg app.js
pkg --targets node14-linux-arm64 main.js     # build with all dependencies downloaded
pkg --targets node14-linux-x64 main.js
rm -r node_modules/sharp
# https://www.npmjs.com/package/sharp
npm install sharp@0.28.3 --save
```

# Something went wrong installing the "sharp" module

credo che il modulo abbia un problema interno con qualche dependency... non ne ho la minima voglia di cercare di capire.
notte.