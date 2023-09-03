# setup pre commit

```bash
pip install pre-commit
cd /path/to/git_project
pre-commit install
pre-commit sample-config > .pre-commit-config.yaml
code .git\hooks\pre-commit
```

```bash
#!/bin/sh
#!/usr/bin/env bash
git config --local user.name "jakkins"
git config --local user.email "none"
```

```bash
pre-commit run --all-files
```
