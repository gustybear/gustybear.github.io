---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Respiratory-Based User Authentication and Device Pairing for at-Home OSA Test
subtitle: ''
summary: ''
authors:
- Shekh Md Mahmudul Islam
- Yao Zheng
- Yanjun Pan
- Marionne Millan
- Samson Aggelopoulos
- Brian Lu
- Alvin Yang
- Thomas Yang
- Stephanie Aelmore
- Willy Chang
- Ming Li
- Olga Borić-Lubecke
- Victor Lubecke
- Wenhai Sun
- Suwei Chang
- Ethan Lin
tags: []
categories: []
date: '2022-05-01'
lastmod: 2022-05-17T14:53:54-10:00
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
publishDate: '2022-05-18T00:53:53.946553Z'
publication_types:
- '3'
abstract: At-home screening systems for obstructive sleep apnea (OSA) can bring convenience
  to remote chronic disease management. However, the unsupervised home environment
  is subject to cheating from a non-compliant user, either by using another person
  to substitute for the test or manipulating the data communication during the test,
  which lowers the credibility of at-home OSA screening. To improve trustworthiness,
  this work presents SIENNA, an insider-resistant breathing-based authentication/pairing
  protocol. SIENNA leverages the uniqueness of breathing patterns to automatically
  authenticate a user and pairs two main components of an OSA kit, e.g., a mobile
  OSA app and a physiological monitoring radar system (PRMS). SIENNA does not require
  biometric enrollment and instead transforms the respiratory belt measurements taken
  during the user's routine physical checkup into breathing biometrics comparable
  with the PRMS readings. Furthermore, it can operate within a noisy multi-target
  home environment and is secure against a co-located attacker through the usage of
  JADE-ICA, fuzzy commitment, and friendly jamming. We fully implemented SIENNA and
  evaluated its performance with medium-scale trials. Results show that SIENNA can
  achieve reliable ($>$ 90% success rate) user authentication and secure device pairing
  in a noisy environment against an attacker with full knowledge of the authorized
  user's breathing biometrics.
publication: '*IEEE TMC*, submitted'

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3-us-west-2.amazonaws.com/publication_islam_respiratory_based_user_authentication_2022/jnl_tmc_multi_moda_dev_pair.pdf
---
