---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Location Based Handshake and Private Proximity Test with Location Tags
subtitle: ''
summary: ''
authors:
- Yao Zheng
- Ming Li
- Wenjing Lou
- Y. Thomas Hou
tags:
- authentication
- location-based service
- proximity test
- key establishment
- spatial-temporal location tag
- location cheating
- location privacy
- fuzzy extractor
- fuzzy commitment
- bloom filter

categories: []
date: '2017-07-01'
lastmod: 2020-12-29T17:23:38-10:00
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
publishDate: '2020-12-30T03:23:36.161394Z'
publication_types:
- '2'
abstract: A location proximity test service allows mobile users to determine whether
  they are in close proximity to each other, and has found numerous applications in
  mobile social networks. Unfortunately, existing solutions usually reveal much of
  users' private location information during a proximity test. They are also vulnerable
  to location cheating where an attacker reports false locations to gain an advantage.
  Moreover, the initial trust establishment among unfamiliar users in large scale
  mobile social networks has been a challenging task. In this paper, we propose a
  novel scheme that enables a user to perform (1) a location based handshake that
  establishes secure communications among strangers, who do not have a pre-shared
  secret, and (2) a privacy-preserving proximity test without revealing the user's
  actual location to the server or other users not within the proximity. The proposed
  scheme is based on a novel concept, i.e., spatial-temporal location tags, and we
  put forward a location tag construction method using environmental signals that
  provides an unforgeable location proof. We use Bloom filters to efficiently represent
  users' location tags and vicinity regions. We exploit fuzzy extractor, a lightweight
  cryptographic primitive, to extract shared secrets between matching location tags.
  We conduct extensive analysis, simulation, and real experiments to demonstrate the
  feasibility, security, and efficiency of our scheme.
publication: '*IEEE Transactions on Dependable and Secure Computing*'
doi: 10.1109/TDSC.2015.2472529

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-zheng-location-based-handshake-2017/Zheng+et+al.+-+2017+-+Location+Based+Handshake+and+Private+Proximity+Tes.pdf
---
