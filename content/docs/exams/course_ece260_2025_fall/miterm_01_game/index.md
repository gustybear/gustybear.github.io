---
draft: false
title: "Take-Home Midterm Exam: Combinational Circuits and Verilog"
date: 2025-09-30
type: book
commentable: true

summary: "Midterm I, ECE260, Fall 2025 — In-depth combinational analysis and design."

tags:
- teaching
- ee260
- midterms

weight: 1
---
**Scope:** Number systems, Boolean algebra, combinational design, optimization, hazards, MUX/decoder/PLA, Verilog HDL  
**Duration:** 48 hours  
**Instructions**
- Attempt **all** questions. Show reasoning, derivations, and clearly state assumptions.
- Provide **commented, synthesizable Verilog** and a **self‑checking testbench** where requested.
- Include brief timing/area reasoning (big‑O style or gate/count estimates).
- No collaboration. Cite any external references you consulted.

---
## Part A — Multiple Choice (10 × 3 = 30 pts)
Select the **best** answer.

**Q1.** Which of the following is *not* a characteristic of combinational logic?  
a) Output depends only on present inputs  
b) No feedback paths  
c) May exhibit propagation delay  
d) Requires clock edge to update  

**Q2.** Which Verilog statement is *not* synthesizable in general FPGA/ASIC tools?  
a) `assign y = a & b;`  
b) `always @(*) y = a | b;`  
c) `initial y = 0;`  
d) `case(sel) y = d0; endcase`  

**Q3.** The **critical path delay** in a ripple‑carry adder grows:  
a) Linearly with bit‑width  
b) Logarithmically with bit‑width  
c) Constant with bit‑width  
d) Randomly with input values  

**Q4.** Which gate set is **not** functionally complete?  
a) {NAND}  
b) {NOR}  
c) {AND, OR}  
d) {XOR, AND}  

**Q5.** In Verilog, `reg` and `wire` differ because:  
a) `reg` can only be used in sequential circuits  
b) `wire` holds values without drivers  
c) `reg` stores a value until reassigned; `wire` reflects drivers continuously  
d) `wire` is faster than `reg`  

**Q6.** A 32‑to‑1 multiplexer can be implemented most efficiently using:  
a) One 32‑input gate  
b) A tree of 2‑to‑1 multiplexers  
c) A PLA  
d) Multiple XOR gates  

**Q7.** Which optimization reduces **logic depth** the most?  
a) Gate duplication  
b) Pipelining  
c) Karnaugh map simplification  
d) Multi‑level factoring  

**Q8.** Which Verilog operator performs **bitwise XNOR**?  
a) `~^`  
b) `^~`  
c) Both a and b  
d) None  

**Q9.** Main limitation of ROM implementation for logic functions is:  
a) Too slow for combinational circuits  
b) Size grows exponentially with #inputs  
c) Can only implement sequential logic  
d) Does not support initialization  

**Q10.** If two drivers assign conflicting values to a Verilog `wire`:  
a) Last assignment wins  
b) Wire holds 0  
c) Wire holds 1  
d) Wire becomes unknown (`x`)  

---

## Part B — Design & Analysis (10 × 7 = 70 pts)

**Problem 1 — Functional Completeness (NAND‑Only)**  
a) Prove {NAND} is functionally complete (construct NOT, AND, OR).  
b) Implement \(F(A,B,C)=\Sigma(0,2,5,7)\) using **NAND‑only**. Show product terms and sharing.  
c) Provide synthesizable Verilog for the NAND‑only implementation and compare gate count v.s. SOP using AND/OR/NOT.

**Problem 2 — Arithmetic: Carry‑Save Adder (CSA)**  
a) Derive a 3‑operand (A,B,C) 4‑bit CSA producing (Sum, Carry).  
b) Compare worst‑case delay against 2‑operand ripple add repeated twice.  
c) Provide synthesizable Verilog for a parameterized CSA.

**Problem 3 — 16→4 Priority Encoder**  
a) Specify truth table/priority convention (D\(15\) highest). Include `valid`.  
b) Build hierarchically from 4×(4→2) encoders + 4→2 encoder.  
c) Structural Verilog with module instances.

**Problem 4 — PLA and ROM Implementations**  
Given:  
\(F_1(A,B,C,D)=\Sigma(0,2,5,8,12),\quad F_2(A,B,C,D)=\Sigma(1,3,4,9,15)\)  
a) Derive minimized SOPs with shared product terms for a PLA.  
b) Sketch a PLA with labeled shared products.  
c) Show 16×2 ROM mapping (address=A B C D).  
d) Provide generic Verilog: (i) PLA using `and` of literals + `or` planes; (ii) ROM using `case` or packed `localparam`.

**Problem 5 — Scalable MUX**  
a) Build a **16→1** MUX using only 2→1 MUXes (balanced tree).  
b) Count 2→1 cells and tree depth.  
c) Write a parameterized **recursive** Verilog module `mux_tree #(N=16,W=1)`.

**Problem 6 — Comparator (4‑bit)**  
a) Derive equations for `GT, EQ, LT`.  
b) Show hierarchical design from chained 1‑bit comparators.  
c) Provide synthesizable Verilog and a constrained‑random testbench.

**Problem 7 — Gray/Binary Converters (4‑bit)**  
a) Derive equations: Gray→Bin and Bin→Gray.  
b) Compose them in loopback to prove `Bin == g2b(b2g(Bin))`.  
c) Parameterized Verilog + exhaustive testbench.

**Problem 8 — Digital Lock**  
Opens for inputs **110101** or **011110**.  
a) Minimize SOP.  
b) Implement via decoder + OR.  
c) Verilog (behavioral and structural).  
d) Short note: why loose “don’t care” policies are risky for security.

**Problem 9 — Parameterized ALU**  
Ops: ADD, SUB, AND, OR, XOR, CMP(==,>,<). Width parameter `N`.  
a) Synthesizable Verilog with `unique case`.  
b) Self‑checking randomized testbench (seeded).  
c) Brief resource discussion for N=8 vs N=32 (qualitative + simple count).

**Problem 10 — Adder Tree**  
Sum eight 16‑bit numbers with minimal depth.  
a) Draw balanced adder tree and give depth.  
b) Compare with serial accumulation.  
c) Parameterized Verilog using `generate` and a reduction tree.
