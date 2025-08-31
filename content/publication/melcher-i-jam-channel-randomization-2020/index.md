---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: iJam with Channel Randomization
subtitle: ''
summary: ''
authors:
- Jordan L. Melcher
- Yao Zheng
- Dylan Anthony
- Matthew Troglia
- Thomas Yang
- Alvin Yang
- Samson Aggelopoulos
- Yanjun Pan
- Ming Li
tags:
- key establishment
- known-plaintext attack
- channel randomization
- wireless physical layer security
- secure communication
- eavesdropper
- multiantenna eavesdroppers
- noise injection
- reconfigurable antenna
- dialog coding

categories: []
date: '2020-07-09'
lastmod: 2020-09-10T12:51:56-10:00
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
projects: 
- "research/x96_physec_chan_ran_ijam"

publishDate: '2020-09-10T22:51:47.839027Z'
publication_types:
- 1
abstract: Physical-layer key generation methods utilize the variations of the communication
  channel to achieve a secure key agreement between two parties with no prior security
  association. Their secrecy rate (bit generation rate) depends heavily on the randomness
  of the channel, which may reduce significantly in a stable environment. Existing
  methods seek to improve the secrecy rate by injecting artificial noise into the
  channel. Unfortunately, noise injection cannot alter the underlying channel state,
  which depends on the multipath environment between the transmitter and receiver.
  Consequently, these methods are known to leak key bits toward multi-antenna eavesdroppers,
  which is capable of filtering the noise through the differential of multiple signal
  receptions. This work demonstrates an improved approach to reinforce physical-layer
  key generation schemes, e.g., channel randomization. The channel randomization approach
  leverages a reconfigurable antenna to rapidly change the channel state during transmission,
  and an angle-of-departure (AoD) based channel estimation algorithm to cancel the
  changing effects for the intended receiver. The combined result is a communication
  channel stable in the eyes of the intended receiver but randomly changing from the
  viewpoint of the eavesdropper. We augmented an existing physical-layer key generation
  protocol, iJam, with the proposed approach and developed a full-fledged remote instrumentation
  platform to demonstrate its performance. Our evaluations show that augmentation
  does not affect the bit error rate (BER) of the intended receiver during key establishment
  but reduces the eavesdropper's BER to the level of random guessing, regardless of
  the number of antennas it equips.
publication: '*Proceedings of the 13th ACM Conference on Security and Privacy in Wireless
  and Mobile Networks,* (3rd place in best demo competition)' 
doi: 10.1145/3395351.3401705

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-melcher-i-jam-channel-randomization-2020/Melcher+et+al.+-+2020+-+iJam+with+Channel+Randomization.pdf
- name: Dataset
  url: https://github.com/gustybear-research/x96_physec_chan_ran
- name: Video
  url: https://www.youtube.com/watch?v=lMRiCmiHmb0
---
