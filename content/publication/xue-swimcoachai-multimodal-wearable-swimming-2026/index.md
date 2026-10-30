---
title: "SwimCoachAI: A Multimodal Wearable System for Swimming Rhythm Sensing and Coaching"
authors:
- "Xiaochan Xue"
- "Haofan Cai"
- "Yanjun Pan"
- "Shuqiong Wu"
- "Yao Zheng"
date: "2026-12-01"
publishDate: "2026-10-29T00:00:00-10:00"
publication_types:
- "1"
publication: "*2026 IEEE Annual Congress on Artificial Intelligence of Things (AIoT)* (accepted)"
publication_short: "IEEE AIoT 2026"
abstract: "Swimming performance depends on coordinated breathing, arm strokes, kicking, and physiological response. Existing wearable systems primarily report isolated metrics such as stroke count or heart rate, while camera-based biomechanical analysis requires dedicated infrastructure and is typically performed offline. This paper presents the design of SwimCoachAI, a three-point wearable sensing and coaching system that integrates smart goggles, a wrist-worn hub, and an ankle sensor to capture breathing, arm-stroke, and kick events together with heart rate and SpO2. The nodes communicate over a 915 MHz LoRa link using event-driven transmission, in which each node detects and timestamps semantic events locally, decoupling event time from packet arrival time. A lightweight classifier at the wrist hub is designed to recognize representative breathing–stroke–kick rhythms and to drive goggle LED and ankle-vibration cues toward a configurable target pattern. As an initial feasibility study, synthetic analyses show that event-driven transmission reduces nominal communication load by more than an order of magnitude relative to raw IMU streaming. Under the stated synthetic packet-loss model, buffering locally timestamped events improves four-class rhythm classification from a macro-F1 of 0.757 to 0.996 at an 80% initial packet delivery ratio. A retrospective Garmin case study of one 800-unit freestyle workout further examines wrist-derived heart rate, stroke rate, and SWOLF across manually annotated 2-beat, 4-beat, and 4–6-beat kick regimes, illustrating both measurable within-session variation and the inability of a wrist-only record to directly resolve breathing–kick coordination. Prototype implementation, in-water communication measurements, and controlled swimmer evaluation remain planned validation."
featured: false
draft: false
tags:
- conference
publication_status: accepted
hugoblox:
  ids:
    doi: ""
# Add the camera-ready Amazon S3 URL after upload.
url_pdf: ""
links: []
---

## Citation

Xiaochan Xue, Haofan Cai, Yanjun Pan, Shuqiong Wu, Yao Zheng, “SwimCoachAI: A Multimodal Wearable System for Swimming Rhythm Sensing and Coaching,” 2026 IEEE Annual Congress on Artificial Intelligence of Things (AIoT), 2026 (accepted).

[Download BibTeX citation](cite.bib)

**Status:** Accepted; DOI pending publication.
