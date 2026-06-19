---
draft: false
title: "Practice Final Exam"
date: 2026-05-08
type: book
commentable: true

summary: "The practice exam for final, EE260, spring, 2026."

tags:
- teaching
- ee260
- final

---
weight: 5
# ECE 260 — Practice Final Exam (2 Hours)

**Course:** ECE 260 Introduction to Digital Design  
**Duration:** 2 Hours  
**Coverage:**  
- Combinational Logic  
- Sequential Logic  
- FSM Design  
- RTL Design  
- Pipelines and Hazards  
- Cache and Memory Hierarchy  
- RISC Pipelines  
- Out-of-Order Processors  


# Part A — Multiple Choice (15 × 2 pts = 30 pts)

Select the **best** answer.


### Q1.
A structural hazard occurs when:

- A. Two pipeline stages require the same hardware resource
- B. A branch instruction changes PC
- C. The clock frequency is too high
- D. A cache miss occurs

**Solution:** A  
Structural hazards occur due to hardware resource conflicts.


### Q2.
Which memory technology is typically used for CPU cache?

- A. DRAM
- B. SRAM
- C. Flash
- D. EEPROM

**Solution:** B  
SRAM is faster and used for cache.


### Q3.
A Moore FSM output depends on:

- A. Inputs only
- B. Current state only
- C. Inputs and outputs
- D. Clock frequency

**Solution:** B


### Q4.
Forwarding in a pipeline mainly reduces:

- A. Structural hazards
- B. RAW hazards
- C. WAR hazards
- D. WAW hazards

**Solution:** B


### Q5.
Which cache organization generally has the fewest conflict misses?

- A. Direct mapped
- B. 2-way set associative
- C. Fully associative
- D. Write-through

**Solution:** C


### Q6.
A barrel shifter is primarily built from:

- A. Adders
- B. Flip-flops
- C. Multiplexers
- D. Decoders

**Solution:** C


### Q7.
In Verilog, nonblocking assignment uses:

- A. =
- B. <=
- C. ==
- D. :=

**Solution:** B


### Q8.
The maximum clock frequency of a processor is determined by:

- A. Shortest path delay
- B. Critical path delay
- C. Number of registers
- D. Cache size

**Solution:** B


### Q9.
Register renaming primarily removes:

- A. RAW hazards
- B. WAR and WAW hazards
- C. Cache hazards
- D. Structural hazards

**Solution:** B


### Q10.
Which pipeline hazard is caused by branch instructions?

- A. RAW
- B. Structural
- C. Control
- D. WAW

**Solution:** C


### Q11.
A flip-flop updates state on:

- A. Logic transitions only
- B. Clock edge
- C. Input enable
- D. Reset signal only

**Solution:** B


### Q12.
The reorder buffer (ROB) is mainly used in:

- A. FSM controllers
- B. Sequential datapaths
- C. Out-of-order processors
- D. SRAM arrays

**Solution:** C


### Q13.
Spatial locality means:

- A. Recently used data reused soon
- B. Nearby memory locations likely accessed
- C. Instructions always sequential
- D. Data stored in cache forever

**Solution:** B


### Q14.
Which stage performs arithmetic operations in a classic RISC pipeline?

- A. IF
- B. ID
- C. EX
- D. WB

**Solution:** C


### Q15.
Pipeline throughput improves because:

- A. Instructions execute simultaneously
- B. Clock frequency becomes zero
- C. Pipeline removes all hazards
- D. Cache misses disappear

**Solution:** A


# Part B — Design and Analysis (10 × 7 pts = 70 pts)


# Problem 1 — Sequence Detector FSM

Design a Moore FSM that detects the sequence:

1011

Overlapping sequences should be detected.

### (a)
Draw the state diagram.

### (b)
Define the state transition table.

### (c)
Indicate which state produces output = 1.

### (d)
Explain why a Moore FSM output changes more predictably than a Mealy FSM.


## Solution

### (a) States

- S0 = initial
- S1 = detected `1`
- S2 = detected `10`
- S3 = detected `101`
- S4 = detected `1011`

### (b) Example transitions

- S0 --1→ S1
- S1 --0→ S2
- S2 --1→ S3
- S3 --1→ S4

Overlapping:
- S4 --0→ S2
- S4 --1→ S1

### (c)

Output = 1 only in S4.

### (d)

Moore outputs depend only on registered state, so outputs change only on clock edges.


# Problem 2 — RTL Datapath Design

Implement:

if (SEL == 0)
    X ← A + B
else
    X ← A − B

### (a)
Draw the datapath.

### (b)
Identify required components.

### (c)
Show control signals.

### (d)
Explain how subtraction can be implemented using an adder.


## Solution

### (a) Datapath

Components:
- Register A
- Register B
- ALU
- X register
- Control line SEL

### (b)

Required hardware:
- Adder/Subtractor
- XOR bank for B inversion
- Carry-in control

### (c)

- SEL=0 → addition
- SEL=1 → subtraction

### (d)

A - B = A + (~B) + 1

Uses two’s complement arithmetic.


# Problem 3 — Pipeline Hazard Analysis

Given:

ADD R1,R2,R3
SUB R4,R1,R5
AND R6,R4,R7

### (a)
Identify all RAW hazards.

### (b)
Show where forwarding occurs.

### (c)
Determine if stalls are required.

### (d)
Explain how forwarding improves performance.


## Solution

### (a)

Hazards:
- SUB depends on ADD
- AND depends on SUB

### (b)

Forward:
- ADD EX/MEM → SUB EX
- SUB EX/MEM → AND EX

### (c)

No stalls if forwarding hardware exists.

### (d)

Forwarding bypasses waiting for WB stage.


# Problem 4 — Cache Design

Compare:

- Direct mapped
- 2-way set associative
- Fully associative

### (a)
Draw organization of each.

### (b)
Compare hardware complexity.

### (c)
Compare conflict misses.

### (d)
Which provides best performance and why?


## Solution

### Direct mapped
- Simplest
- Fastest indexing
- Highest conflict misses

### 2-way set associative
- Better balance
- Moderate complexity

### Fully associative
- Lowest conflict misses
- Requires many comparators

Best overall practical choice:
2-way or 4-way associative.


# Problem 5 — Register File

Design a register file with:

- 8 registers
- 2 read ports
- 1 write port

### (a)
Draw block diagram.

### (b)
Explain read operation.

### (c)
Explain write operation.

### (d)
Describe required decoders and multiplexers.


## Solution

### (a)

Components:
- 8 registers
- Write decoder
- Two read MUXes

### (b)

Read ports select registers simultaneously.

### (c)

Write decoder activates one register enable.

### (d)

- 3-to-8 decoder
- Two 8-to-1 MUXes


# Problem 6 — Barrel Shifter

Design a 4-bit rotate-left barrel shifter.

### (a)
Show all possible rotations.

### (b)
Draw multiplexer stages.

### (c)
Determine number of multiplexers required.

### (d)
Explain why barrel shifters are faster than iterative shifters.


## Solution

### (a)

Possible rotations:
- 0
- 1
- 2
- 3

### (b)

Two-stage MUX network:
- Shift by 1
- Shift by 2

### (c)

Requires:
- 8 multiplexers total

### (d)

All shifts occur in parallel combinational hardware.


# Problem 7 — Five-Stage RISC Pipeline

### (a)
Draw the 5 stages.

### (b)
Describe purpose of each stage.

### (c)
Indicate where hazards occur.

### (d)
Explain why pipelining improves throughput.


## Solution

Pipeline:

IF → ID → EX → MEM → WB

### IF
Fetch instruction.

### ID
Decode + register read.

### EX
ALU operation.

### MEM
Memory access.

### WB
Write register.

Hazards:
- RAW in EX
- Control hazards after branch

Throughput improves by overlapping execution.


# Problem 8 — Branch Prediction

### (a)
Explain static branch prediction.

### (b)
Explain dynamic branch prediction.

### (c)
Why do mispredictions hurt performance?

### (d)
What hardware is commonly used in dynamic prediction?


## Solution

### Static
Fixed guess.

### Dynamic
Uses runtime history.

### Misprediction penalty
Pipeline flush required.

### Hardware
- Branch history table
- Saturating counters


# Problem 9 — Out-of-Order Processor

Explain:

### (a)
Issue Queue

### (b)
Reorder Buffer

### (c)
Register Renaming

### (d)
Why OoO processors achieve higher performance.


## Solution

### Issue Queue
Stores ready instructions.

### ROB
Commits instructions in-order.

### Register Renaming
Removes false dependencies.

### Higher performance
Allows independent instructions to execute earlier.


# Problem 10 — Iterative Multiplier

Given:

if (B[0] == 1)
    P ← P + A

A ← A << 1
B ← B >> 1

### (a)
Draw datapath.

### (b)
Identify registers.

### (c)
Draw FSM states.

### (d)
Explain why multiplication requires multiple cycles.


## Solution

### (a)

Datapath:
- Adder
- Shift register A
- Shift register B
- Product register P

### (b)

Registers:
- A
- B
- P
- Counter

### (c)

FSM:
- IDLE
- CHECK
- ADD
- SHIFT
- DONE

### (d)

Each bit of multiplier processed sequentially.

Complexity:
- N-bit multiplication requires N cycles.