---
title: "CyberAI Innovation: Securing Artificial Intelligence Agents: A Scenario-Based Educational Platform for Future Cybersecurity Professionals"
date: 2026-08-15T15:29:00-10:00

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags:
- ai security
- ai agent
- agent security
- cybersecurity
- cyberai
- prompt injection
- trust boundary
- red teaming
- blue teaming
- cybertraining
- cybersecurity education
- workforce development
- grant
- active grant
- copi-role

authors:
- Yingfei Dong
- Hanqing Guo
- Yao Zheng

summary: "GE-2623286, ＄250,000, Co-PI"

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
AI agents that autonomously browse the web, manage email, execute code, and query databases are being deployed across federal agencies at accelerating pace. These agents create a qualitatively new attack surface: a poisoned email can cause an agent to exfiltrate files; a malicious code comment can redirect an execution pipeline; a hidden webpage instruction can hijack a browsing session. Yet cybersecurity education has not kept pace. Existing AI security tools (Lakera Gandalf, OWASP LLM labs, CTF competitions) teach only chatbot-level prompt injection, a single-turn, text-only model that does not prepare students for agent-mediated threats involving tool access, autonomous action, and multi-step reasoning chains.

This project develops *AgentSec*, a scenario-based educational platform that teaches undergraduate cybersecurity students to identify, exploit, and defend against threats unique to autonomous AI agents, organized into three thrusts. Thrust 1 creates the educational framework, where a trust boundary taxonomy organizes agent vulnerabilities into three progressive categories, i.e., data ingestion, tool-action, and reasoning chain boundaries. This gives students a transferable mental model. Based on the taxonomy, we design a three-module curriculum with six organization-contextualized scenarios, red-team/blue-team experiential learning cycles, and a configurable difficulty framework. Thrust 2 builds the educational technology, where we develop sandboxed environments to enable students' interaction with real LLM-powered agents with controlled tool access, a layered assessment system with an AI tutoring agent, an instructor analytics dashboard, and a scenario authoring toolkit for community-contributed content. Thrust 3 evaluates impact through a quasi-experimental study, assessing platform quality, student learning, and workforce placement into government and industry CyberAI roles. All code will be open-source, self-hostable via Docker Compose with open-weight models, and released through CLARK for nationwide adoption.