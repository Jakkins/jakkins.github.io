# 5 - MkDocs css, js, styles and things

## state right now

```txt
custom_theme
  css
    index.css
  main.html
docs
  index.md
    custom theme
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

extra_javascript:
  - js/index.js
  - highlight/highlight.min.js
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
  {% block libs %}
	<link rel="stylesheet" href="{{ base_url }}/highlight/styles/default.min.css">
	<script src="{{ base_url }}/highlight/highlight.min.js"></script>
	<script src="{{ base_url }}/js/index.js"></script>
	{% endblock %}
</head>
<body>
	{% include 'nav/nav.html' %}
	{% include 'content/index.html' %}
</body>
</html>
```