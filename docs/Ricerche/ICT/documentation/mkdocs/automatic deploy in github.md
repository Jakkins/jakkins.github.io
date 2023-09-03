In github (also in gitlab of course) you can create actions (for github) and pipelines (for gitlab) to automate some passages.
What can be achieved is the possibilities to build the documentation ad every commit automatically.

# setup git

```bash
ssh-keygen -t ed25519 -C "Jakkins@hotmail.it"
cat /home/j/.ssh/id_ed25519.pub
# copy the public key and put it into
# https://github.com/settings/ssh/new
```

# clone static page repo

```bash
git clone git@github.com:Jakkins/jakkins.github.io.git
```

# setup theme

```bash
cd jakkins.github.io.git
rm -r ./*
# download the theme (submodule repo) inside this repo
# jakkins.github.io
# 		dark_enhanced_dirtree
git clone git@github.com:Jakkins/dark_enhanced_dirtree.git
git submodule add -b main git@github.com:Jakkins/dark_enhanced_dirtree.git ./dark_enhanced_dirtree
git submodule init
git submodule update
git push --recurse-submodules=check
```

From now on you clone this repo with a command to automatically clone also submodule, like that:

```bash
git clone --recurse-submodules -j8 git@github.com:Jakkins/jakkins.github.io.git
```

# setup static page folder

Move static page folder up one level:

```bash
cp -r ./dark_enhanced_dirtree/my_static_pages/ .
nano ./my_static_pages/mkdocs.yml
# modify the mkdocs project to link the theme configuration to the custom theme
```

```yml
theme:
  name: null
  custom_dir: "../dark_enhanced_dirtree/dark_enhanced_dirtree"
```

# setup github action

<https://docs.github.com/en/actions/quickstart/>
<https://github.com/marketplace/actions/checkout-submodules/>

```bash
mkdir -p .github/workflows
nano .github/workflows/main.yml
```

```yml
name: build mkdocs

on:
  push:
    branches: [ main ]

jobs:
  test_pull_request:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v4
        with:
          python-version: '3.10' 
      - run: pip install mkdocs
      - run: python -m mkdocs build -f ./my_static_pages/mkdocs.yml --clean
	    # - run: mkdocs gh-deploy --force --clean --verbose
```