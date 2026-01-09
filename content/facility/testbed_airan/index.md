---
title: Artificial Intelligence Radio Access Network (AI-RAN) with Digital Twin
type: facility
subtype: testbed
image:
  filename: AI-RAN_featured.png
  filename_top: AI-RAN_featured.png
#  filename_bottom: x310.png
#  caption: Ettus USRP X410
  focal_point: Smart
date: 2025-09-01T04:14:54-08:00
authors:  
  - Xiaochan Xue
  - Yao Zheng
  - Thomas Yang
tags:
  - testbed
---

# Executive Summary
This lab-scale mmWave AI-Based RAN testbed integrates **OAIBox**, **NVIDIA Aerial RAN**, **NI USRP X410**, **TMYTEK mmWave beamformers**, and a high-fidelity **Digital Twin pipeline** using **Remcom Wireless InSite** and **ANSYS HFSS SBR+** to create a flexible, programmable, and AI-native 5G/6G research environment. It enables real-time prototyping of mmWave physical layers, AI-driven beam management, hybrid beamforming, AI-enhanced MAC scheduling, and joint communication–sensing (ISAC) experiments. The platform supports end-to-end 5G NR PHY/MAC stacks, GPU-accelerated baseband processing, and mmWave RF front-ends for high-bandwidth OTA testing, while the Digital Twin provides physics-accurate ray-tracing, EM-based antenna modeling, and virtual–to–real co-simulation for channel prediction, beam optimization, and AI dataset generation.

# Core Components

## OAIBox – OpenAirInterface RAN Framework
The testbed uses **OAIBox** as a compact and modular implementation of the full OAI RAN stack. It provides:
- Support for 5G SA/NSA gNB and UE
- Flexible PHY–MAC integration
- Customizable scheduling, HARQ, and protocol features
- Real-time experimentation with RAN procedures and RRC signaling

OAIBox acts as the protocol and control anchor of the testbed.


## NVIDIA Aerial RAN (cuPHY + cuMAC)
The **NVIDIA Aerial** platform provides GPU-accelerated baseband processing and AI-native PHY/MAC capabilities:
- **cuPHY** for NR physical-layer DSP on GPUs  
- **cuMAC** for dynamic MAC scheduling on GPU  
- TensorRT for real-time neural inference  
- Support for multi-cell, multi-user, and high-throughput pipelines  

Aerial enables experiments in:
- AI-driven beam selection and prediction  
- Neural channel estimation  
- Predictive link adaptation and blockage detection  

## NI USRP X410 – Wideband Software-Defined Radio
The **USRP X410** serves as the flexible transceiver frontend with:
- Up to 400 MHz instantaneous bandwidth  
- Four synchronized TX/RX channels  
- 10/1588 PTP synchronization  
- Digital IF for integration with NVIDIA Aerial  

It supports:
- mmWave IF/baseband experimentation  
- Real-time CSI acquisition  
- Multi-subarray MIMO and wideband waveform prototyping  


## TMYTEK mmWave Beamformers (BBox, UD-Box, Beamform Modules)
TMYTEK hardware provides programmable mmWave RF front-ends:
- **UD-Box** for 24–32 GHz up/down-conversion  
- **BBox One / BBox Lite** beamforming arrays  
- API-driven phase/gain control  
- Rapid beam steering and codebook-based operation  

These modules enable:
- Hybrid or analog beamforming
- Electronic steering up to ±60°
- Multi-beam and multi-focus mmWave experimentation  

## Digital Twin

A full **Digital Twin framework** integrates high-fidelity electromagnetic simulation with the physical testbed. This enables reproducible channel modeling, data augmentation, and virtual-to-real RAN optimization.

### Remcom Wireless InSite – Ray Tracing Propagation
Wireless InSite provides a large-scale propagation environment supporting:
- GPU-accelerated 3D ray tracing  
- Detailed mmWave diffraction, reflection, and scattering  
- Urban, indoor, and open-field scenario modeling  
- Material-dependent loss and blockage effects  
- Beam-level channel prediction  

### ANSYS HFSS SBR+ – Full-Wave EM Modeling
HFSS SBR+ enables full-wave modeling of:
- **Antenna arrays**, including TMYTEK beamformers  
- **Reflectarrays**, metasurfaces, and RIS  
- **Realistic gain patterns** for hybrid beamforming  
- Complex EM interactions under mmWave frequencies  

# Capabilities

##  AI-Enhanced RAN Intelligence
- Neural beam prediction and tracking  
- AI-based MAC scheduling  
- CSI-driven link adaptation models  
- Blockage prediction and proactive beam switching  

## mmWave PHY/MAC Research
- Hybrid and digital beamforming  
- Channel sounding and dataset generation  
- Evaluation of mobility, rotation, and blockage  
- 5G NR waveform prototyping  

## Flexible RAN Architecture
- O-RAN 7.2 split between OAIBox and Aerial  
- Multi-RU and multi-sector emulation  
- Edge-cloud cooperative intelligence  

## ISAC (Integrated Sensing and Communication) Extensions
- Joint radar–communication waveform experiments  
- 2D/3D angle estimation  
- Passive sensing with GPU-accelerated FFT pipelines

## Digital Twin–Driven Insights
- Predictive channel statistics and blockage maps  
- Virtual scenario pre-testing  
- Dataset augmentation for AI training  
- Virtual beam codebook optimization  
