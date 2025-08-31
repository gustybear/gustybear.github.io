---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'FaIR: Federated Incumbent Detection in CBRS Band'
subtitle: ''
summary: ''
authors:
- Matthew Troglia
- Jordan Melcher
- Yao Zheng
- Dylan Anthony
- Alvin Yang
- Thomas Yang
tags:
- sensor
- spectrum sensing
- authentication
- spectrum access
- distributed sensing
- machine learning
- federated learning

categories: []
date: '2019-11-01'
lastmod: 2020-12-27T16:09:54-10:00
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
publishDate: '2020-12-28T02:09:52.911533Z'
publication_types:
- 1
abstract: "The next-generation spectrum access system (SAS) for the Citizens Broadband\
  \ Radio Service band is equipped with environmental sensors (ESCs) to detect the\
  \ presence of non-informed incumbent users, which allows the SAS to dynamically\
  \ reassign spectrum resource for low privilege users to avoid interference. However,\
  \ the performance of existing single-node detection model is limited by the sensor's\
  \ geo-locations; whereas a naive distributed sensing network with improved detection\
  \ accuracy introduces a high bandwidth overhead due to the frequent communication\
  \ of spectrum data. In addition, many existing coherent spectrum sensing methods\
  \ are not feasible for CBRS band due to the unknown operational characteristics\
  \ of incumbent military wireless applications. To address these issues, we propose\
  \ a machine learning based non-coherent spectrum sensing system: (F)eder(a)ted (I)ncumbent\
  \ Detection in CB(R)S (FaIR). FaIR leverages a communication-efficient distributed\
  \ learning framework, federated learning, for ESCs to collaborate and train a data-driven\
  \ machine learning model for incumbent detection under minimal communication bandwidth.\
  \ Our preliminary results show that the federated learning method can exploit the\
  \ spatial diversity of ESCs and obtain an improved detection model comparing to\
  \ a naive distributed sensing and centralized model framework. We evaluate the FaIR\
  \ model with a variety of spectrum waveforms at varying SNRs. Our experiments showed\
  \ that FaIR improves the average detection accuracy compared to the single-node\
  \ method, using a fraction of the bandwidth compared to the naive multi-node method."
publication: '*2019 IEEE International Symposium on Dynamic Spectrum Access Networks
  (DySPAN) - Workshop on Data-Driven Dynamic Spectrum Sharing*'
doi: 10.1109/DySPAN.2019.8935736

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: PDF
  url: https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-troglia-fa-ir-federated-incumbent-2019/Troglia+et+al.+-+2019+-+FaIR+Federated+Incumbent+Detection+in+CBRS+Band.pdf
---
