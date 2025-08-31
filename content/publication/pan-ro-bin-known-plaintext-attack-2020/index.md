---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'ROBin: Known-Plaintext Attack Resistant Orthogonal Blinding via Channel Randomization'
subtitle: ''
summary: ''
authors:
- Yanjun Pan
- Yao Zheng
- Ming Li
tags:
- known-plaintext attack
- orthogonal blinding
- channel randomization
- wireless physical layer security
- secure communication
- eavesdropper
- multiantenna eavesdroppers
- noise injection
- reconfigurable antenna

categories: []
date: '2020-04-01'
lastmod: 2020-12-27T16:06:13-10:00
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
publishDate: '2020-12-28T02:06:11.698340Z'
publication_types:
- 1
abstract: Orthogonal blinding based schemes for wireless physical layer security aim
  to achieve secure communication by injecting noise into channels orthogonal to the
  main channel and corrupting the eavesdropper's signal reception. These methods,
  albeit practical, have been proven vulnerable against multiantenna eavesdroppers
  who can filter the message from the noise. The vulnerability is rooted in the fact
  that the main channel state remains static in spite of the noise injection, which
  allows an eavesdropper to estimate it promptly via known symbols and filter out
  the noise. Our proposed scheme leverages a reconfigurable antenna for Alice to rapidly
  change the channel state during transmission and a compressive sensing based algorithm
  for her to predict and cancel the changing effects for Bob. As a result, the communication
  between Alice and Bob remains clear, whereas randomized channel state prevents Eve
  from launching the knownplaintext attack. We formally analyze the security of the
  scheme against both single and multi-antenna eavesdroppers and identify its unique
  anti-eavesdropping properties due to the artificially created fast-changing channel.
  We conduct extensive simulations and real-world experiments to evaluate its performance.
  Empirical results show that our scheme can suppress Eve's attack success rate to
  the level of random guessing, even if she knows all the symbols transmitted through
  other antenna modes.
publication: '*IEEE INFOCOM 2020 - IEEE Conference on Computer Communications*'
doi: 10.1109/INFOCOM41043.2020.9155439

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-pan-ro-bin-known-plaintext-attack-2020/Pan+et+al.+-+2020+-+ROBin+Known-Plaintext+Attack+Resistant+Orthogonal.pdf
---
