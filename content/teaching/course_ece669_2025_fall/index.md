---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "ECE669: Wireless and Mobile Security"

subtitle: "Spring, 2025"

summary: "Secure the Future of Wireless: Explore how FutureG, O-RAN, ISAC, and RIS redefine communication, sensing, and security in next-generation networks.."

date: 2025-08-27T02:58:53+00:00
lastmod: 2025-08-27T02:58:53+00:00
featured: false
draft: false

authors:
- Yao Zheng

tags:
- futureg
- 6g
- o-ran
- open ran
- isac
- integrated sensing and communication
- ris
- reconfigurable intelligent surface
- wireless security
- mobile networks
- mmwave
- physical layer security
- sdr
- cyber-physical systems
- edge intelligence
- network privacy
- secure beamforming
- ai in wireless
- offered course
- current semester

categories: []

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

links:
- name: CRN
  url: ./project/teaching/course_ece669_2025_fall/#logistics
---

## Executive Summary
**ECE 669 – Wireless and Mobile Security** explores emerging **FutureG (6G)** wireless systems that integrate communication, sensing, and security through **Open RAN (O-RAN)**, **Integrated Sensing and Communication (ISAC)**, and **Reconfigurable Intelligent Surfaces (RIS)**.  
Students will investigate the vulnerabilities and protection strategies at physical, link, and system layers, emphasizing experimental understanding through open-source O-RAN and mmWave SDR platforms.

## Logistics {#logistics}
- **CRN**
| ECE669 001 | 
| ---        | 
| 79080      |

📍 **Meeting Time:** MW 1:30 PM – 2:20 PM  
🏛️ **Location:** Holmes Hall 488  
👨‍🏫 **Instructor:** Dr. Yao Zheng ([yaozheng@hawaii.edu](mailto:yaozheng@hawaii.edu))  

## Learning Objectives
By the end of the course, students will:
- Understand FutureG architecture and O-RAN security challenges.  
- Analyze physical-layer security and randomization mechanisms.  
- Implement RIS-assisted secure beamforming and interference control.  
- Apply ISAC methods for secure sensing and authentication.  
- Develop and present a prototype or simulation on wireless security in FutureG networks.


## Weekly Schedule (Subject to Adjustment)

| **Week** | **Dates** | **Topics & Focus** | **Activities / Deliverables** |
|:--:|:--|:--|:--|
| **1** | Aug 26 – 30 | Course overview • Introduction to FutureG and security challenges | Syllabus discussion; case study: O-RAN threat surface |
| **2** | Sept 2 – 6 | Threat models for O-RAN and edge networks | Paper review: RAN virtualization security |
| **3** | Sept 9 – 13 | Physical-layer security fundamentals | Lab 0 – Simulating channel reciprocity and key extraction |
| **4** | Sept 16 – 20 | Friendly jamming and beamforming privacy | MATLAB demo: cooperative beam nulling |
| **5** | Sept 23 – 27 | Reconfigurable Intelligent Surfaces (RIS) basics | Demo of liquid-metal RIS array; reflection control exercise |
| **6** | Sept 30 – Oct 4 | RIS for coverage and interference management | Lab 1 – RIS coverage optimization (28 GHz BBox testbed) |
| **7** | Oct 7 – 11 | Midterm review and quiz | Concept integration session |
| **8** | Oct 14 – 18 | O-RAN architecture (O-CU, O-DU, O-RU) | Hands-on with OpenAirInterface; traffic capture |
| **9** | Oct 21 – 25 | RIC and AI-driven security control | Lab 2 – xApp/rApp anomaly detection |
| **10** | Oct 28 – Nov 1 | ISAC waveform design and CSI sensing | Signal processing of OFDM and Doppler data |
| **11** | Nov 4 – 8 | ISAC for motion and drone detection | Demonstration of 28 GHz FR2 ISAC testbed |
| **12** | Nov 11 – 15 | Secure multi-modal coexistence | Discussion on radar-comm privacy trade-offs |
| **13** | Nov 18 – 22 | Machine learning for wireless security | Lab 3 – Adversarial examples in O-RAN traffic |
|  —  | Nov 25 – 29 | **Thanksgiving Break** | *No class* |
| **14** | Dec 2 – 6 | Project presentations I | Student project sessions |
| **15** | Dec 9 – 13 | Project presentations II and wrap-up | Final reports due; FutureG security discussion |


## Assessment
| Component | Weight |
|:--|:--|
| Homework & Labs | 25% |
| Midterm Quiz | 15% |
| Research Paper Review | 10% |
| Final Project & Presentation | 35% |
| Participation | 15% |


## Software & Hardware
- **Software:** OpenAirInterface (OAI), srsRAN, MATLAB, Python, Wireshark  
- **Hardware:** USRP SDRs, TMYTEK BBox beamformers, Liquid-Metal RIS testbed  
- **Readings:** O-RAN Alliance Tech Reports, IEEE JSAC/TWC/MTT, 6G whitepapers on ISAC & RIS  

