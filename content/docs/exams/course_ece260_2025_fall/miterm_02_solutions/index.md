---
draft: false
title: "Take-Home Midterm Exam: Sequential Circuits and Verilog"
date: 2025-10-28
type: book
commentable: true

summary: "The exam for midterm 02, EE260, fall, 2025."

tags:
- teaching
- ee260
- midterms

weight: 3
---
**Scope:**  Sequential logic, finite state machines, registers, counters, with Verilog modeling  
**Duration:** 48 hours  
**Instructions**
- Attempt **all** questions. Show reasoning, derivations, and clearly state assumptions.
- Provide **commented, synthesizable Verilog** and a **self‑checking testbench** where requested.
- Include brief timing/area reasoning (big‑O style or gate/count estimates).
- No collaboration. Cite any external references you consulted.
- Tutorial of Online tools for Verilog simulation can be found [here](../../../tutorials/verilog_sim_online/).

---
## Part A — Multiple Choice (10 × 3 pts = 30 pts)
Select the **best** answer.

## Part A — Multiple Choice (Keys)
1) b  
2) c  
3) b  
4) b  
5) b  
6) b  
7) b  
8) a  
9) b  
10) a

## Part A (MP) — Multiple Choice (Keys)
1) b  
2) c  
3) b  
4) c  
5) c  
6) c  
7) b  
8) b  
9) b  
10) d

---

## Part B — Design & Analysis (10 × 7 = 70 pts)

Download solutions [here](https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ece260_2025_fall/midterm+2/ece260_exam_solutions_verilog.zip).

**Files provided (in the questions zip):**
- Templates: `*.v` (one per problem)
- Testbenches: `tb_*.v` (one per problem)
- Timescale: `1ns/1ps`

**Problems:**

**Problem 1 — Synchronizer + Edge Detect (`sync_edge`)**  
Synchronize asynchronous `btn_async` into `clk` with a two‑FF synchronizer; output `btn_sync` level and one‑cycle `btn_pulse` on rising edges. Active‑low `rst_n`.

**Problem 2 — Dual‑Edge Capture (`ddr_reg`)**  
Capture `D` on posedge into `Q_pos` and on negedge into `Q_neg`. Active‑low `rst_n`.

**Problem 3 — Mealy Sequence Detector “11010” (`seq_11010_mealy`)**  
Detect the overlapping pattern and assert `Z` on the final bit. Use a minimal FSM.

**Problem 4 — Mod‑6 Up/Down Counter with Enable (`mod6_counter`)**  
3‑bit counter over 0..5. `En` gates counting; `Dir=1` up, `0` down. Synchronous reset to 0.

**Problem 5 — 4×4 Serial Multiplier Controller (`mul4_ctrl`)**  
Shift‑add controller with signals `LdA,LdB,ClrP,Add,Shift,Done`. Start with `start=1`. Iterate 4 times.

**Problem 6 — 2‑Stage Pipeline `(A+B)*C` with Valid/Ready (`pipe_add_mul`)**  
Implement a two‑stage pipeline (add then multiply) with back‑pressure (`in_valid/in_ready`, `out_valid/out_ready`).

**Problem 7 — CDC Bridge 1 MHz → 100 MHz (`cdc_bridge`)**  
Use a `req/ack` handshake and 2FF synchronizers both directions to transfer an 8‑bit word reliably.

**Problem 8 — Moore FSM with Registered Output (`moore_safe`)**  
Provide both combinational output `Zc` and registered `Zr` (hazard‑free).

**Problem 9 — Sequential 4‑bit ALU (`seq_alu4`)**  
Opcode: 00=ADD, 01=AND, 10=XOR, 11=SHL. Registered outputs `Y` and `Cout` with synchronous reset.

**Problem 10 — Traffic Lights with Pedestrian Preempt (`traffic_ped`)**  
Main: G×3, Y×1; Side: G×2, Y×1. Insert `WALK`×4 at a safe point when `ped_req=1`; resume correctly.

---

**Deliverables:**
- PDF with answers to Section A and brief design notes for Section B.
- Verilog sources for all 10 designs.
- Simulation logs/screenshots demonstrating passing testbenches.
