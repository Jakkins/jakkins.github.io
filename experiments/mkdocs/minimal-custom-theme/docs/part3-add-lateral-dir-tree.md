# Near a wholesome documentation

> **_PROBLEM_**
>
> `<ul>` not working correctly.

## GOAL

At this point we have this `main.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    {% for path in config.extra_css %}
    <link href="{{ path|url }}" rel="stylesheet" />
    {% endfor %}
    <!-- -->
    {% block libs %}
    <link
      rel="stylesheet"
      href="{{ base_url }}/highlight/styles/default.min.css"
    />
    <script src="{{ base_url }}/highlight/highlight.min.js"></script>
    <script src="{{ base_url }}/js/index.js"></script>
    {% endblock %}

    <script>
      document.addEventListener("DOMContentLoaded", (event) => {
        // before css
        hljs.highlightAll();
      });
      document.addEventListener("load", function () {
        // after images and css
      });
    </script>

    <title>
      {% if page.title %}{{ page.title }} - {% endif %}{{ config.site_name }}
    </title>
  </head>

  <body>
    {{ page.content }}
  </body>
</html>
```

Now, I want to add a dynamic lateral navigation system that adapt to all files and directories inside docs folder.
And I have to do this using what mkdocs offers me.

### Randomly adjust some css of course

```css
code,
code * {
  font-weight: lighter, normal;
  line-height: 1.5;
  font-size: 14px;
}
```

### Now
