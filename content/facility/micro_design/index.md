---
title: Microelectronic Design, Emulation, Fabrication & Validation
summary: "Microelectronic and RF design tools supporting electromagnetic simulation, custom IC design, propagation modeling, fabrication handoff, and measurement correlation."
type: facility
subtype: design
image:
  filename: _microsystem_featured.png
  filename_top: _microsystem_featured.png
  focal_point: Smart
date: 2025-10-28T04:14:54-08:00
authors:
  - yao-zheng
tags:
  - design
---
## Executive Summary
This facility supports an **end-to-end microelectronic workflow**—from **IC/RF front-end design** and **pre-silicon emulation**, through **fabrication handoff**, to **post-silicon validation and correlation**.

**Tool pillars**
- **EM & high-frequency verification:** ANSYS Electronics Desktop / **HFSS**
- **Custom IC schematic-to-layout:** **Cadence Virtuoso** (PDK-based)
- **System/channel realism for wireless experiments:** **Remcom Wireless InSite**

> New project? Start with **[Quick Start](#quick-start)**, then follow the **[Recommended end-to-end workflow](#recommended-end-to-end-workflow)**.

## Navigation
- **[Capabilities](#capabilities)**
- **[Quick Start](#quick-start)**
- **[Tool map](#tool-map)**
- **[HFSS](#ansys-electronics-desktop--hfss)**
- **[Virtuoso](#cadence-virtuoso)**
- **[Wireless InSite](#remcom-wireless-insite)**
- **[Recommended end-to-end workflow](#recommended-end-to-end-workflow)**
- **[Checklists & best practices](#checklists--best-practices)**
- **[Notes for students and new lab members](#notes-for-students-and-new-lab-members)**

## Capabilities

### Design
- Analog / mixed-signal / RF IC schematic design and simulation
- RF/microwave modeling (antennas, passives, packages, interconnects)
- Co-design of **circuits + EM structures + system constraints**

### Emulation
- Pre-silicon exploration using behavioral/compact models
- Parameter sweeps and sensitivity studies to de-risk tapeout
- “What-if” studies on corners, parasitics, and layout-dependent effects

### Fabrication handoff
- Layout readiness checks (DRC/LVS/PEX workflows via PDK)
- Tapeout package preparation (GDS + documentation)
- Coordination for MPW/shuttle or foundry pathways *(availability depends on project and partner access)*

### Validation
- Post-silicon comparison: **measured vs simulated**
- S-parameter correlation, de-embedding planning, and model updates
- Reproducible reporting for publications and future tapeouts

## Quick Start

1. **Pick your entry point**
   - *EM/RF components & antennas* → **[HFSS](#ansys-electronics-desktop--hfss)**
   - *IC schematic-to-layout* → **[Virtuoso](#cadence-virtuoso)**
   - *Propagation / RIS / channel realism* → **[Wireless InSite](#remcom-wireless-insite)**

2. **Build a minimal, reviewable baseline (aim for 1–2 days)**
   - One schematic or EM model that reproduces a known reference
   - One plot that becomes your **golden regression** (S-parameters, gain, NF, phase noise, etc.)

3. **Decide your validation target early**
   - What will be measured? what fixtures? what calibration/de-embedding approach?

## Tool map

| Tool | Best for | Typical outputs |
|
