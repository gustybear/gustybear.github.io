---
title: "NVIDIA Academic Grant Program: OmniPort: Real-Time Semantic Digital Twins via ISAC and AI-RAN for Smart Ports"
date: 2026-08-15T15:29:00-10:00

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

summary: "In-kind hardware award | Co-PI"
subtext: "In-kind hardware award | Co-PI"

image:
  placement: 3
  caption: ""
  focal_point: "Center"
  preview_only: true
  alt_text: ""
---

## Executive Summary
OmniPort develops a real-time intelligent wireless and digital-twin platform for safer and more efficient autonomous operations in container ports. Ports are particularly challenging environments for robots because stacked metal containers obstruct GPS and line-of-sight sensors while producing strong wireless multipath. Instead of treating these reflections solely as interference, OmniPort uses integrated sensing and communication (ISAC) to extract information from routine robot uplink signals, enabling around-corner hazard detection and GPS-free robot localization. An AI-RAN then combines these sensing results with robot mobility and network telemetry to predict wireless conditions, dynamically allocate network resources, and maintain low-latency communication for safety-critical operations.

The project integrates these capabilities into an uncertainty-aware semantic digital twin that represents container geometry, robot movement, hazards, and wireless connectivity in real time. Rather than continuously transmitting camera video, operators can supervise robot fleets through a privacy-preserving VR environment generated from this semantic information, with warnings for collision risks, connectivity degradation, and emerging hazards. The platform uses four on-premises NVIDIA RTX PRO 6000 GPUs to support concurrent ISAC processing, AI-RAN control, NVIDIA Isaac Sim/Cosmos-based digital-twin reasoning, and Omniverse VR visualization, targeting an end-to-end control latency below 50 ms. The resulting technologies, software, and datasets are intended to provide a foundation for intelligent robotic operations in Hawaiʻi’s ports and other complex industrial environments.
