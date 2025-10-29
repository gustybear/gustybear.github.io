---
draft: false
title: "Take-Home Midterm Exam Solution: Combinational Circuits and Verilog"
date: 2025-09-30
type: book
commentable: true

summary: "The exam solution for midterm 01, EE260, fall, 2025."

tags:
- teaching
- ee260
- midterms

weight: 2
---
**Scope:** Number systems, Boolean algebra, combinational design, optimization, hazards, MUX/decoder/PLA, Verilog HDL  
**Duration:** 48 hours  
**Instructions**
- Attempt **all** questions. Show reasoning, derivations, and clearly state assumptions.
- Provide **commented, synthesizable Verilog** and a **self‑checking testbench** where requested.
- Include brief timing/area reasoning (big‑O style or gate/count estimates).
- No collaboration. Cite any external references you consulted.

---
## Part A — Multiple Choice (Keys)
1) d  
2) c  
3) a  
4) c  
5) c  
6) b  
7) d  
8) c  
9) b  
10) d  

---

## Part B — Design & Analysis

### Problem 1 — Functional Completeness (NAND‑Only)
**a) Constructions**  
- NOT: \( \neg A = A\,\text{NAND}\,A \)  
- AND: \( A\land B = (A\,\text{NAND}\,B)\,\text{NAND}\,(A\,\text{NAND}\,B) \)  
- OR (by De Morgan): \( A\lor B = (\neg A)\,\text{NAND}\,(\neg B) = (A\,\text{NAND}\,A)\,\text{NAND}\,(B\,\text{NAND}\,B) \)  

**b) Minimal SOP for** \(F=\Sigma(0,2,5,7)\) **→** \(F = A' C' + A C\). (Covers 0,2 and 5,7.)

**c) NAND‑only Verilog**  
```verilog
module F_nand_only(input A,B,C, output F);
  wire nA, nC, t1, t2;  // B not used after minimization
  nand (nA, A, A);
  nand (nC, C, C);
  wire nA_and_nC, AbarCbar;
  nand (nA_and_nC, nA, nC);
  nand (AbarCbar, nA_and_nC, nA_and_nC);
  wire AandC_n, AandC;
  nand (AandC_n, A, C);
  nand (AandC, AandC_n, AandC_n);
  wire nAbarCbar, nAandC;
  nand (nAbarCbar, AbarCbar, AbarCbar);
  nand (nAandC, AandC, AandC);
  nand (F, nAbarCbar, nAandC);
endmodule
```
Gate count ~7 NANDs.

---

### Problem 2 — CSA
Sum bits: \(s_i = a_i \oplus b_i \oplus c_i\), carry bits: \(k_i=(a_ib_i)+(b_ic_i)+(a_ic_i)\). Final result = `s + (k<<1)` via one CPA. Delay better than two ripples.

```verilog
module csa3 #(parameter N=4)(input [N-1:0] a,b,c,
  output [N-1:0] s, output [N-1:0] k);
  genvar i;
  generate for(i=0;i<N;i=i+1) begin: g
    assign s[i]=a[i]^b[i]^c[i];
    assign k[i]=(a[i]&b[i])|(b[i]&c[i])|(a[i]&c[i]);
  end endgenerate
endmodule
```

---

### Problem 3 — 16→4 Priority Encoder
See hierarchical structural solution:
```verilog
module pe4(input [3:0] d, output valid, output [1:0] y);
  assign valid = |d;
  assign y = !valid ? 2'b00 :
             d[3] ? 2'b11 :
             d[2] ? 2'b10 :
             d[1] ? 2'b01 : 2'b00;
endmodule

module pe16(input [15:0] d, output valid, output [3:0] y);
  wire [3:0] v; wire [1:0] y0,y1,y2,y3;
  pe4 u0(d[3:0],   v[0], y0);
  pe4 u1(d[7:4],   v[1], y1);
  pe4 u2(d[11:8],  v[2], y2);
  pe4 u3(d[15:12], v[3], y3);
  pe4 uT(v, valid, y[3:2]);
  reg [1:0] low;
  always @(*) case(y[3:2])
    2'd0: low=y0; 2'd1: low=y1; 2'd2: low=y2; default: low=y3;
  endcase
  assign y[1:0]=low;
endmodule
```

---

### Problem 4 — PLA & ROM
One valid sharing (not unique):  
- \(F_1 = A'B' + C'D' + AD'\)  
- \(F_2 = A'CD + AB' + B'D\)

PLA code shown (shared terms). ROM mapping by full truth table is acceptable (example mapping provided in handout).

---

### Problem 5 — Scalable MUX
Uses \(N-1\) 2→1 cells; for 16→1, 15 cells, depth 4. Recursive `mux_tree` given in handout; students verify widths and `$clog2` correctness with synthesis/sim.

---

### Problem 6 — Comparator
Equations:  
`EQ = Π_i ~(Ai ^ Bi)`  
`GT = g3 | (eq3&g2) | (eq3&eq2&g1) | (eq3&eq2&eq1&g0)`  
`LT` mirror. Verilog in handout accepted.

---

### Problem 7 — Gray/Binary
Gray→Bin prefix XOR; Bin→Gray adjacent XOR. Parameterized modules and exhaustive TB as shown.

---

### Problem 8 — Lock
`assign open = (in==6'b110101) || (in==6'b011110);`  
Security note: define all unspecified inputs as closed (0); avoid ‘x’ in synthesizable paths.

---

### Problem 9 — ALU
Reference ALU with `unique case`. TB randomizes A,B and compares against high‑level model. Resource: adder dominates; scaling roughly linear with N for ripple implementations.

---

### Problem 10 — Adder Tree
Balanced tree depth 3 for 8 inputs; serial is 7. Example parameterized module provided; students may generalize to 2^k inputs or pad to nearest power of two.
```verilog
module sum8 #(parameter W=16)(input [W-1:0] a0,a1,a2,a3,a4,a5,a6,a7,
                              output [W+3:0] sum);
  wire [W:0] s0=a0+a1, s1=a2+a3, s2=a4+a5, s3=a6+a7;
  wire [W+1:0] t0=s0+s1, t1=s2+s3;
  assign sum = t0 + t1;
endmodule
```
---