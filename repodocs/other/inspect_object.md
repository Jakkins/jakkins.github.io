# inspect object

```js
{% assign docs_pages = site.pages | where_exp: "page", "page.url contains '/docs/'" | sort: "url" %}

{{ docs_pages | inspect }}
```