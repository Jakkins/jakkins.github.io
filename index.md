---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
author: Jane Doe
# paginate: 5
---
Hello {{ page.author }}

<div class="posts">
  {% for post in site.posts %}
    <article>
      <header>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p><strong>{{ post.date | date: "%B %d, %Y" }}</strong></p>
      </header>
      <section>
        <!-- 
        excerpt: "This is a short description of the post."
        Alternatively, Jekyll will use the first 250 characters of the content as the default excerpt.
        -->
        <p>{{ post.excerpt }}</p>
      </section>
    </article>
  {% endfor %}
</div>