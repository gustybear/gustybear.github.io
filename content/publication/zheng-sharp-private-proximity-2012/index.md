---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'SHARP: Private Proximity Test and Secure Handshake with Cheat-Proof Location
  Tags'
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
date: '2012-09-01'
lastmod: 2020-12-29T20:23:48-10:00
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
publishDate: '2020-12-30T06:23:46.765625Z'
publication_types:
- '1'
abstract: A location proximity test service allows mobile users to determine whether
  they are in close proximity to each other, and has found numerous applications in
  mobile social networks. Unfortunately, existing solutions usually reveal much of
  users' private location information during proximity test. They are also vulnerable
  to location cheating where an attacker reports false locations to gain advantage.
  Moreover, the initial trust establishment among unfamiliar users in large scale
  mobile social networks has been a challenging task. In this paper, we propose a
  novel scheme that enables a user to perform (1) privacy-preserving proximity test
  without revealing her actual location to the server or other users not within the
  proximity, and (2) secure handshake that establishes secure communications among
  stranger users within the proximity who do not have pre-shared secret. The proposed
  scheme is based on a novel concept, i.e. location tags, and we put forward a location
  tag construction method using environmental signals that provides location unforgeability.
  Bloom filters are used to represent the location tags efficiently and a fuzzy extractor
  is exploited to extract shared secrets between matching location tags. Our solution
  also allows users to tune their desired location privacy level and range of proximity.
  We conduct extensive analysis and real experiments to demonstrate the feasibility,
  security, and efficiency of our scheme.
publication: '*ESORICS 2012: 17th European Symposium on Research in Computer Security*'
doi: 10.1007/978-3-642-33167-1_21

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-zheng-sharp-private-proximity-2012/Zheng+et+al.+-+2012+-+SHARP+Private+Proximity+Test+and+Secure+Handshake.pdf
---
