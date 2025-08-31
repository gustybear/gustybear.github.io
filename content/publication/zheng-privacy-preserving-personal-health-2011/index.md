---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Privacy-Preserving Personal Health Record System Using Attribute-Based Encryption
subtitle: ''
summary: ''
authors:
- Yao Zheng
tags:
- personal health records
- cloud computing
- data privacy
- fine-grained access control
- attribute-based encryption
- authentication
categories: []
date: '2011-01-01'
lastmod: 2020-12-29T20:29:07-10:00
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
publishDate: '2020-12-30T06:29:05.710627Z'
publication_types:
- '7'
abstract: Personal health record (PHR) service is an emerging model for health information
  exchange. It allows patients to create, manage, control and share their health information
  with other users as well as healthcare providers. In reality, a PHR service is likely
  to be hosted by third-party cloud service providers in order to enhance its interoperability.
  However, there have been serious privacy concerns about outsourcing patients' PHR
  data to cloud servers, not only because cloud providers are generally not covered
  entities under HIPAA, but also due to an increasing number of cloud data breach
  incidents happened in recent years. In this thesis, we propose a privacy-preserving
  PHR system using attribute-based encryption (ABE). In this system, patients can
  encrypt their PHRs and store them on semi-trusted cloud servers such that servers
  do not have access to sensitive PHR contexts. Meanwhile patients maintain full control
  over access to their PHR files, by assigning fine-grained, attribute-based access
  privileges to selected data users, while different users can have access to different
  parts of their PHR. Our system also provides extra features such as populating PHR
  from professional electronic health record (EHR) using ABE. In order to evaluate
  our proposal, we create a Linux library that implement primitive of key-policy attribute-based
  encryption (KP-ABE) algorithms. We also build a PHR application based on Indivo
  PCHR system that allow doctors to encrypt and submit their prescription and diagnostic
  note to PHR servers using KP-ABE. We evaluate the performance efficiency of different
  ABE schemes as well as the data query time of Indivo PCHR system when PHR data are
  encrypted under ABE scheme.
publication: 'Worcester Polytechnic Institute'


# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-zheng-privacy-preserving-personal-health-2011/Zheng+-+2011+-+Privacy-Preserving+Personal+Health+Record+System+U.pdf
---
