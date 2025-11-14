---
title: Facility
summary: Testbeds and Softwares in use
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
      title: Facilities
      filters:
        folders:
          - facility
        tags:
          - testbed
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: events
    content:
      title: Software
      filters:
        folders:
          - facility
        tags:
          - software
    design:
      view: article-grid
      columns: 2
---