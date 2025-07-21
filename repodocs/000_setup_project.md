# how to setup project

```bash
# https://jekyllrb.com/docs/installation/
# on fedora
sudo dnf install ruby ruby-devel openssl-devel redhat-rpm-config gcc-c++ @development-tools
gem install jekyll bundler
bundle clean --force  # or `gem update`
bundle install   # will use Gemfile to install some shit
# bundle exec jekyll serve
jekyll serve --livereload
# bundle exec jekyll serve --livereload # if there’s a Gemfile
```

## reminders

```txt
_layouts dir is for custom theme
```

## good source

- [why use github action](https://jekyllrb.com/docs/continuous-integration/github-actions/)
    - [is so much better](https://jekyllrb.com/docs/continuous-integration/github-actions/#advantages-of-using-actions)
- a lot of configuration can be seen in [jekyll.yml workflow](./workflow_example.md)
- [how to create custom jekyll theme](https://talk.jekyllrb.com/t/i-want-to-make-my-own-theme-with-jekylll/6766/2)
- [how to setup ruby in github actions](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-ruby)

## project dirtree

```text
index.md -> is the {{ content }}
about.md -> is the /about/ page
```