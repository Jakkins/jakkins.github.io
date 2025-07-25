# setup ssh github

```bash
ssh-keygen -t ed25519 -C "jak" -f ~/.ssh/id_ed25519_jak -N "" && cat ~/.ssh/id_ed25519_jak.pub

# Configure ~/.ssh/config
echo '
Host github.com
    HostName ssh.github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_jak
    IdentitiesOnly yes
' >> ~/.ssh/config

ssh -T git@github.com
```

