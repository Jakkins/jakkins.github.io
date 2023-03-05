# MkDocs css, js, styles and things

## state right now

```txt
custom_theme
  css
    index.css
  main.html
docs
  index.md
  part1.md
  part2.md
  dir1
    index.md
mkdocs.yml
```

### mkdocs.yml

```yml
site_name: Minimal Custom Dir Tree
use_directory_urls: true

theme:
  name: null
  custom_dir: "custom_theme/"

extra_css:
  - css/index.css
  - highlight/styles/default.min.css
```

### main.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% for path in config.extra_css %}
	<link href="{{ path|url }}" rel="stylesheet" />
	{% endfor %}
</head>
<body>
	{% include 'nav-main.html' %}
	{{ page.content }}
</body>
</html>
```