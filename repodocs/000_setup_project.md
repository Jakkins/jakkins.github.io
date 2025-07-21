# how to setup project

```bash
# https://jekyllrb.com/docs/installation/
# on fedora
sudo dnf install ruby ruby-devel openssl-devel redhat-rpm-config gcc-c++ @development-tools
gem install jekyll bundler
bundle clean --force  # or `gem update`
bundle install   # will use Gemfile to install some shit
```

## good source

A lot of configuration can be seen in [jekyll.yml workflow](../.github/workflows/jekyll.yml).
