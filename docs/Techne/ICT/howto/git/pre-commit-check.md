# pre commit check

## sources

https://pre-commit.com/
https://www.youtube.com/watch?v=psjz6rwzMdk
https://verdantfox.com/blog/view/how-to-use-git-pre-commit-hooks-the-hard-way-and-the-easy-way

## minimal

```bash
pip install pre-commit
cd repo/
pre-commit install

# open file
code .\.git\hooks\pre-commit                 # vim .\.git\hooks\pre-commit
```

```bash
#!/usr/bin/env bash

email=$(git config --local user.email)
name=$(git config --local user.name)

if [ "$email" != "lammail@proton.me" ]; then
   echo "Ti sei dimenticato di nuovo"
   git config --local user.email "lammail@proton.me"
fi

if [ "$name" != "lonnome" ]; then
	 echo "Ti sei dimenticato di nuovo"
   git config --local user.name "lonnome"
fi
```


