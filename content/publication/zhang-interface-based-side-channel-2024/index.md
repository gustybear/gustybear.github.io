---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Interface-Based Side Channel in TEE-Assisted Networked Services
subtitle: ''
summary: ''
authors:
- Xiaohan Zhang
- Jinwen Wang
- Yuejang Cheng
- Qi Li
- Kun Sun
- Yao Zheng
- Ning Zhang
- Xinghua LI
tags:
- journal
categories: []
date: '2022-04-01'
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
publishDate: '2024-12-04T21:44:58.059627Z'
publication_types:
- '2'
abstract: With the accelerating adaption of Cloud and Edge computing, cloud-based
  networked deployment emerges to enable providers to deliver services in a cost-effective
  and elastic manner. However, security concern remains one of the major obstacles
  to its wider adaption. Trusted Execution Environment (TEE) has been advocated to
  protect cloud services in an isolated execution environment. In this paper, we present
  a new genre of side-channel attack called interface-based side-channel attack and
  demonstrate its effectiveness on the TEE-assisted networked service system. The
  root cause of this attack is the input-dependent interface invocation (e.g., interface
  information and invocation patterns) that can be observed by untrusted software
  to reveal the control flows inside the enclave. Our evaluation demonstrates that
  the attack can effectively re-identify encrypted web pages processed in the SGX
  enclave with an accuracy of 87.6% and a recall of 76.6%, and can reduce the search
  domain of the 1024 bits RSA private keys to 1.69×10−6 of the original search domain.
  As countermeasures, we propose, implement and evaluate a set of static analysis
  tools to mitigate the newly discovered threats. The key idea is to use inter-procedural
  dataflow analysis to identify potential leakage via the interface, and then mitigate
  them during compilation using techniques including branch obfuscation, loop obfuscation,
  and constant size wrapper.

publication: '*IEEE/ACM Transactions on Networking*'
doi: 10.1109/TNET.2023.3294019

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-zhang-interface-based-side-channel-2024/Zhang+et+al_2024_Interface-Based+Side+Channel+in+TEE-Assisted+Networked+Services.pdf
---
