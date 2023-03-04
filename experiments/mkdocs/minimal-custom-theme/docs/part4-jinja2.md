# Jinja2

<a href="https://palletsprojects.com/p/jinja/" target="_blank">easier start</a> <br>
<a href="https://jinja.palletsprojects.com/en/latest/" target="_blank">docs</a>

## GOAL

> list files and directories inside nav. (no "page", no links)

Also

> Jinja2 template engine that comes with MkDocs is not pure Jinja2 because there is no python involved.

# MkDocs's Jinja2

## index.html

```html
<body>
  {% include 'nav-main.html' %} {{ page.content }}
</body>
```

## nav-main.html & how to debug

```html
{%- block site_nav %}
<nav class="nav-main">
  <ul>
    {%- set navlevel = 1 %}
    <!---->
    {%- for nav_item in nav %}
    <script>
      // debug nav_item
      console.log("{{ nav_item }}");
    </script>
    {%- endfor %}
  </ul>
</nav>
{%- endblock %}
```

## check if dir

```html
{%- block site_nav %}
<nav class="nav-main">
  <ul>
    {%- set navlevel = 1 %} 
    {%- for nav_item in nav %} 
    {% include 'nav-item.html' %} 
    {%- endfor %}
  </ul>
</nav>
{%- endblock %}
```

### nav-item.html with more debug

> comments: <!---> are a problem with Jinja2

```html
<script>
	console.log("{{ nav_item }}")
</script>

{% if nav_item.url %}
<li>
	<a href="{{ nav_item.url }}">url --- {{ nav_item.title }}</a>
</li>
{% endif %}

{% if nav_item.is_page  %}
<li>
	<a href="{{ nav_item.url }}">page --- {{ nav_item.title }}</a>
</li>
{% endif %}

{% if nav_item.is_link %}
<li>
	<a href="{{ nav_item.url }}">link --- {{ nav_item.title }}</a>
</li>
{% endif %}

{% if nav_item.is_section %}
<li>
	<a href="{{ nav_item.url }}">section --- {{ nav_item.title }}</a>
</li>
{% endif %}
```

#### Legenda

```txt
page    : the title in the first line of every md file
section : the directory name inside docs dir
```
