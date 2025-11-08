---
title: Events
summary: Recent and upcoming events
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: events
    content:
      title: Events
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 2
---