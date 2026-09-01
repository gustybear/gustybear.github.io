---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "ECE361: Digital Systems and Computer Design"

subtitle: "Fall, 2026"

summary: "EE 361 is a undergraduate-level course on processor design, control design, memory organization, system organization. Pre: 205 and 260, or consent."

date: 2026-08-10T02:58:53+00:00
lastmod: 2026-08-12T02:58:53+00:00
featured: false
draft: false

authors:
- Yao Zheng

tags:
- computer architecture
- processor design
- instruction set architecture
- datapath
- control unit
- memory organization
- input output
- systemverilog
- fpga
- offered course
- current semester

categories: []

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

links:
- name: CRN
  url: ./project/teaching/course_ece361_2026_fall/#logistics
# - name: Textbook
#   url: 
---

# Executive Summary
ECE 361 is an undergraduate-level course on computer organization and processor design. This course explores the fundamental organization and design of computer systems, starting from computer architecture and instruction set architecture (ISA), through processor datapath and control design, to arithmetic logic units (ALUs), memory organization, and input/output (I/O) systems. The course also introduces SystemVerilog for modeling, implementing, and testing processor components and computer systems, providing students with hands-on experience in hardware-oriented system design. Pre: 205 and 260, or consent.

# Logistics {#logistics}
- **CRN**
| ECE361 001 | ECE361L 001 | ECE361L 002 | ECE361L 003 |
| ---        | ---         | ---         | ---         |
| 77422      | 77643       | 77644       | 77645       |

- **Personnel**
| Role / Personnel                                       | Assigned Session                   | Office Hours / Notes                                   |
| ---                                                    | ---                                | ---                                                    |
| Lecturer: [Yao Zheng](mailto:yao.zheng@hawaii.edu)     | N/A                                | see [here](https://calendly.com/yaozheng-hawaii/30min) |
| TA: [Chohao Yu](mailto:chyu@hawaii.edu)                | Session 1 (T 09:00am - 11:45am)    | TBD                                                    |
| TA: [Chohao Yu](mailto:chyu@hawaii.edu)                | Session 2 (T 13:30pm - 16:15pm)    | TBD                                                    |
- **Classroom**
| Time                | Location        | Textbook/HW                                                                                                  | HW/Exam Effort |
| ---                 | ---             | ---                                                                                                          | ---            |
| MWF 09:30am-10:20am | Holmes Hall 242 | *Logic Design and Verification Using SystemVerilog (Revised)* by Donald Thomas                               | Individual     |
|                     |                 | *Computer Organization and Design: The Hardware/Software Interface — MIPS Edition* by Patterson and Hennessy |                |

- **Laboratory**
| Session | Time                 | Location         | Report Effort |
| ---     | ----                 | ---              | ---           |
| 01      | T  09:00am - 11:45am | Holmes Hall 451  |  Group        |
| 02      | T  13:30pm - 16:15pm | Holmes Hall 451  |  Group        |

# Grading

- **Breakdown**[^grading-note]

| Midterm Exam 1 | Midterm Exam 2 | Final Exam | Homeworks / Take-Home Quizzes |
| -------------- | -------------- | ---------- | ----------------------------- |
| 25%            | 25%            | 25%        | 25%                           |

- **Cutoffs**

| A   | A-  | B+  | B   | B-  | C+  | C   | C-  | D+  | D   | D-  | F    |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- |
| 90% | 87% | 83% | 80% | 77% | 73% | 70% | 67% | 63% | 60% | 57% | <57% |

- **Proscribed Conduct**: Copying or otherwise cheating on homework, lab reports, or exam will result in a failing grade for the course. More details can be found at student conduct code policies, [III.C.](http://studentaffairs.manoa.hawaii.edu/policies/conduct_code/proscribed_conduct.php)

# Schedule

## Lecture

## Lecture

| TIME                                  | TOPICS                                                        | READING / HW / EXAM                                           | DEADLINE      |
| ------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------- |
| Week 1 — Mon. 8/24/2026               | Introduction / Review Part 1: Data                           | Data representation, conversions, signed integers, arithmetic | --            |
| Week 1 — Wed. 8/26/2026               | Review Part 2: Logic Operations                              | Logic operations and Boolean concepts                         | --            |
| Week 1 — Fri. 8/28/2026               | Review Part 3: Combinational Circuits                        | Combinational logic and circuit design                        | --            |
| Week 2 — Mon. 8/31/2026               | Review Part 4: Sequential Circuits                           | Sequential logic and state                                    | --            |
| Week 2 — Wed. 9/2/2026                | SystemVerilog I: Combinational Circuits                      | SystemVerilog modeling of combinational circuits              | --            |
| Week 2 — Fri. 9/4/2026                | SystemVerilog I: Simulation                                  | Simulation and verification basics                            | --            |
| Week 3 — Mon. 9/7/2026                | **NO INSTRUCTION — Labor Day**                               | --                                                            | --            |
| Week 3 — Wed. 9/9/2026                | SystemVerilog I: Sequential Circuits                         | Sequential circuit modeling                                   | --            |
| Week 3 — Fri. 9/11/2026               | SystemVerilog I: Additional Constructs                       | Additional SystemVerilog concepts                             | --            |
| Week 4 — Mon. 9/14/2026               | Computer Architecture Overview I: Introduction and Performance | Patterson & Hennessy, Sec. 1.1–1.6                          | --            |
| Week 4 — Wed. 9/16/2026               | Computer Architecture Overview II: Design                    | Patterson & Hennessy, Sec. 1.7–1.11                           | --            |
| Week 4 — Fri. 9/18/2026               | ISA I: Barely C                                              | Programming model and preparation for MIPS ISA                | --            |
| Week 5 — Mon. 9/21/2026               | ISA II: CPU and Instruction Execution                        | MIPS ISA                                                      | --            |
| Week 5 — Wed. 9/23/2026               | ISA III                                                      | MIPS instructions and data operations                         | --            |
| Week 5 — Fri. 9/25/2026               | ISA IV: Instruction Formats                                  | MIPS instruction encoding and formats                         | --            |
| Week 6 — Mon. 9/28/2026               | ISA V: Stack                                                 | Stack organization and usage                                  | --            |
| Week 6 — Wed. 9/30/2026               | ISA Practice / Quiz / Problem Solving                        | Review and practice                                           | --            |
| Week 6 — Fri. 10/2/2026               | ISA VI: Subroutines                                          | Procedure calls and subroutines                               | --            |
| Week 7 — Mon. 10/5/2026               | ISA VII: System-Level Concepts                               | System-level ISA concepts                                     | --            |
| Week 7 — Wed. 10/7/2026               | ISA Review / Problem Solving                                 | Review and practice                                           | --            |
| Week 7 — Fri. 10/9/2026               | Processor I: Single-Cycle Processor                          | Single-cycle datapath and control                             | --            |
| Week 8 — Mon. 10/12/2026              | Processor II: Pipeline                                       | Pipelining fundamentals                                       | --            |
| Week 8 — Wed. 10/14/2026              | Processor II: Pipeline, continued                            | Pipeline stages and timing                                    | --            |
| Week 8 — Fri. 10/16/2026              | Processor III: Pipeline Implementation                       | Pipelined datapath implementation                             | --            |
| Week 9 — Mon. 10/19/2026              | Processor IV: Hazards                                        | Pipeline hazards                                              | --            |
| Week 9 — Wed. 10/21/2026              | Processor V: Data Hazards                                    | **Midterm Exam 1 — Take Home opens**                          | 12:01 AM      |
| Week 9 — Fri. 10/23/2026              | Processor VI: Control Hazards                                | Branches and control hazards                                  | --            |
| Week 10 — Mon. 10/26/2026             | Processor VII: Dynamic Prediction                            | **Midterm Exam 1 — Take Home due**                            | 11:59 PM      |
| Week 10 — Wed. 10/28/2026             | Memory I: Basics                                             | Memory hierarchy fundamentals                                 | --            |
| Week 10 — Fri. 10/30/2026             | Memory II: Blocks and Caches                                 | Cache blocks and mapping                                      | --            |
| Week 11 — Mon. 11/2/2026              | Cache and Memory Review                                      | Memory hierarchy review and practice                          | --            |
| Week 11 — Wed. 11/4/2026              | Memory III: Technologies                                     | Memory technologies                                           | --            |
| Week 11 — Fri. 11/6/2026              | ALU I: Integer Arithmetic                                    | Integer arithmetic                                            | --            |
| Week 12 — Mon. 11/9/2026              | ALU II: Integer Multiplication                               | Multiplication hardware and algorithms                        | --            |
| Week 12 — Wed. 11/11/2026             | **NO INSTRUCTION — Veterans Day**                            | --                                                            | --            |
| Week 12 — Fri. 11/13/2026             | ALU III: Floating Point                                      | Floating-point representation and arithmetic                  | --            |
| Week 13 — Mon. 11/16/2026             | ALU Review                                                   | ALU review and practice                                       | --            |
| Week 13 — Wed. 11/18/2026             | Processor Review                                             | Processor, pipeline, memory, and ALU review                   | --            |
| Week 13 — Fri. 11/20/2026             | Processor / Memory Review                                    | Review and problem solving                                    | --            |
| Week 14 — Mon. 11/23/2026             | SystemVerilog II: Hardware Threads and Clock Domains         | **Midterm Exam 2 — Take Home opens**                          | 12:01 AM      |
| Week 14 — Wed. 11/25/2026             | SystemVerilog II: Hardware Thread Interaction and Interfaces | Thread interaction and interfaces                             | --            |
| Week 14 — Fri. 11/27/2026             | **NO INSTRUCTION — Thanksgiving Period**                     | --                                                            | --            |
| Week 14 — Sun. 11/29/2026             | --                                                            | **Midterm Exam 2 — Take Home due**                            | 11:59 PM      |
| Week 15 — Mon. 11/30/2026             | SystemVerilog III: Testbenches and Randomization             | Verification testbenches and constrained randomization        | --            |
| Week 15 — Wed. 12/2/2026              | SystemVerilog III: Assertions and Sequences                  | Assertions, properties, and sequences                         | --            |
| Week 15 — Fri. 12/4/2026              | I/O: Introduction                                            | I/O fundamentals and system integration                       | --            |
| Week 16 — Mon. 12/7/2026              | I/O: Applications and Examples                               | I/O applications and design examples                          | --            |
| Week 16 — Wed. 12/9/2026              | Final Review                                                 | Comprehensive final review                                    | --            |
| Study Period — 12/11/2026–12/12/2026  | **Study Period**                                             | --                                                            | --            |
| Finals — Mon. 12/14/2026              | **Final Exam — In Person**                                   | Comprehensive Final Exam                                      | 9:45–11:45 AM |

> **Note:** Lecture topics are organized from the provided ECE361 slide set. Midterm placement follows the natural gaps and review material in that sequence; adjust the two midterm dates if the official Fall 2026 exam plan differs.

## Laboratory
# Lab Schedule
| TIME                         | LAB | TOPIC              | DEADLINE        |
| ---------------------------- | --- | ------------------ | --------------- |
| Week 1–2 — 8/25–9/8/2026     | 1   | Unix/Linux         | 9/8, 11:59 PM   |
| Week 3–4 — 9/8–9/22/2026     | 2   | C Language         | 9/22, 11:59 PM  |
| Week 5–6 — 9/22–10/6/2026    | 3   | SystemVerilog I    | 10/6, 11:59 PM  |
| Week 7–8 — 10/6–10/20/2026   | 4   | QtSPIM and MIPS    | 10/20, 11:59 PM |
| Week 9–10 — 10/20–11/3/2026  | 5   | FPGA               | 11/3, 11:59 PM  |
| Week 11–12 — 11/3–11/17/2026 | 6   | CPU Research       | 11/17, 11:59 PM |
| Week 13–15 — 11/17–12/8/2026 | 7   | Pipeline Processor | 12/8, 11:59 PM  |

[^grading-note]: The grading breakdown is subject to change at the discretion of the instructor and in accordance with the University grading system and policies.


[handout 01 url]: #
[handout 02 url]: #
[handout 03 url]: #
[handout 04 url]: #
[handout 05 url]: #
[handout 06 url]: #
[handout 07 url]: #
[handout 08 url]: #
[handout 09 url]: #
[handout 10 url]: #
[handout 11 url]: #
[handout 12 url]: #
[handout 13 url]: #
[handout 14 url]: #
[handout 15 url]: #
[handout 16 url]: #
[handout 17 url]: #
[handout 18 url]: #
[handout 19 url]: #
[handout 20 url]: #
[handout 21 url]: #
[handout 22 url]: #
[handout 23 url]: #
[handout 24 url]: #
[handout 25 url]: #
[handout 26 url]: #
[handout 27 url]: #
[handout 28 url]: #
[handout 29 url]: #
[handout 30 url]: #
[handout 31 url]: #
[handout 32 url]: #
[handout 33 url]: #
[handout 34 url]: #
[handout 35 url]: #
[handout 36 url]: #
[handout 37 url]: #
[handout 38 url]: #
[handout 39 url]: #
[handout 40 url]: #