---
layout: post-index
title: Blog
eleventyNavigation:
  order: 3
excludeFromPosts: true
pagination:
  data: collections.sortedPosts
  size: 6
  alias: "post"
permalink: "/posts/page/{{ pagination.pageNumber | plus: 1 }}/"
---

<div class="card-grid">
{% for post in pagination.items %}
  <a href="{{ post.url }}" class="card-preview">
    <h3 class="card-preview-title">{{ post.data.title }}</h3>
    <p class="card-preview-description">{{ post.data.excerpt }}</p>
  </a>
{% endfor %}
</div>

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