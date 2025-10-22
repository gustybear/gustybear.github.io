---
title: MONET - Millimeter-Wave Communication and Sensing Integration
type: facility
image:
  filename: facility/vines/vines.png
  caption: Experimental Setup to Identify Drones w/ Reflectarrays
  focal_point: Smart

---

This project develops an integrated sensing and communication (ISAC) system using active holographic reflectarrays (HRAs) and Open Radio Access Network (O-RAN) technology to detect, classify, and authenticate low-altitude unmanned aerial vehicles (UAVs) below 500 feet for critical infrastructure security. The system coordinates multiple base stations to create dynamic volumetric detection corridors that provide high-resolution monitoring and resilient connectivity where conventional cellular coverage is inadequate. The research combines hardware innovation, AI-driven control, and multi-modal sensing to enable secure airspace access control through advanced beamforming, adaptive resource coordination, and drone identification using micro-Doppler signatures and RFID technology.

## Principal Research Laboratory
PI Zheng’s laboratory supports advanced RF device and system research across sub-6 GHz and mmWave bands (Fig. 1). The facility curates RIS prototypes, mmWave phased-array beamformers, high-performance SDRs (Ettus Research, NI), precision RF instrumentation (Keysight, Rohde & Schwarz, Anritsu), diverse antenna arrays, and advanced IC/PCB design platforms (Cadence Virtuoso, Ansys Electronics Suite, Keysight ADS, CST Studio Suite). Electronic fabrication capabilities include professional soldering and rework stations (Metcal, Hakko), an LPKF PCB prototyping system, and a comprehensive inventory of RF interconnects, attenuators, and passive components, enabling end-to-end design, fabrication, integration, and testing of next-generation holographic RIS technologies. In addition, the laboratory hosts an O-RAN development and testbed environment that integrates SDR-based open RAN stacks with RIS-assisted architectures, supporting real-time experimentation in multi-domain resource slicing, cross-layer ISAC algorithm validation, and system-level performance benchmarking for 5G/6G networks.

## Principal Research Facility (Co-PIs)
The Co-PI Guo and Xue's lab maintain an integrated AI and wireless-sensing research facility supporting edge intelligence, autonomous systems, and RF device experimentation. The facility includes a high-performance AI server equipped with an NVIDIA RTX A6000 GPU for large-scale model training and inference, as well as multiple drone platforms, ranging from consumer camera drones, racing/FPV quads, industrial inspection UAVs, agricultural drones, and specialized research systems, spanning quadcopters, fixed-wing, heavy-lift models made available by UHM drone research and competition team for autonomous flight and sensing research. Specialized hardware resources include custom backscatter communication nodes, an impedance measurement device, a Keysight oscilloscope, and a diverse inventory of RF circuits and components. These are complemented by precision RF instrumentation and prototyping tools for signal characterization, hardware-in-the-loop testing, and rapid development of edge-deployable intelligent sensing systems. This environment enables end-to-end design, integration, and evaluation of next-generation wireless AI and cyber-physical platforms.

## TMYTEK Antenna-in-Package and Phased-Array Fabrication Facility
![TMYTEK's 64x64 element antenna array](facility/vines/tmytek-antenna-array.png)
TMYTEK maintains a fully
integrated design, packaging, and test facility for mmWave antenna-in-package (AiP) and phased-array
modules, supporting applications in 5G, SATCOM, and radar. The facility offers multiple packaging tech-
nologies, including PCB-based, LTCC, and wafer-level system-in-package, enabling rapid prototyping and
volume manufacturing of dual-polarized arrays up to 64×64 elements. In-house resources include advanced
thermal management, beamforming integration, and over-the-air (OTA) measurement systems, such as the
accelerated XBeam test platform and an O-RAN mmWave measurement center co-developed with Keysight.
These resources provide end-to-end capabilities from custom design through fabrication, assembly, and per-
formance validation, ensuring high-frequency phased-array systems meet stringent technical specifications.

## Lualualei Experimental Facility
![Lualualei Test Facility](facility/vines/lualualei-site.png)
The on-site demonstration is conducted at the Lualualei facility, ac-
cessed through the Naval Information Warfare Center Pacific, which can be modified to incorporate a
ground-mounted reflectarray and an integrated sensing-and-communication (ISAC) sensor implemented
on a software-defined radio (SDR) platform for detecting low-altitude drones operating below 500 ft. In such
a configuration, the reflectarray would be positioned to steer and enhance the sensing beam within low-
elevation airspace typically underserved by conventional base stations, while the SDR-based ISAC node
would perform both high-resolution radar sensing and wireless communication functions in a unified system.
The site’s open line-of-sight profile and base station antenna heights (42 ft) optimized for 2,600 ft coverage
provide favorable conditions for these enhancements. The facility connects to a 5G base station, such as a
Parallel Wireless or Mavenir unit, capable of running a full O-RAN network stack in the FR1 (3.5 GHz) and
FR2 (28 GHz) band with MIMO capability, 160 MHz maximum channel bandwidth, and sub-10 ms latency.
This base station supports both backhaul for ISAC data and a communications link for cooperative detection,
enabling real-time UAV localization, tracking, and classification.

