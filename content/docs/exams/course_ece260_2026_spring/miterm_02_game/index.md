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

**Q1.** Why are **edge-triggered flip-flops** preferred over level-sensitive latches in synchronous systems?  
A. They reduce power consumption  
B. They eliminate race-through conditions  
C. They operate at higher frequency inherently  
D. They require fewer transistors  

**Q2.** A setup time violation occurs when:  
A. Data arrives too early before the clock edge  
B. Data arrives too late before the clock edge  
C. Data changes too slowly  
D. Clock period is too long  

**Q3.** Which of the following circuits is most prone to **metastability**?  
A. Combinational logic  
B. Single flip-flop sampling asynchronous input  
C. Synchronous counter  
D. Registered pipeline  

**Q4.** In a synchronous design, increasing combinational delay between registers will:  
A. Increase hold margin  
B. Reduce maximum clock frequency  
C. Improve timing robustness  
D. Eliminate hazards  

**Q5.** A Moore FSM is generally more stable than a Mealy FSM because:  
A. It uses fewer states  
B. Outputs depend only on registered state  
C. It requires no combinational logic  
D. It runs at lower frequency  

**Q6.** Which condition most directly causes a **hold time violation**?  
A. Data path too slow  
B. Data path too fast  
C. Clock period too long  
D. Setup time too large  

**Q7.** Consider the Verilog snippet:
```verilog
always @(posedge clk) begin
  q = d;
end
```
What is the main issue?  
A. Non-synthesizable  
B. Blocking assignment may cause incorrect sequential behavior  
C. Missing sensitivity list  
D. No issue  

**Q8.** Consider:
```verilog
always @(posedge clk) begin
  if (en)
    q <= d;
end
```
If en = 0, what happens to q?  
A. Becomes 0  
B. Becomes unknown  
C. Holds previous value  
D. Toggles  

**Q9.** Which Verilog construct correctly models a synchronous reset flip-flop?  
A.
```verilog
always @(posedge clk or posedge rst)
```
B.
```verilog
always @(posedge clk)
```
C.
```verilog
always @(*)
```
D. Both A and B

**Q10.** In FSM coding, separating state register and next-state logic helps:  
A. Reduce power only  
B. Improve readability and avoid unintended latches  
C. Increase clock frequency directly  
D. Eliminate combinational logic  

---

## Part B — Sequential Design, Analysis, and Schematic (10 × 7 = 70 pts)

**Problem 1 — Hazard Propagation into Sequential Logic**

Given combinational logic feeding a flip-flop:

\(F = A'B + AB'\)

a) Determine whether a **static-1 hazard** exists. Justify using Boolean reasoning  
b) Draw a timing diagram where input transitions cause a glitch  
c) Explain how this glitch can be **captured by a flip-flop**  
d) Modify the logic to eliminate the hazard and draw the corrected schematic  
e) Explain why hazard removal is critical in synchronous pipelines  

**Problem 2 — Multi-Cycle Pulse Generator**

Design a synchronous circuit that generates an output pulse of **exactly 4 clock cycles** upon detecting a rising edge on input `x`.

a) Define the required states and draw the FSM diagram  
b) Provide a complete state transition table  
c) Derive next-state equations  
d) Draw the full schematic (flip-flops + combinational logic)  
e) Describe behavior if `x` is asserted again during the active pulse  

**Problem 3 — Self-Correcting Mod-6 Counter**

Design a synchronous **mod-6 counter (0–5)** that **recovers automatically from invalid states**.

a) Draw the state transition diagram including invalid states  
b) Specify recovery transitions  
c) Choose a state encoding and justify  
d) Derive next-state logic equations  
e) Draw the complete schematic  
f) Explain why self-correction is important in real hardware  

**Problem 4 — Sequence Detector with Overlap and Reset**

Design an FSM that detects the sequence `1101` with overlap allowed.

a) Draw the state diagram (minimal states)  
b) Provide the state transition table  
c) Derive output logic for a Mealy implementation  
d) Convert to a Moore implementation  
e) Compare:
   - output timing  
   - number of states  
f) Add a synchronous reset and explain its effect  

**Problem 5 — Timing Closure and Pipeline Insertion**

A sequential circuit has:

- t_clk-q = 1 ns  
- t_comb = 10 ns  
- t_setup = 2 ns  

a) Compute the minimum clock period and maximum frequency  
b) Determine if the design meets a 100 MHz requirement  
c) Insert one pipeline stage and redraw the system  
d) Recompute timing after pipelining  
e) Discuss:
   - latency increase  
   - throughput improvement  
   - design tradeoffs  

**Problem 6 — Serial Pattern Detection: Architecture Comparison**

Design a system to detect **five consecutive 1s** in a serial bitstream.

a) Implement using a **shift register approach** (block diagram)  
b) Implement using an **FSM approach** (state diagram)  
c) Compare:
   - hardware cost  
   - detection latency  
   - scalability for longer patterns  
d) Explain which design is preferred in ASIC vs FPGA contexts  

**Problem 7 — Reliable Clock Domain Crossing (CDC)**

Design a system to safely transfer an **8-bit data word** between two clock domains.

a) Explain why a simple 2-FF synchronizer is insufficient  
b) Draw a **handshake-based CDC architecture**  
c) Provide a timing diagram showing req/ack interaction  
d) Explain how data integrity and ordering are preserved  
e) Discuss limitations of this approach  

**Problem 8 — Glitch-Free Output Design**

An FSM controls a critical signal that must **never glitch**.

a) Explain why Mealy outputs may produce glitches  
b) Convert a Mealy FSM into a glitch-free Moore FSM  
c) Draw schematic with registered outputs  
d) Analyze timing impact (one-cycle delay, stability)  
e) Discuss when Mealy design is still preferred  

**Problem 9 — Sequential Resource Sharing**

Design a system to compute:

\(Y = A + B + C + D\)

using a **single adder reused over multiple cycles**.

a) Draw the datapath (registers, muxes, adder)  
b) Design the control FSM (states and transitions)  
c) Provide a cycle-by-cycle execution table  
d) Compare with parallel implementation:
   - area  
   - latency  
   - throughput  
e) Explain when sequential reuse is advantageous  

**Problem 10 — Fair Traffic Controller with Priority and Starvation Avoidance**

Design a traffic controller with:

- Main road (high priority)  
- Side road (low priority)  
- Pedestrian request input  

a) Define system states and timing requirements  
b) Draw FSM diagram  
c) Explain how priority is enforced for main road  
d) Design a mechanism to prevent starvation of side road and pedestrians  
e) Ensure all transitions are safe (no conflicting greens)  
f) Discuss how the design can scale to more lanes or intersections  

---