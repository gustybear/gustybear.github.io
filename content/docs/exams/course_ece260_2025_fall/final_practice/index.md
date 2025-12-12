---
draft: false
title: "Practice Final Exam"
date: 2025-11-25
type: book
commentable: true

summary: "The practice exam for final, EE260, fall, 2025."

tags:
- teaching
- ee260
- final

weight: 5
---
**Scope:**  Combinational Logic, Sequential logic, RTL Design  
**Duration:** 2 hours  
**Instructions**
- Attempt **all** questions. Show reasoning, derivations, and clearly state assumptions.

---
## Part A — Multiple Choice (5 × 4 pts = 20 pts)
Select the **best** answer.

**Q1.** In a pipelined RTL datapath, a structural hazard occurs when:  
- A. Multiple pipeline stages need the same hardware resource  
- B. Instructions depend on the results of prior instructions  
- C. The clock frequency is too low  
- D. Control signals are not registered  
**Answer:** A

**Q2.** In a synchronous design, increasing the number of pipeline registers generally:  
- A. Increases the critical-path delay  
- B. Decreases the maximum clock frequency  
- C. Reduces combinational delay per stage  
- D. Eliminates data hazards entirely  
**Answer:** C

**Q3.** A register file with two read ports and one write port requires:  
- A. Two physical register copies  
- B. One array with dual-read-access mechanisms  
- C. Flip-flops instead of memory cells  
- D. A clock enable on its read ports  
**Answer:** B

**Q4.** In RTL modeling, the primary purpose of the register-transfer level is to:  
- A. Automatically generate physical layout  
- B. Describe asynchronous data transfers  
- C. Capture clocked state transitions and datapath flow  
- D. Specify combinational logic through truth tables  
**Answer:** C

**Q5.** A Mealy-type controller is preferred over a Moore-type controller when:  
- A. Output latency must be minimized  
- B. Excessive noise immunity is required  
- C. Outputs must be stable throughout the clock cycle  
- D. A synchronous datapath is not available  
**Answer:** A

---

## Part B — Design & Analysis (8 × 10 pts = 80 pts)

### **Problem 1** — 4-Cycle Micro-operation Sequencing
Design a 4-cycle Moore FSM and datapath for:
1. `R1 ← R0 + R2`  
2. `R3 ← R1`  
3. `R4 ← R3 - 1`  
4. `R5 ← R4`

Show datapath (ALU, MUXes, reg enables) and FSM transitions.

### **Problem 2** — 3-Input Conditional Datapath
Implement:
```pseudo
if (A > B)
    X ← A - C
else
    X ← B + C
```
Draw datapath (CMP, ALU, MUX) and two-cycle control sequence.

### **Problem 3** — 4-bit Barrel Shifter
Draw a 4-bit rotate-left barrel shifter (k ∈ {0,1,2,3}) with MUX stages.


### **Problem 4** — 5-State Memory Controller
States: `IDLE → REQ → WAIT → LATCH → DONE`  
WAIT repeats until `mem_ready=1`.  
Draw state diagram + control signals.


### **Problem 5** — 16-bit Accumulator
Accumulator operations:  
- `ACC ← ACC + IN`  
- `ACC ← IN`  
- `ACC ← 0`  
Show ALU, zero-path, MUXing, ACC register control.


### **Problem 6** — Pipeline RAW Hazard Detection
For a 2-stage pipeline (F → X), draw RAW hazard detection hardware and stall logic.


### **Problem 7** — Signed/Unsigned Compare Block
Mode bit: `0 = signed`, `1 = unsigned`.  
Draw comparator datapath + control.


### **Problem 8** — Iterative Multiply Datapath
Given:
```pseudo
P ← P + A (if B[0]=1)
A ← A << 1
B ← B >> 1
```
Draw shift registers, adder, and control FSM.  
Show cycle-by-cycle micro-ops.