---
title: "Drone-Mounted mmWave Harmonic Radar for Invasive Insect Monitoring"
date: 2025-11-07T00:00:00-10:00

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags:
- harmonic radar
- invasive species
- uav
- drone sensing
- mmwave
- 24ghz
- phased array
- nitinol antenna
- schottky diode
- localization
- insect tracking
- biosecurity
- hisc funded
- grant
- active grant

authors:
- Yao Zheng
- Haofan Cai

summary: "＄60,000, PI"

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
#   url: './project/research/vip_mmwave_comm_and_sensg_integtn'
# - name: Training Project 2
#   url: './project/research/vip_reflectarray_and_applications'
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
## Executive Summary
This project develops an innovative **drone-mounted millimeter-wave (mmWave) harmonic radar system** for **tracking invasive pest insects** in Hawai‘i. The technology targets destructive species such as the **coconut rhinoceros beetle** and **melon fly**, aiming to improve early detection, optimize control strategies, and protect the islands’ ecosystems and agriculture.

Traditional harmonic radar systems are limited to short ranges and heavy transponders. Our approach integrates **12 GHz/24 GHz phased-array beamforming**, **miniaturized Nitinol-based transponders**, and **multi-drone coordination** for long-range, real-time tracking of small, fast-moving insects—achieving high precision with minimal behavioral impact.


## Research Objectives
**Goal:** Build and validate a UAV-mounted harmonic radar network for aerial tracking of invasive insects across complex Hawaiian landscapes.

### Task 1 – mmWave Beamsteering Harmonic Transceiver
Design a **compact 12 GHz phased-array transmitter** using COTS modules and a heterodyne architecture for coherent beamforming.  
- Operates at **12/24 GHz ISM bands**  
- Achieves >10 m range with lightweight, steerable arrays  
- Enables UAV integration for agile tracking

### Task 2 – Ultralight Harmonic Tag
Develop a **miniaturized 24 GHz transponder** using a **hollow bowtie antenna** made of **shape-memory alloy (Nitinol)** and a **Schottky diode** for harmonic generation.  
- Tag weight < 1 mg for compatibility with small insects  
- Structural resilience through Nitinol’s superelasticity  
- Broadband harmonic reflection optimized for 12→24 GHz doubling  

### Task 3 – Multi-Drone Localization Network
Implement a **distributed multistatic radar system** using one TX and multiple RX drones for real-time localization.  
- Uses synchronized bistatic ranging and multilateration  
- Integrates GPS time sync and low-latency communications  
- Coordinates drone formations for continuous insect tracking  


## Broader Impacts
This system aligns with **HISC priorities** for early detection and rapid response (Priority 1) and technological innovation for pest management (Priority 2). It promotes cross-disciplinary collaboration among engineers, biologists, and agricultural scientists to create deployable surveillance tools for invasive species control.  
Potential benefits include:
- Reduced pesticide dependence through precise targeting  
- Enhanced monitoring of remote or forested regions  
- Scalable open-source framework for ecological sensing  


## Team
- **PI:** Dr. Yao Zheng – mmWave radar, phased array, RF sensing  
- **Co-PI:** Dr. Haofan Cai – RFID and low-power tag design  
- **Co-PI:** Dr. Daniel Jenkins – UAV systems, autonomous sensing, precision agriculture  

Collaborators include **USDA-PBARC** and **NIWC Pacific** for field validation and data integration.


## Timeline (Dec 2025 – Nov 2026)
| **Phase** | **Period** | **Milestone** | **Lead** |
|:--|:--|:--|:--|
| Phase I | Months 1–3 | Frequency translator upgrade and system specification | UHM ECE |
| Phase II | Months 4–6 | Phased-array prototype and beamforming validation | UHM ECE |
| Phase III | Months 7–9 | Harmonic tag fabrication and field characterization | UHM ECE |
| Phase IV | Months 10–12 | Multi-drone localization demo and final reporting | UHM ECE |


## Expected Deliverables
- Functional **12/24 GHz drone-mounted harmonic radar prototype**  
- **Miniaturized Nitinol-based insect tags** (< 1 mg)  
- **Validated multi-drone localization system** (> 100 m effective range)  
- Technical documentation and open-source dataset for future HISC programs  


📡 **Project Lead:** [yaozheng@hawaii.edu](mailto:yaozheng@hawaii.edu)  
🏛️ **Institution:** University of Hawai‘i at Mānoa – College of Engineering  
🌺 **Supported by:** Hawai‘i Invasive Species Council (HISC) 2026–2027  

