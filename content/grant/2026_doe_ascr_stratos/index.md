---
title: "DOE Genesis Mission: STRATOS: Security and Trust Runtime Architecture for Time-critical Operational Science"
date: 2026-08-17T10:10:00-10:00

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags:
- trustworthy ai
- ai security
- adversarial machine learning
- cyber-physical systems
- smart grid
- edge ai
- real-time systems
- scientific ai
- critical infrastructure
- grant
- active grant
- copi-role

authors:
- Liuwan Zhu
- Narayana Santhanam
- Yingfei Dong
- Yao Zheng
- Xiaochan Xue
- Rui Ning
- Benjamin Blakely
- Sonam Kharade

summary: "$750,000 DOE Phase I proposal, Co-PI"

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
---

# Executive Summary

STRATOS develops a cloud-native, model-agnostic security middleware for protecting AI models used in time-critical scientific and energy-system operations. AI is increasingly embedded in workflows such as grid forecasting, contingency analysis, and operational decision making, creating new risks from adversarial perturbations, inference-time evasion, and backdoor attacks that may remain physically plausible while corrupting model outputs. STRATOS addresses this problem through a physics-grounded DevSecOps architecture that continuously evaluates inference streams, computes certified trust scores, and distinguishes malicious manipulation from legitimate operational variability without requiring modification of the protected model.

The project combines physics-constrained adversarial emulation, imbalance-resilient certified detection, and a multi-tier runtime mitigation pipeline that includes targeted input purification, Control Barrier Function-based graceful degradation, and quarantine or rollback of compromised data and models. The Phase I system will be evaluated across the University of Hawaiʻi at Mānoa campus microgrid and Argonne National Laboratory's Controller-Hardware-in-the-Loop platform, targeting at least 90% certified detection, no more than 5% false positives, at least 95% interception of synthesized adversarial payloads, and end-to-end latency of 20 ms or less. The longer-term goal is to transition STRATOS toward a federated security architecture for trustworthy AI across DOE scientific computing and critical-infrastructure environments.
