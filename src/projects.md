---
layout: layouts/default
title: Projects
eleventyNavigation:
  order: 3
---
{% assign items = projectList.projects %}
{% include "card-grid.html" %}