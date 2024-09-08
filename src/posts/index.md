---
layout: post-index
title: posts
eleventyNavigation:
  order: 3
excludeFromPosts: true
pagination:
  data: collections.post
  size: 3
  alias: "post"
permalink: "/posts/page/{{ pagination.pageNumber | plus: 1 }}/"
---

{% for post in pagination.items reversed %}
# [{{ post.data.title }}]({{ post.url }})
<p>{{ post.content | truncatewords: 50 }}</p>
Published on: {{ post.data.date | date: "%b %d, %Y" }}

---
{% endfor %}

<div class="pagination">
  {% if pagination.pageNumber > 0 %}
    <a href="{{ pagination.href.previous }}">Previous</a>
  {% endif %}

  {% for page in pagination.pages %}
  <a href="{{ pagination.hrefs[forloop.index0] }}" class="{% if forloop.index0 == pagination.pageNumber %}current{% endif %}">
    {{ forloop.index }}
  </a>
  {% endfor %}

  {% if pagination.pageNumber < pagination.pages.length - 1 %}
    <a href="{{ pagination.href.next }}">Next</a>
  {% endif %}
</div>