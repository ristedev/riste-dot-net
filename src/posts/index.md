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

<div class="post-grid">
{% for post in pagination.items %}
  <article class="post-preview">
    <div class="post-preview-date">
      <time datetime="{{ post.data.date | date: '%Y-%m-%d' }}">{{ post.data.date | date: "%B %d, %Y" }}</time>
    </div>
    <h3 class="post-preview-title">
      <a class="post-preview-link" href="{{ post.url }}">{{ post.data.title }}</a>
    </h3>
    <p class="post-preview-description">{{ post.data.excerpt }}</p>
  </article>
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