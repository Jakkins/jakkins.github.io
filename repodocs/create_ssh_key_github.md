# create ssh key

```bash
ls ~/.ssh
# ssh-keygen -t ecdsa -b 256 -C "jakkins"
ssh-keygen -t ed25519 -C "jakkins"
cat ~/.ssh/id_ed25519_jakkins.pub
# copy .pub key into github (https://github.com/settings/ssh/new)

# create ssh config
nano ~/.ssh/config
```

```yml
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_jakkins
    IdentitiesOnly yes
```

```bash
# test connection
ssh -T git@github.com
```
