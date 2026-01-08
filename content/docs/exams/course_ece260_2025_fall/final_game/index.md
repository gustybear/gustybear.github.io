---
draft: true
title: "Final Exam"
date: 2025-11-25
type: book
commentable: true

summary: "The exam for final, EE260, fall, 2025."

tags:
- teaching
- ee260
- final

weight: 6
---
**Scope:**  Combinational Logic, Sequential logic, RTL Design  
**Duration:** 2 hours  
**Instructions**
- Attempt **all** questions. Show reasoning, derivations, and clearly state assumptions.

---
## Part A — Multiple Choice (5 × 4 pts = 20 pts)
Select the **best** answer.

**Q1.** The maximum clock frequency of an RTL datapath is primarily limited by:  
- A. Clock skew  
- B. Shortest combinational path  
- C. Longest register-to-register path  
- D. Number of registers in parallel  

**Q2.** A datapath multiplexer placed before a register is typically used to:  
- A. Reduce register count  
- B. Allow multiple sources to write the same register  
- C. Increase clock period  
- D. Allow asynchronous writes  

**Q3.** In a multi-cycle datapath, the controller must:  
- A. Generate a separate clock per functional unit  
- B. Raise exactly one register write-enable per cycle  
- C. Encode micro-operations for each cycle  
- D. Use Mealy outputs only  

**Q4.** A condition code register (NZCV) is typically updated:  
- A. By the ALU during arithmetic operations  
- B. Only at reset  
- C. By the control unit every cycle  
- D. Asynchronously during decoding  

**Q5.** A bypass (forwarding) network eliminates:  
- A. Control hazards  
- B. Structural hazards  
- C. Read-after-write hazards  
- D. Write-after-read hazards  

---

## Part B — Design & Analysis (8 × 10 pts = 80 pts)


### **Problem 1** — 3-Cycle Load Instruction Datapath
RTL sequence:
1. `MAR ← PC`  
2. `MDR ← MEM[MAR]`  
3. `Rdst ← MDR`  
Draw the datapath (PC, MAR, MEM, MDR) + 3-state FSM.


### **Problem 2** — Priority-Based ALU Operation Selection
Control signals: `add_req`, `sub_req`, `and_req`, `or_req`  
Priority: add > sub > and > or  
Draw ALU-control logic + input source MUX.


### **Problem 3** — 8-bit Counter with Load/Hold/Up-Down
Provide datapath and control signals for:  
- Load  
- Hold  
- Increment  
- Decrement


### **Problem 4** — 4-State Mealy Sequence Detector (1011)
Overlapping allowed.  
Provide full state diagram + output logic + register structure.


### **Problem 5** — Register File with One Write / Three Read Ports
Show read-MUX structure, write-decoder, and internal reg architecture.


### **Problem 6** — FIFO State Tracking
A FIFO (depth = 4) is initially empty. Given the operation sequence  
**Enqueue A, Enqueue B, Enqueue C & Dequeue, Dequeue, Enqueue D, Dequeue**,  
determine the data returned by each dequeue and the final FIFO contents.


### **Problem 7** — Pipeline Register with Stall and Flush
Draw and explain a pipeline register between two stages that supports **stall** and **flush**.

- The register stores a data bus (e.g., instruction or control signals).
- **stall = 1**: the register holds its current value (no update).
- **flush = 1**: the register is loaded with a **NOP** value.
- If **stall and flush are both asserted**, **flush has priority**.

Show the register, enable logic, flush (NOP) override, and clearly indicate the priority between stall and flush.


### **Problem 8** — Multi-Cycle Datapath Operation for an ADD Instruction (10 pts)

Consider a basic multi-cycle processor with these stages:  
1. Instruction Fetch (IF)  
2. Instruction Decode / Register Read (ID)  
3. Execute (EX)  
4. Write Back (WB)

For the instruction:
```pseudo
ADD Rdst, Rsrc1, Rsrc2
```
Provide:

- A block-level datapath diagram showing the register file, ALU, ALU output, and the write-back path.  
- The micro-operations performed in each cycle (IF, ID, EX, WB) for this instruction.  
- Any control signals that must be asserted in each stage (e.g., RegWrite, ALUSrcA/B, RegDst).

---