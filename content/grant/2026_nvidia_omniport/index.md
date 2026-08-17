---
title: "NVIDIA Academic Grant Program: OmniPort: Real-Time Semantic Digital Twins via ISAC and AI-RAN for Smart Ports"
date: 2026-08-15T15:29:00-10:00

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags:
- edge ai
- network
- wireless communication
- wireless sensing
- digital twin
- smart transportation
- critical infrastructure
- gpu computing
- grant
- active grant
- copi-role

authors:
- Xiaochan Xue
- Yao Zheng

summary: "in-kind hardware award, Co-PI"

# Featured image
# To use, place an image named `featured.jpg/png` in your page's folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
image:
  placement: 3
  caption: ""
  focal_point: "Center"
  preview_only: true
  alt_text: " "

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org
# Links:
# - name: Training Project 1
#   url: './projects/vip_mmwave_comm_and_sensg_integtn'
# - name: Training Project 2
#   url: './projects/vip_reflectarray_and_applications'
#- name: Dataset
#  url: 'https://github.com/gustybear-research/x96_distbed_wifi_sensing'
#- name: Dataset
#  url: 'https://github.com/gustybear-research/x96_mmw_sig_cov'
#- name: Outreach
#  url: '../../outreach/2020_gsh_stem_festival/'
#- name: Mentor
#  url: '../../mentor/2021_spring_seoty_willy_chang/'
#- name: Mentor
#  url: '../../mentor/2020_fall_ogs_alvin_yang/'
---

# Executive Summary
OmniPort develops a real-time intelligent wireless and digital-twin platform for safer and more efficient autonomous operations in container ports. Ports are particularly challenging environments for robots because stacked metal containers obstruct GPS and line-of-sight sensors while producing strong wireless multipath. Instead of treating these reflections solely as interference, OmniPort uses integrated sensing and communication (ISAC) to extract information from routine robot uplink signals, enabling around-corner hazard detection and GPS-free robot localization. An AI-RAN then combines these sensing results with robot mobility and network telemetry to predict wireless conditions, dynamically allocate network resources, and maintain low-latency communication for safety-critical operations.

The project integrates these capabilities into an uncertainty-aware semantic digital twin that represents container geometry, robot movement, hazards, and wireless connectivity in real time. Rather than continuously transmitting camera video, operators can supervise robot fleets through a privacy-preserving VR environment generated from this semantic information, with warnings for collision risks, connectivity degradation, and emerging hazards. The platform uses four on-premises NVIDIA RTX PRO 6000 GPUs to support concurrent ISAC processing, AI-RAN control, NVIDIA Isaac Sim/Cosmos-based digital-twin reasoning, and Omniverse VR visualization, targeting an end-to-end control latency below 50 ms. The resulting technologies, software, and datasets are intended to provide a foundation for intelligent robotic operations in Hawaiʻi’s ports and other complex industrial environments.