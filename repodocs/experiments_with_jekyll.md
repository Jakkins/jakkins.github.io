# experiments with jekyll

```js
{% for file in site.static_files %}
    {% if file.path contains '/docs/' and file.extname == '.md' %}
[{{file.name}}]({% link {{ file.path }} %})
    {% endif %}
{% endfor %}

{% for page in site.pages %}
{{ page }}
  {% if page.path contains 'docs/' %}
[{{ page.name }}]({% link {{ page.path }} %})
  {% endif %}
{% endfor %}
```