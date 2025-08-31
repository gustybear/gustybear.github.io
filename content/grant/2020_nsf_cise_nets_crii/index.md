---
title: "CRII: NeTS: Power Efficient Millimeter Wave Data Delivery for Remote Invasive Species Monitoring"
date: 2020-05-01T00:00:00-10:00

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags:
- mmwave
- network
- invasive species
- remote sensing
- sensor
- radar
- grant

authors:
- Yao Zheng

summary: "CNS-1948568, ＄174,911, PI"

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
#links:
#- name: PUB
#  url: './publication/paryavi-machine-vision-tools-2021/'
#- name: Dataset
#  url: 'https://github.com/gustybear-research/x96_mmw_under_weather'
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
***
# Executive Summary
The growing data resolution in remote sensing spurs the adoption of millimeter-wave (mmWave) communication modules on energy-harvesting devices to increase the data delivery bandwidth. The energy conditions on these devices are not always satisfiable to initiate or maintain the mmWave links and require systems to be capable of anticipating communication failures and take preemptive actions to minimize energy expenditures. Fortunately, the environmental information provided by remote sensors contains sufficient knowledge to enable the design of such systems. The goal of this project is to develop algorithms and tools to exploit this information and augment the solar-harvesting remote invasive species monitoring system in the State of Hawaii with mmWave data delivery capability. The work in this project will enable researchers, industry, and students to realize high bandwidth real-time remote sensing with power-constrained devices in real-world applications. The results of this research will impact fields across scientific, industrial, and military interests, including agriculture, ecology, meteorology, infrastructure, and public utility monitoring, etc., where timely communication of high-resolution sensory data is essential.

The fundamental intuition of the proposed approach is that environmental factors, such as weather conditions, signal blockages, can be recognized via the inherent capability or interactions between the remote sensors. Knowledge of these factors can be utilized to optimize device awakening, beam scanning, and signal amplification, etc., at the physical layer. Three complimentary research thrusts are pursued: 1) extracting the correlation between solar harvesting conditions and mmWave signal attenuations; developing models and circuits to estimate the mmWave signal attenuations at specific solar conditions; 2) designing a distributed sensing architecture to detect mmWave beam blockage and accelerate beam alignment, by exploiting the low-power decimeter band communication implemented by the existing system; 3) formulating and solving a constrained route placement problem for an autonomous aerial data collector to optimize its mmWave signal reception as it maneuvers between sensor clusters and flight restricted regions. All products of this work will be made freely available to the research community, along with documentation and tutorials. The in-lab testbed to be established during the project will be made available online for remote testing. The hardware schematic of the sensor platform, deployment profiles, data traces, and important meta-data will be posted online to spur further use, test, and research to advance the field.
