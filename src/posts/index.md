---
layout: default
title: posts
eleventyNavigation:
  key: {{ title }}
eleventyExcludeFromCollections: true
---

{% for post in collections.post reversed %}
# [{{ post.data.title }}]({{ post.url }})
### {{ post.content | truncatewords: 40 }}
Published on: {{ post.data.date | date: "%b %d, %Y" }}

<hr>
{% endfor %}