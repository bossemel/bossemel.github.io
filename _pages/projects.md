---
layout: page
title: projects
permalink: /projects/
description: 
nav: false
nav_order: 3
_styles: |
  .post-title { display: none; }
---

<!-- _pages/projects.md -->

{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
**{{ project.title }}**  
{{ project.content | strip }}


{% endfor %}
