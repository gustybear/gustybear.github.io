---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Profiling the Strength of Physical-Layer Security: A Study in Blinding'
subtitle: ''
summary: ''
authors:
- Yao Zheng
- Matthias Schulz
- Wenjing Lou
- Y. Thomas Hou
- Matthias Hollick
tags:
- wireless physical layer security
- orthogonal blinding
- secure communication
- eavesdropper
- noise injection
- known plaintext attack
- ciphertext only attack

categories: []
date: '2016-07-01'
lastmod: 2020-12-29T17:31:02-10:00
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
publishDate: '2020-12-30T03:30:59.849076Z'
publication_types:
- '1'
abstract: Physical layer security for wireless communication is broadly considered
  as a promising approach to protect data confidentiality against eavesdroppers. However,
  despite its ample theoretical foundation, the transition to practical implementations
  of physical-layer security still lacks success. A close inspection of proven vulnerable
  physical-layer security designs reveals that the flaws are usually overlooked when
  the scheme is only evaluated against an inferior, single-antenna eavesdropper. Meanwhile,
  the attacks exposing vulnerabilities often lack theoretical justification. To reduce
  the gap between theory and practice, we posit that a physical-layer security scheme
  must be studied under multiple adversarial models to fully grasp its security strength.
  In this regard, we evaluate a specific physical-layer security scheme, i.e. orthogonal
  blinding, under multiple eavesdropper settings. We further propose a practical \"ciphertext-only
  attack\" that allows eavesdroppers to recover the original message by exploiting
  the low entropy fields in wireless packets. By means of simulation, we are able
  to reduce the symbol error rate at an eavesdropper below 1% using only the eavesdropper's
  receiving data and a general knowledge about the format of the wireless packets.
publication: "*WiSec '16: Proceedings of the 9th ACM Conference on Security & Privacy\
  \ in Wireless and Mobile Networks*"
doi: 10.1145/2939918.2939933

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-zheng-profiling-strength-physical-layer-2016/Zheng+et+al.+-+2016+-+Profiling+the+Strength+of+Physical-Layer+Security.pdf
---
