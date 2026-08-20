---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "ECE260: Introduction to Digital Design"

subtitle: "Fall, 2026"

summary: "ECE260 is the introductory course on digital circuit synthesis, focusing on the design and implementation of combinational logic, sequential logic, and basic central processor (van Neumann/Princeton architecture) through Verilog HDL and FPGA. Pre: 160 or 110 or ICS 111 or consent."

date: 2026-08-10T02:58:53+00:00
lastmod: 2026-08-12T02:58:53+00:00
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
  url: ./project/teaching/course_ece260_2026_fall/#logistics
- name: Textbook
  url: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026
---

# Executive Summary
This course explores the foundation of digital circuit design, starting from Boolean algebra, through combinational and sequential logic, to finite state machines and basic central processing units (CPUs) under von Neumann architecture. The associated laboratory segment introduces modern digital design techniques, e.g., Verilog hardware description language (HDL) and field-programmable gate array (FPGA), to model, implement, and test the aforementioned digital circuits. Pre: 160 or 110 or ICS 111 or consent.

# Logistics {#logistics}
- **CRN**
| ECE260 001 | ECE260 002 | ECE260 003 |
| ---        | ---        | ---        |
| 78638      | 78639      | 78640      | 

- **Personnel**
| Role / Personnel                                       | Assigned Session                   | Office Hours / Notes                                   |
| ---                                                    | ---                                | ---                                                    |
| Lecturer: [Yao Zheng](mailto:yao.zheng@hawaii.edu)     | N/A                                | see [here](https://calendly.com/yaozheng-hawaii/30min) |
| TA: [Anindya Bal](mailto:anindyab@hawaii.edu)          | Session 1 (R 09:00am - 11:45am)    | TBD                                                    |
| TA: [Anindya Bal](mailto:anindyab@hawaii.edu)          | Session 2 (R 13:30pm - 16:15pm)    | TBD                                                    |
| TA: [Ziyu Chen](mailto:ziyu89@hawaii.edu)              | Session 3 (R 16:30pm - 19:15pm)    | TBD                                                    |
- **Classroom**
| Time                 | Location            | Textbook/HW                                                                                            | HW/Exam Effort |
| ----                 | ---                 | ---                                                                                                    | ---            |
| MWF 11:30 am-12:20pm | Kuykendall Hall 101 | [EE260: Introduction to Digital Design](https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026)    | Individual     |

- **Laboratory**
| Session | Time                 | Location         | Report Effort |
| ---     | ----                 | ---              | ---           |
| 01      | R 09:00am - 11:45am  | Holmes Hall 451  |  Group        |
| 02      | R 13:30pm - 16:15pm  | Holmes Hall 451  |  Group        |
| 03      | R 16:30pm - 19:15pm  | Holmes Hall 451  |  Group        |

# Grading

- **Breakdown**[^grading-note]
| Participation | Challenge | Labs | Midterms (2) | Final |
| ------------- | --------- | ---- | ------------ | ----- |
| 5%            | 15%       | 25%  | 30%          | 25%   |


- **Cutoffs**
| A-  | B-  | C-  |
| --- | --- | --- |
| 85% | 75% | 60% |

- **Proscribed Conduct**: Copying or otherwise cheating on homework, lab reports, or exam will result in a failing grade for the course. More details can be found at student conduct code policies, [III.C.](http://studentaffairs.manoa.hawaii.edu/policies/conduct_code/proscribed_conduct.php)

# Schedule
## Lecture
| TIME                           | TOPICS                                                                                           | READING/HW/EXAM                   | DEADLINE       |
| ------------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------- | -------------- |
| Week 1 (8/24, 8/26, 8/28)      | [Course Logistics and Introduction][handout 01 url]                                              | [Read/HW 01][read 01 url]         | 8/30, 11:59PM  |
| Week 2 (8/31, 9/2, 9/4)        | [Combinational Logic: Number Systems][handout 02 url]                                            | [Read/HW 02][read 02 url]         | 9/6, 11:59PM   |
| Week 3 (9/7)                   | **NO INSTRUCTION — Labor Day**                                                                   | --                                | --             |
| Week 3 (9/9, 9/11)             | [Combinational Logic: Switches, Transistors, Logic Gates][handout 03 url]                        | [Read/HW 03][read 03 url]         | 9/13, 11:59PM  |
| Week 4 (9/14, 9/16, 9/18)      | [Combinational Logic: Boolean Algebra][handout 04 url]                                           | [Read/HW 04][read 04 url]         | 9/20, 11:59PM  |
| Week 5 (9/21, 9/23, 9/25)      | [Combinational Logic: More Gates and Combinational Logic Devices][handout 05 url]                | [Read/HW 05][read 05 url]         | 9/27, 11:59PM  |
| Week 6 (9/28)                  | Combinational Logic: Design Process                                                              | --                                | --             |
| Week 6 (9/30)                  | **Midterm I Review**                                                                             | --                                | --             |
| Week 6 (10/2)                  | **Midterm I — In Person**                                                                        | --                                | --             |
| Week 7 (10/5, 10/7, 10/9)      | [Sequential Logic: Clocks, Latches, and Flip-Flops][handout 07 url]                              | [Read/HW 07][read 07 url]         | 10/11, 11:59PM |
| Week 8 (10/12, 10/14, 10/16)   | [Sequential Logic: Finite State Machines][handout 08 url]                                        | [Read/HW 08][read 08 url]         | 10/18, 11:59PM |
| Week 9 (10/19, 10/21, 10/23)   | [Sequential Logic: Registers, Counters, Shifters][handout 09 url]                                | [Read/HW 09][read 09 url]         | 10/25, 11:59PM |
| Week 10 (10/26)                | Sequential Logic: Arithmetic Logic Unit                                                          | --                                | --             |
| Week 10 (10/28)                | **Midterm II Review**                                                                            | --                                | --             |
| Week 10 (10/30)                | **Midterm II — In Person**                                                                       | --                                | --             |
| Week 11 (11/2, 11/4, 11/6)     | [RTL: Register-Transfer Level Design][handout 11 url]                                            | [Read/HW 11][read 11 url]         | 11/8, 11:59PM  |
| Week 12 (11/9)                 | [RTL: Register Memory Components and FIFO][handout 12 url]                                       | [Read/HW 12][read 12 url]         | 11/15, 11:59PM |
| Week 12 (11/11)                | **NO INSTRUCTION — Veterans Day**                                                                | --                                | --             |
| Week 12 (11/13)                | [RTL: Register Memory Components and FIFO][handout 12 url]                                       | --                                | --             |
| Week 13 (11/16, 11/18, 11/20)  | [RTL: Optimizations and Tradeoffs][handout 13 url]                                               | [Read/HW 13][read 13 url]         | 11/22, 11:59PM |
| Week 14 (11/23, 11/25)         | [RTL: Physical Implementation on ICs][handout 14 url]                                            | [Read/HW 14][read 14 url]         | 11/29, 11:59PM |
| Week 14 (11/27)                | **NO INSTRUCTION — Thanksgiving Period**                                                         | --                                | --             |
| Week 15 (11/30, 12/2, 12/4)    | [RTL: Programmable Processors][handout 15 url]                                                   | [Read/HW 15][read 15 url]         | 12/6, 11:59PM  |
| Week 16 (12/7, 12/9)           | Review, Practice Final                                                                           | Practice Final                    | --             |
| Study Period (12/11–12/12)     | **Study Period**                                                                                 | --                                | --             |
| Finals (12/18)                 | **Friday 12:00 – 2:00 pm**                                                                       | --                                | 12/18, 2:00PM  |

## Laboratory
| TIME                         | Materials                                                      | Virtual               | DEADLINE        |
| ---                          | ---                                                            | ---                   | ---             |
| Week 1 (8/27)                | [Vivado Tutorial][lab video 00 url]                            | [Vlab 00][vlab00 url] | 8/30, 11:59PM   |
| Week 2 (9/3)                 | [Modeling Concepts][lab video 01 url]                          | [Vlab 01][vlab01 url] | 9/6, 11:59PM    |
| Week 3 (9/10)                | [Numbering Systems][lab video 02 url]                          | [Vlab 02][vlab02 url] | --              |
| Week 4 (9/17)                | [Numbering Systems][lab video 02 url]                          | [Vlab 02][vlab02 url] | 9/20, 11:59PM   |
| Week 5 (9/24)                | [Multi-Output Circuits][lab video 03 url]                      | [Vlab 03][vlab03 url] | --              |
| Week 6 (10/1)                | [Multi-Output Circuits][lab video 03 url]                      | [Vlab 03][vlab03 url] | 10/4, 11:59PM   |
| Week 7 (10/8)                | [Tasks, Functions, and Testbench][lab video 04 url]            | [Vlab 04][vlab04 url] | 10/11, 11:59PM  |
| Week 8 (10/15)               | [Modeling Latches and Flip-Flops][lab video 05 url]            | [Vlab 05][vlab05 url] | 10/18, 11:59PM  |
| Week 9 (10/22)               | [Finite State Machines][lab video 06 url]                      | [Vlab 06][vlab06 url] | --              |
| Week 10 (10/29)              | [Finite State Machines][lab video 06 url]                      | [Vlab 06][vlab06 url] | 11/1, 11:59PM   |
| Week 11 (11/5)               | [Modeling Registers and Counters][lab video 07 url]            | [Vlab 07][vlab07 url] | 11/8, 11:59PM   |
| Week 12 (11/12)              | [Behavioral Modeling and Timing Constraints][lab video 09 url] | [Vlab 09][vlab09 url] | 11/15, 11:59PM  |
| Week 13 (11/19)              | [Sequential System Design using ASM Charts][lab video 10 url]  | [Vlab 10][vlab10 url] | --              |
| Week 14 (11/26)              | **NO INSTRUCTION — Thanksgiving**                              | --                    | --              |
| Week 15 (12/3)               | [Sequential System Design using ASM Charts][lab video 10 url]  | [Vlab 10][vlab10 url] | 12/6, 11:59PM   |
| Week 16 (12/10)              |  Lab Completion                                                | --                    | 12/10, 11:59PM  |

[^grading-note]: The grading breakdown is subject to change at the discretion of the instructor and in accordance with the University grading system and policies.

[recording urls]: # (recording urls)

[read urls]: # (reading urls)
[read 01 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/1/section/1
[read 02 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/2/section/1
[read 03 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/3/section/1
[read 04 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/4/section/1
[read 05 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/5/section/1
[read 06 url]: # (reading urls)
[read 07 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/6/section/1
[read 08 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/7/section/1
[read 09 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/8/section/1
[read 10 url]: # (reading urls)
[read 11 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/9/section/1
[read 12 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/11/section/1
[read 13 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/12/section/1
[read 14 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/13/section/1
[read 15 url]: # (reading urls)

[handout urls]: # (handout urls)
[handout 01 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_01_slides.pdf
[handout 02 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_02_slides.pdf
[handout 03 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_03_slides.pdf
[handout 04 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_04_slides.pdf
[handout 05 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_05_slides.pdf
[handout 06 url]: # (handout urls)
[handout 07 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_07_slides.pdf
[handout 08 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_08_slides.pdf
[handout 09 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_09_slides.pdf
[handout 10 url]: # (handout urls)
[handout 11 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_11_slides.pdf
[handout 12 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_12_slides.pdf
[handout 13 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_13_slides.pdf
[handout 14 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_14_slides.pdf
[handout 15 url]: https://gustybear-websites.s3.us-west-2.amazonaws.com/course_ee260_2026_fall/ee260_2026_fall_materials_week_15_slides.pdf

[vlabs urls]: # (vlabs urls)
[vlab00 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/1
[vlab01 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/2
[vlab02 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/3
[vlab03 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/4
[vlab04 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/5
[vlab05 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/6
[vlab06 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/7
[vlab07 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/8
[vlab08 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/9
[vlab09 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/10
[vlab10 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2026/chapter/14/section/11


[lab video urls]: # (lab video urls)
[lab video 00 url]: https://youtu.be/zd7QDoAOB5M
[lab video 01 url]: https://youtu.be/zd7QDoAOB5M
[lab video 02 url]: https://youtu.be/aKAWfHtch7E
[lab video 03 url]: https://youtu.be/j1XKgbZsiyQ
[lab video 04 url]: https://youtu.be/Iy2d9AWodQk
[lab video 05 url]: https://youtu.be/anNbjOznNO8
[lab video 06 url]: https://youtu.be/9vp-RKdkr5I
[lab video 07 url]: https://youtu.be/J_4rpI6FpI0
[lab video 08 url]: https://youtu.be/frvdQcka0x0
[lab video 09 url]: https://youtu.be/xhgT7T8U130
[lab video 10 url]: https://youtu.be/4Fg3OoCjEho


[exam urls]: # (exam urls)
[midterm 01 url]: ../../docs/exams/course_ece260_2026_spring/miterm_01_game/
[midt 01 dp]: https://www.dropbox.com/request/vVJ09fV9JWCF7TZDRA6I
[midt 01 sol url]: ../../docs/exams/course_ece260_2026_spring/miterm_01_solutions/
[midt 02 dp]: https://www.dropbox.com/request/UtzOFVcysu6Nkn2xADI0
[midterm 02 url]: ../../docs/exams/course_ece260_2026_spring/miterm_02_game/
[midt 02 mp dp]: https://www.dropbox.com/request/TBD
[midterm 02 mp url]: ../../docs/exams/course_ece260_2026_spring/miterm_02_game_mp/
[midt 02 sol url]: ../../docs/exams/course_ece260_2026_spring/miterm_02_solutions/
[final practice url]: ../../docs/exams/course_ece260_2026_spring/final_practice/