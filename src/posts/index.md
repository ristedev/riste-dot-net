---
layout: post-index
title: Blog
eleventyNavigation:
  order: 2
excludeFromPosts: true
pagination:
  data: collections.sortedPosts
  size: 6
  alias: "post"
permalink: "/posts/page/{{ pagination.pageNumber | plus: 1 }}/"
---

{% assign items = pagination.items %}
{% include "card-grid.html" %}

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