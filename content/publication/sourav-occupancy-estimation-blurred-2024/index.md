---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Occupancy Estimation from Blurred Video: A Multifaceted Approach with Privacy
  Consideration'
subtitle: ''
summary: ''
authors:
- Md Sakib Galib Sourav
- Ehsan Yavari
- Xiaomeng Gao
- James Maskrey
- Yao Zheng
- Victor Lubecke
- Olga Borić-Lubecke
tags:
- journal
- prepare
categories: []
date: '2024-06-08'
lastmod: 2024-12-04T16:44:58-05:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2024-12-04T21:44:57.904667Z'
publication_types:
- '2'
abstract: 'Building occupancy information is significant for a variety of reasons,
  from allocation of resources in smart buildings to responding during emergency situations.
  As most people spend more than 90% of their time indoors, a comfortable indoor environment
  is crucial. To ensure comfort, traditional HVAC systems condition rooms assuming
  maximum occupancy, accounting for more than 50% of buildings’ energy budgets in
  the US. Occupancy level is a key factor in ensuring energy efficiency, as occupancy-controlled
  HVAC systems can reduce energy waste by conditioning rooms based on actual usage.
  Numerous studies have focused on developing occupancy estimation models leveraging
  existing sensors, with camera-based methods gaining popularity due to their high
  precision and widespread availability. However, the main concern with using cameras
  for occupancy estimation is the potential violation of occupants’ privacy. Unlike
  previous video-/image-based occupancy estimation methods, we addressed the issue
  of occupants’ privacy in this work by proposing and investigating both motion-based
  and motion-independent occupancy counting methods on intentionally blurred video
  frames. Our proposed approach included the development of a motion-based technique
  that inherently preserves privacy, as well as motion-independent techniques such
  as detection-based and density-estimation-based methods. To improve the accuracy
  of the motion-independent approaches, we utilized deblurring methods: an iterative
  statistical technique and a deep-learning-based method. Furthermore, we conducted
  an analysis of the privacy implications of our motion-independent occupancy counting
  system by comparing the original, blurred, and deblurred frames using different
  image quality assessment metrics. This analysis provided insights into the trade-off
  between occupancy estimation accuracy and the preservation of occupants’ visual
  privacy. The combination of iterative statistical deblurring and density estimation
  achieved a 16.29% counting error, outperforming our other proposed approaches while
  preserving occupants’ visual privacy to a certain extent. Our multifaceted approach
  aims to contribute to the field of occupancy estimation by proposing a solution
  that seeks to balance the trade-off between accuracy and privacy. While further
  research is needed to fully address this complex issue, our work provides insights
  and a step towards a more privacy-aware occupancy estimation system.'

publication: '*MDPI Sensors*'
doi: 10.3390/s24123739

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-sourav-occupancy-estimation-blurred-2024/Sourav+et+al_2024_Occupancy+Estimation+from+Blurred+Video.pdf
---
