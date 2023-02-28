# Part 2

## custom_theme

```txt
mkdocs.yml
docs/
    index.md
    about.md
custom_theme/
    main.html
		css
			index.css
```

## mkdocs.yml

```yaml
theme:
  name: null
  custom_dir: "custom_theme/"
  palette:
    primary: css/index.css
```

## main.html

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="{{ "css/index.css"|url }}" />
    <title>
      {% if page.title %}{{ page.title }} - {% endif %}{{ config.site_name }}
    </title>
  </head>

  <body>
    {{ page.content }}
  </body>
</html>
```

## Problem

> **_WAIT A MOMENT_**
> Why css are working only for index ???

```txt
http://localhost:8000/part2/

this           --> <link rel="stylesheet" href="css/index.css" />
will load this --> http://localhost:8000/part2/css/index.css

WARNING  -  [18:21:14] "GET /part2/css/index.css HTTP/1.1" code 404
```

## Solution

```yaml
theme:
  name: null
  custom_dir: "custom_theme/"
  palette:
    primary: css/index.css

extra_css:
  - css/index.css
```

```diff
<!DOCTYPE html>
<html>
  <head>
-    <link rel="stylesheet" href="{{ "css/index.css"|url }}" />
+    {% for path in config.extra_css %}
+    <link href="{{ path|url }}" rel="stylesheet" />
+    {% endfor %}
    <title>
      {% if page.title %}{{ page.title }} - {% endif %}{{ config.site_name }}
    </title>
  </head>

  <body>
    {{ page.content }}
  </body>
</html>
```
