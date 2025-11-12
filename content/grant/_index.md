---
title: Grants
summary: My grants
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: grant-pi
    content:
      title: Grants (PI Role)
      filters:
        folders:
          - grant
        tags: ["pi-role"]
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: grant-copi
    content:
      title: Grants (Co-PI Role)
      filters:
        folders:
          - grant
        tags: ["copi-role"]
    design:
      view: article-grid
      columns: 2
---