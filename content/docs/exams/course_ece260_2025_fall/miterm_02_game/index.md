---
draft: true
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

---
## Part A — Multiple Choice (10 × 3 pts = 30 pts)
Select the **best** answer.

**Q1.** A positive-level D latch is best described as:
- A. Sampling on rising edges only
- B. Transparent when clock=1 and opaque when clock=0
- C. Triggered on both edges
- D. Metastability-free by design

**Q2.** The parameter that primarily limits f_max is:
- A. Hold time
- B. Recovery time
- C. t_clk-q + t_comb + t_setup
- D. Clock duty cycle

**Q3.** A T flip-flop divides the clock by two because it:
- A. Filters every other edge by delay
- B. Toggles its output at each active edge
- C. Samples input twice per cycle
- D. Has J=0, K=1

**Q4.** A ripple counter differs from a synchronous counter because:
- A. It uses fewer flip-flops
- B. Its stages are clocked by preceding stage outputs
- C. It is immune to propagation delay
- D. It is always faster

**Q5.** In a Moore machine, outputs depend on:
- A. Current input only
- B. Current state only
- C. Next state only
- D. Current and previous inputs

**Q6.** In a Mealy machine:
- A. Outputs change only at clock edges
- B. Outputs depend on state and inputs
- C. It needs more states than Moore always
- D. It cannot be coded in Verilog

**Q7.** A 4-bit shift register with serial input 1101 after four clocks contains (MSB..LSB):
- A. 1011
- B. 1101
- C. 0110
- D. 1110

**Q8.** A hold-time violation can be mitigated by:
- A. Adding delay to data path
- B. Increasing clock frequency
- C. Reducing setup time
- D. Removing all registers

**Q9.** One-hot encoding of an N-state FSM uses:
- A. log2(N) flip-flops
- B. N flip-flops
- C. N-1 flip-flops
- D. 2N flip-flops

**Q10.** Pipeline registers primarily:
- A. Reduce combinational delay per stage
- B. Store only final outputs
- C. Remove all hazards
- D. Reduce setup time of FFs

---

## Part B — Design & Analysis (10 × 7 = 70 pts)

For each problem, complete the Verilog template in the zip and verify using the provided self‑checking testbench.
Name your top‑level modules exactly as specified.

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
