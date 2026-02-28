---
draft: false
title: "Take-Home Midterm Exam: Combinational Logic and Advanced Verilog"
date: 2026-02-27
type: book
commentable: true

summary: "Midterm I, ECE260, Spring 2026 — In-depth combinational analysis and design."

tags:
- teaching
- ece260
- midterms

weight: 1
---
**Scope:** Number systems, Boolean algebra, multi-level optimization, hazards, arithmetic circuits, encoder/decoder/PLA/ROM, scalable MUX structures, parameterized Verilog  
**Duration:** 48 hours  

**Instructions**
- Attempt **all** questions. Show complete derivations and clearly state assumptions.
- Provide **commented, synthesizable Verilog** and a **self-checking testbench** where requested.
- Include timing and area reasoning (gate depth, gate count, or asymptotic arguments).
- No collaboration. Cite any references consulted.

---

## Part A — Multiple Choice (10 × 3 = 30 pts)

Select the **best** answer.

**Q1.** Which transformation always preserves functional equivalence but may reduce logic depth?  
a) Converting SOP to canonical SOP  
b) Algebraic factoring  
c) Expanding minterms  
d) Adding consensus terms  

**Q2.** A static-1 hazard occurs when:  
a) Output should remain 1 but temporarily glitches to 0  
b) Output should remain 0 but glitches to 1  
c) Clock frequency is too high  
d) Fan-out exceeds limit  

**Q3.** For an N-bit ripple carry adder, worst-case delay is proportional to:  
a) log₂N  
b) N  
c) √N  
d) constant  

**Q4.** Which gate set is functionally complete?  
a) {XOR}  
b) {AND, OR}  
c) {NAND}  
d) {XNOR}  

**Q5.** In synthesizable combinational Verilog, the safest template is:  
a) `always @(posedge clk)`  
b) `always @(*)`  
c) `initial begin`  
d) `#5 y = a & b;`  

**Q6.** A 16→1 multiplexer implemented as a balanced tree of 2→1 MUXes has depth:  
a) 4  
b) 8  
c) 15  
d) 16  

**Q7.** ROM implementation size grows:  
a) Linearly with inputs  
b) Quadratically with inputs  
c) Exponentially with inputs  
d) Logarithmically with inputs  

**Q8.** The consensus term of \(A'B + AC\) is:  
a) BC  
b) B'C  
c) AB  
d) A'C  

**Q9.** Which operator performs bitwise XNOR in Verilog?  
a) `~^`  
b) `^~`  
c) Both  
d) None  

**Q10.** A balanced adder tree reduces delay complexity from O(N) to:  
a) O(1)  
b) O(log N)  
c) O(N²)  
d) O(N log N)  

---

## Part B — Design & Analysis (10 × 7 = 70 pts)

**Problem 1 — Multi-Level Optimization and Cost Analysis**  
Given  
\(F(A,B,C,D,E)=\Sigma(1,3,4,7,11,15,16,18,19,23,27,31)\)

a) Write canonical SOP and POS.  
b) Minimize using K-map.  
c) Factor to reduce depth.  
d) Compare literal count and logic depth between two-level and factored implementations.

**Problem 2 — Hazard Analysis**  
Given  
\(F(A,B,C)=A'B+AC\)

a) Identify static hazards and show transition causing glitch.  
b) Add minimal consensus terms to eliminate hazard.  
c) Estimate glitch width assuming uniform 1 ns gate delay.


**Problem 3 — NAND-Only Realization**  
a) Prove NAND is functionally complete.  
b) Implement \(F(A,B,C)=AB+A'C\) using only 2-input NAND gates.  
c) Count gates and compute logic depth.

**Problem 4 — 32→5 Priority Encoder**  
a) Define truth table with D31 highest priority and `valid`.  
b) Build hierarchically from 4→2 encoders.  
c) Structural Verilog implementation.  
d) Estimate worst-case delay if each 4→2 block delay = 2 ns.

**Problem 5 — Shared PLA vs ROM Implementation**  
Given  
\(F_1=\Sigma(0,2,5,8,10,13)\)  
\(F_2=\Sigma(1,3,6,9,14,15)\)

a) Minimize jointly and identify shared product terms.  
b) Draw PLA matrix (AND plane and OR plane).  
c) Determine memory size for equivalent 16×2 ROM.  
d) Compare area tradeoffs.

**Problem 6 — Balanced Adder Tree**  
Sum eight 12-bit numbers.

a) Serial ripple accumulation: compute depth.  
b) Balanced tree: draw structure and compute depth.  
c) Determine required output width.

**Problem 7 — Parameterized ALU**  

Operations: ADD, SUB, AND, OR, XOR, CMP(==,>,<). Width parameter `N`.

a) Write synthesizable Verilog using `unique case`.  
b) Implement comparison efficiently (no redundant subtraction).  
c) Provide self-checking randomized testbench.  
d) Compare resource growth for N=8 and N=32.

**Problem 8 — Recursive MUX Tree**  

a) Implement a parameterized `mux_tree #(N=16,W=8)` using `generate`.  
b) Ensure balanced structure.  
c) Derive logic depth as function of N.  
d) Provide synthesizable code.

**Problem 9 — Gray/Binary Converters**  

a) Derive 4-bit Gray→Binary and Binary→Gray equations.  
b) Prove composition correctness.  
c) Provide parameterized Verilog and exhaustive testbench.

**Problem 10 — Power-of-Two Detector**  

Design combinational circuit to detect if a 16-bit input is a power of two.

a) Derive minimal Boolean condition.  
b) Implement structural and behavioral Verilog versions.  
c) Compare gate complexity.