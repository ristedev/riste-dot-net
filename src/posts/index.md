---
layout: default
title: posts
eleventyNavigation:
  key: {{ title }}
excludeFromPosts: true
---

{% for post in collections.post reversed %}
{% unless post.data.excludeFromPosts %}
# [{{ post.data.title }}]({{ post.url }})
### {{ post.content | truncatewords: 40 }}
Published on: {{ post.data.date | date: "%b %d, %Y" }}
<hr>
{% endunless %}
{% endfor %}