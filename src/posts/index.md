---
layout: post
title: posts
eleventyNavigation:
  key: {{ title }}
excludeFromPosts: true
---

{% for post in collections.post reversed %}
{% unless post.data.excludeFromPosts %}
# [{{ post.data.title }}]({{ post.url }})
<p>{{ post.content | truncatewords: 50 }}</p>
Published on: {{ post.data.date | date: "%b %d, %Y" }}

---

{% endunless %}
{% endfor %}