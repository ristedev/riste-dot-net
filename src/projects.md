---
layout: default
title: Projects
eleventyNavigation:
  order: 2
---
{% assign items = projectList.projects %}
{% include "card-grid.html" %}