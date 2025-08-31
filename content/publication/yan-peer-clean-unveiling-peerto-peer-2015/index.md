---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'PeerClean: Unveiling Peer-to-Peer Botnets through Dynamic Group Behavior Analysis'
subtitle: ''
summary: ''
authors:
- Qiben Yan
- Yao Zheng
- Tingting Jiang
- Wenjing Lou
- Y. Thomas Hou
tags:
- conference
categories: []
date: '2015-01-01'
lastmod: 2024-12-07T19:28:00-05:00
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
publishDate: '2024-12-08T00:28:00.618940Z'
publication_types:
- '1'
abstract: Advanced botnets adopt a peer-to-peer (P2P) infrastructure for more resilient
  command and control (C&C). Traditional detection techniques become less effective
  in identifying bots that communicate via a P2P structure. In this paper, we present
  PeerClean, a novel system that detects P2P botnets in real time using only high-level
  features extracted from C&C network flow traffic. PeerClean reliably distinguishes
  P2P bot-infected hosts from legitimate P2P hosts by jointly considering flow-level
  traffic statistics and network connection patterns. Instead of working on individual
  connections or hosts, PeerClean clusters hosts with similar flow traffic statistics
  into groups. It then extracts the collective and dynamic connection patterns of
  each group by leveraging a novel dynamic group behavior analysis. Comparing with
  the individual host-level connection patterns, the collective group patterns are
  more robust and differentiable. Multi-class classification models are then used
  to identify different types of bots based on the established patterns. To increase
  the detection probability, we further propose to train the model with average group
  behavior, but to explore the extreme group behavior for the detection. We evaluate
  PeerClean on real-world flow records from a campus network. Our evaluation shows
  that PeerClean is able to achieve high detection rates with few false positives.
publication: '*2015 IEEE Conference on Computer Communications (INFOCOM)*'
doi: 10.1109/INFOCOM.2015.7218396
url_pdf: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-yan-peer-clean-unveiling-peertopeer-2015/Yan+et+al_2015_PeerClean.pdf
---
