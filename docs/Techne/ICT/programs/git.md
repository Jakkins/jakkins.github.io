# git

List file path and size:

```bash
git rev-list --objects --all |
  git cat-file --batch-check='%(objectsize) %(rest)' |
  sort --numeric-sort --key=1
```
