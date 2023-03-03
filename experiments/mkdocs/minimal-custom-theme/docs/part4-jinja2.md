# Jinja2

<a href="https://palletsprojects.com/p/jinja/" target="_blank">easier start</a> <br>
<a href="https://jinja.palletsprojects.com/en/latest/" target="_blank">docs</a>

## GOAL

> list files and directories inside nav. (no "page", no links)

Also

> Jinja2 template engine that comes with MkDocs is not pure Jinja2.
>
> There is no python involved.

### starting point

```html
{%- block site_nav %}
<nav class="nav-main">
  <ul>
    {%- set navlevel = 1 %}
    <!---->
    {%- for nav_item in nav %}
    <!-- {% include'nav-item.html' %} -->
    <li><span>{{ nav_item.title }}</span></li>
    {%- endfor %}
  </ul>
</nav>
{%- endblock %}
```
