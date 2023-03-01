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
>
> Why css are working only for index ???

```txt
http://localhost:8000/part2/

this           --> <link rel="stylesheet" href="css/index.css" />
will load this --> http://localhost:8000/part2/css/index.css

WARNING  -  [18:21:14] "GET /part2/css/index.css HTTP/1.1" code 404
```

## Solution

### mkdocs.yml

```yaml
theme:
  name: null
  custom_dir: "custom_theme/"
  palette:
    primary: css/index.css

extra_css:
  - css/index.css
```

### main.html

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

### better index.css

```css
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background-color: rgb(0, 0, 0, 0);
  color: whitesmoke;
  font-family: "Consolas", "Courier New", "Lucida Console", "Menlo", "Monaco",
    "Liberation Mono", "Ubuntu Mono", "DejaVu Sans Mono", "Roboto Mono",
    "Noto Mono", "Inconsolata", "Source Code Pro", "SF Mono", monospace;
  line-height: 1.1;
  font-size: 16px;
  font-style: normal;
}

html,
body {
  background-color: rgb(18, 18, 18);
  padding: 10px;
}

body {
  margin: 0 auto;
  max-width: 800px;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 30px;
}
h2 {
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 26px;
}
h3,
h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 22px;
}

blockquote {
  padding: 10px;
  margin: 10px;
  background-color: rgb(0, 41, 82);
}

blockquote p,
blockquote strong em,
blockquote p strong em {
  color: rgb(242, 255, 103);
}

/* CODE */
pre {
  line-height: 0.7;
  background-color: rgba(255, 255, 255, 0.152);
  padding: 10px;
}

code {
  background-color: rgba(20, 20, 20, 0);
}

.vscode-light .hljs-comment,
.vscode-light .hljs-quote,
.vscode-light .hljs-number,
.vscode-light .hljs-class,
.vscode-light .hljs-variable {
  background-color: rgba(0, 128, 0, 0);
  color: rgb(0, 138, 0);
}
```

> **_PROBLEM_**
> code block has no highlighting.

### Possibilities

- https://highlightjs.org/download/
  - download
  - change the default.css file
- https://squidfunk.github.io/mkdocs-material/getting-started/
