---
draft: false
title: "Take-Home Midterm Exam (Makeup): Sequential Circuits and Verilog"
date: 2025-11-25
type: book
commentable: true

summary: "The makeup exam for midterm 02, EE260, fall, 2025."

tags:
- teaching
- ee260
- midterms

weight: 4
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

**Q1.** The primary reason metastability cannot be completely eliminated in synchronous systems is:
- A. Setup and hold times are always zero in practice  
- B. Flip-flops rely on analog behavior near threshold regions  
- C. Clocks in synchronous systems naturally drift  
- D. Combinational gates inherently produce glitches  

**Q2.** A level-sensitive latch used inside a two-phase latch pipeline must satisfy which condition to avoid races?
- A. Both latches must be transparent at the same time  
- B. The two clocks must overlap for reliable data transfer  
- C. The two clocks must be non-overlapping  
- D. Both latches must be opaque for half the cycle  

**Q3.** A master–slave flip-flop is functionally equivalent to:
- A. Two positive-edge-triggered flip-flops in series  
- B. A positive-level latch feeding a negative-level latch  
- C. A single negative-level latch  
- D. A pair of asynchronous SR latches  

**Q4.** The *maximum* safe operating frequency of a synchronous sequential circuit is limited by:
- A. Clock skew plus the hold time requirement  
- B. The minimum propagation delay of the flip-flop  
- C. The longest register-to-register combinational path plus setup time  
- D. The number of flip-flops in the design  

**Q5.** A state machine experiences a transient illegal state during power-up but self-recovers within two cycles. This is most likely due to:
- A. Bad next-state logic  
- B. Incomplete state encoding causing metastability  
- C. Lack of synchronous reset initialization  
- D. Excessive gate fan-out in the critical path  

**Q6.** A Mealy FSM can produce output glitches primarily because:
- A. Its outputs change only on clock edges  
- B. It depends directly on asynchronous inputs  
- C. Its outputs are combinational functions of both state and inputs  
- D. It always requires one extra pipeline stage  

**Q7.** Gray-coded counters are often used in multi-clock systems because:
- A. They require fewer flip-flops than binary counters  
- B. Only one bit changes per transition, minimizing sampling hazards  
- C. They operate at higher maximum clock frequencies  
- D. They automatically synchronize across domains  

**Q8.** In a synchronizer chain for CDC (clock-domain crossing), increasing the number of flip-flops:
- A. Eliminates metastability completely  
- B. Reduces metastability probability exponentially  
- C. Increases metastability probability linearly  
- D. Has no effect on metastability at all  

**Q9.** Which Verilog description is most likely to unintentionally infer a latch?
- A. `always @(posedge clk)` with full assignment  
- B. `always @(*)` missing an `else` assignment  
- C. A continuous assignment with XOR logic  
- D. A blocking assignment inside a clocked block  

**Q10.** A multi-port register file supporting simultaneous read and write must ensure:
- A. Writes occur asynchronously to avoid data hazards  
- B. Read ports are implemented with edge-triggered flip-flops  
- C. Write operations are synchronized and typically prioritized over reads  
- D. Read-after-write data hazards are resolved with bypass logic or forwarding  

---

## Part B — Design & Analysis (10 × 7 = 70 pts)

For each problem, complete the Verilog template in the [zip](https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ece260_2025_fall/midterm+2/ece260_exam_questions_verilog.zip) and verify using the provided self‑checking testbench.
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
