# setup project

## init project

1. install node version manager (https://github.com/coreybutler/nvm-windows/releases)

```bash
# requirement: Node.js >=18.0
node -v
npm -v
nvm install 18.0.0
nvm use 18.0.0

# if window and 
# Get-ExecutionPolicy
# is restricted
# Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

npx create-docusaurus@latest mydocs classic

# starts the development server.
npm start

# bundles your website into static files for production.
npm run build

# serves the built website locally.
npm run serve

# publishes the website to GitHub pages.
npm run deploy
```
