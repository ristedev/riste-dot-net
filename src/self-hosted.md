---
layout: layouts/default
title: Self-hosted
eleventyNavigation:
  order: 4
---
Explore the projects I’m currently self-hosting and maintaining

{% assign items = selfHostedList.projects %}
{% include "card-grid.html" %}