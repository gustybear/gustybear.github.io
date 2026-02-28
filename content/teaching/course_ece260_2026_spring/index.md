---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "ECE260: Introduction to Digital Design"

subtitle: "Spring, 2026"

summary: "ECE260 is the introductory course on digital circuit synthesis, focusing on the design and implementation of combinational logic, sequential logic, and basic central processor (van Neumann/Princeton architecture) through Verilog HDL and FPGA. Pre: 160 or 110 or ICS 111 or consent."

date: 2026-01-10T02:58:53+00:00
lastmod: 2026-01-12T02:58:53+00:00
featured: false
draft: false

authors:
- Yao Zheng

tags:
- digital circuit
- hardware synthesis
- verilog
- fpga
- xilinx
- combinational logic
- sequential logic
- finite state machine
- high level finite state machine
- van neumann architecture
- princeton architecture
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
  url: ./project/teaching/course_ece260_2026_spring/#logistics
- name: Textbook
  url: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026
---

# Executive Summary
This course explores the foundation of digital circuit design, starting from Boolean algebra, through combinational and sequential logic, to finite state machines and basic central processing units (CPUs) under von Neumann architecture. The associated laboratory segment introduces modern digital design techniques, e.g., Verilog hardware description language (HDL) and field-programmable gate array (FPGA), to model, implement, and test the aforementioned digital circuits. Pre: 160 or 110 or ICS 111 or consent.

# Logistics {#logistics}
- **CRN**
| ECE260 001 | ECE260 002 | 
| ---        | ---        |
| 86937      | 86938      | 

- **Personnel**
| Role / Personnel                                                | Assigned Session                     | Office Hours / Notes                                                 |
| ----                                                            | ---                                  | ---                                                                  |
| Lecturer: [Yao Zheng](mailto:yao.zheng@hawaii.edu)              | N/A                                  | see [here](https://calendly.com/yaozheng-hawaii/30min)               |
| TA: [Ethan Ibanez](mailto:eibanez@hawaii.edu)                   | Session 1 (T  9:00am - 11:45am)      | TBD                                                                  |
| TA: [Ethan Ibanez](mailto:eibanez@hawaii.edu)                   | Session 2 (T  13:30pm - 16:15pm)     | TBD                                                                  |

- **Classroom**
| Time                 | Location            | Textbook/HW                                                                                            | HW/Exam Effort |
| ----                 | ---                 | ---                                                                                                    | ---            |
| MWF 9:30 am-10:20pm  | Bilger Hall 335     | [EE260: Introduction to Digital Design](https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026)  | Individual     |

- **Laboratory**
| Session | Time                | Location         | Report Effort |
| ---     | ----                | ---              | ---           |
| 01      | T 9:00am - 11:45am  | Holmes Hall 451  |  Group        |
| 02      | T 13:30pm - 16:15pm | Holmes Hall 451  |  Group        |

# Grading

- **Breakdown**[^grading-note]
| Participation | Challenge | Labs           | Midterms (2) | Final |
| ----------    | ------    | -------------- | -------      | ---   |
| 5%            | 20%       | 25%            | 20%          | 30%   |

- **Curves**
| Linear                         | Bell            |
| ---                            | ---             |
| participation, challenge, labs | Midterms, Final |

- **Cutoffs**
| A-     | B-    | C-    |
| ------ | ----- | ----- |
| 70%    | 50%   | 30%   |

- **Proscribed Conduct**: Copying or otherwise cheating on homework, lab reports, or exam will result in a failing grade for the course. More details can be found at student conduct code policies, [III.C.](http://studentaffairs.manoa.hawaii.edu/policies/conduct_code/proscribed_conduct.php)

# Schedule
## Lecture
| TIME                         | TOPICS                                                                 | READING/HW/EXAM              | DEADLINE      |
| ---                          | ---                                                                    | ---                          | ---           |
| Week 1 (1/13, 1/15)          | Course Logistic and Introduction                                       | [Read/HW 01][read 01 url]    | 1/18, 11:59PM |
| Week 2 (1/20, 1/22)          | Number Systems                                                         | [Read/HW 02][read 02 url]    | 1/25, 11:59PM |
| Week 3 (1/26, 1/28, 1/30)    | Combinational Logic: Switches, Transistors, Logic Gates                | [Read/HW 03][read 03 url]    | 2/1, 11:59PM  |
| Week 4 (2/2, 2/4, 2/6)       | Combinational Logic: Boolean Algebra                                   | [Read/HW 04][read 04 url]    | 2/8, 11:59PM  |
| Week 5 (2/9, 2/11, 2/13)     | Combinational Logic: Design Process, More Gates                        | [Read/HW 05][read 05 url]    | 2/15, 11:59PM |
| Week 6 (2/16, 2/18, 2/20)    | Encoder, Priority Encoder, Decoder                                     | [Read/HW 06][read 06 url]    | 2/22, 11:59PM |
| Week 7 (2/23, 2/25, 2/27)    | Arithmetic Logic Unit                                                  | --                           | --            |
| Weekend 7 (2/27, 2/28, 2/29) | [Midterm I: Take Home][midterm 01 url]                                 | [Submission link][midt 01 dp], Solution    | 2/29, 06:00PM |
| Week 8 (3/2, 3/4, 3/6)       | Sequential Logic: Clock, Latches, and Flip-Flops                       | [Read/HW 07][read 07 url]    | 3/8, 11:59PM  |
| Week 9 (3/9, 3/11, 3/13)     | Sequential Logic: Finite State Machines                                | [Read/HW 08][read 08 url]    | 3/15, 11:59PM |
| Week 10 (3/16-3/20)          | SPRING RECESS                                                          | --                           | --            |
| Week 11 (3/23, 3/25, 3/27)   | Sequential Logic: Registers, Counters, Shifters, Arithmetic            | [Read/HW 09][read 09 url]    | 3/29, 11:59PM |
| Week 12 (3/30, 4/1)          | Sequential Datapath and Simple Processor Architecture                  |                              | --            |
| Weekend 12 (4/1, 4/2, 4/3)   | Midterm II: Take Home                                                  | Submission link, Solution    | 4/3, 06:00PM  |
| Week 13 (4/6, 4/8, 4/10)     | Register-Transfer Level Design                                         | [Read/HW 11][read 11 url]    | 4/12, 11:59PM |
| Week 14 (4/13, 4/15, 4/17)   | Register Memory Components and FIFO                                    | [Read/HW 12][read 12 url]    | 4/19, 11:59PM |
| Week 15 (4/20, 4/22, 4/24)   | Optimizations and Tradeoffs                                            | [Read/HW 13][read 13 url]    | 4/26, 11:59PM |
| Week 16 (4/27, 4/29, 5/1)    | Physical Implementation on ICs                                         | [Read/HW 14][read 14 url]    | 5/3, 11:59PM  |
| Week 17 (5/4, 5/6)           | Programmable Processors                                                | [Read/HW 15][read 15 url]    | 5/10, 11:59PM |
| Study Period (5/7, 5/8)      | Review, Practice Final                                                 | --                           | --            |
| Finals Week (5/11-5/15)      | Final Exam - TBD                                                       | --                           | TBD           |

## Laboratory
| TIME                                 | Materials                                                      | Virtual               | DEADLINE                      |
| ---                                  | ---                                                            | ---                   | ---                           |
| Week 1 (1/13)                        | --                                                             | ---                   | ---                           |
| Week 2 (1/20)                        | [Vivado Tutorial][lab video 00 url]                            | [Vlab 00][vlab00 url] | 1/25, 11:59PM                 |
| Week 3 (1/27)                        | [Modeling Concepts][lab video 01 url]                          | [Vlab 01][vlab01 url] | 2/1, 11:59PM                  |
| Week 4 (2/3)                         | [Numbering Systems][lab video 02 url]                          | [Vlab 02][vlab02 url] | 2/8, 11:59PM                  |
| Week 5 (2/10)                        | [Multi-Output Circuits][lab video 03 url]                      | [Vlab 03][vlab03 url] | 2/15, 11:59PM                 |
| Week 6 (2/17)                        | [Tasks Functions, and Testbench][lab video 04 url]             | [Vlab 04][vlab04 url] | 2/22, 11:59PM                 |
| Week 7 (2/24)                        | --                                                             |  --                   |  --                           |
| Week 8 (3/3)                         | [Modeling Latches and Flip-Flops][lab video 05 url]            | [Vlab 05][vlab05 url] | 3/8, 11:59PM                  |
| Week 9 (3/10)                        | [Finite State Machines][lab video 06 url]                      | [Vlab 06][vlab06 url] | 3/15, 11:59PM                 |
| Week 10 (3/17)                       | SPRING RECESS                                                  |  --                   |  --                           |
| Week 11 (3/24)                       | --                                                             |  --                   |  --                           |
| Week 12 (3/31)                       | [Modeling Registers and Counters][lab video 07 url]            | [Vlab 07][vlab07 url] | 4/5, 11:59PM                  |
| Week 13 (4/7)                        | [Architectural Wizard and IP Catalog][lab video 08 url]        | [Vlab 08][vlab08 url] | 4/12, 11:59PM                 |
| Week 14 (4/14)                       | [Behavioral Modeling and Timing Constraints][lab video 09 url] | [Vlab 09][vlab09 url] | 4/19, 11:59PM                 |
| Week 15 (4/21)                       | [Sequential System Design using ASM Charts][lab video 10 url]  | [Vlab 10][vlab10 url] | 5/3, 11:59PM                  |
| Week 16 (4/28)                       | --                                                             |  --                   |  --                           |
| Week 17 (5/5)                        | --                                                             |  --                   | --                            |

[^grading-note]: The grading breakdown is subject to change at the discretion of the instructor and in accordance with the University grading system and policies.

[recording urls]: # (recording urls)

[read urls]: # (reading urls)
[read 01 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/1/section/1
[read 02 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/2/section/1
[read 03 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/3/section/1
[read 04 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/4/section/1
[read 05 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/5/section/1
[read 06 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/6/section/1
[read 07 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/7/section/1
[read 08 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/8/section/1
[read 09 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/9/section/1
[read 10 url]: # (reading urls)
[read 11 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/10/section/1
[read 12 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/11/section/1
[read 13 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/12/section/1
[read 14 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/13/section/1
[read 15 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/14/section/1


[vlabs urls]: # (vlabs urls)
[vlab00 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/1
[vlab01 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/2
[vlab02 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/3
[vlab03 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/4
[vlab04 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/5
[vlab05 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/6
[vlab06 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/7
[vlab07 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/8
[vlab08 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/9
[vlab09 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/10
[vlab10 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengSpring2026/chapter/15/section/11


[lab video urls]: # (lab video urls)
[lab video 00 url]: #
[lab video 01 url]: #
[lab video 02 url]: #
[lab video 03 url]: #
[lab video 04 url]: #
[lab video 05 url]: #
[lab video 06 url]: #
[lab video 07 url]: #
[lab video 08 url]: #
[lab video 09 url]: #
[lab video 10 url]: #


[exam urls]: # (exam urls)
[midterm 01 url]: ../../docs/exams/course_ece260_2026_spring/miterm_01_game/
[midt 01 dp]: https://www.dropbox.com/request/vVJ09fV9JWCF7TZDRA6I
[midt 01 sol url]: ../../docs/exams/course_ece260_2026_spring/miterm_01_solutions/
[midt 02 dp]: https://www.dropbox.com/request/TBD
[midterm 02 url]: ../../docs/exams/course_ece260_2026_spring/miterm_02_game/
[midt 02 mp dp]: https://www.dropbox.com/request/TBD
[midterm 02 mp url]: ../../docs/exams/course_ece260_2026_spring/miterm_02_game_mp/
[midt 02 sol url]: ../../docs/exams/course_ece260_2026_spring/miterm_02_solutions/
[final practice url]: ../../docs/exams/course_ece260_2026_spring/final_practice/