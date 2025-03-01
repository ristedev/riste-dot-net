---
layout: default
title: Self-hosted
eleventyNavigation:
  order: 3
---
Explore the projects I’m currently self-hosting and maintaining

{% assign items = selfHostedList.projects %}
{% include "card-grid.html" %}