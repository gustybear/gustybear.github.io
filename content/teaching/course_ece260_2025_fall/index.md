---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "ECE260: Introduction to Digital Design"

subtitle: "Spring, 2025"

summary: "ECE260 is the introductory course on digital circuit synthesis, focusing on the design and implementation of combinational logic, sequential logic, and basic central processor (van Neumann/Princeton architecture) through Verilog HDL and FPGA. Pre: 160 or 110 or ICS 111 or consent."

date: 2025-08-27T02:58:53+00:00
lastmod: 2025-08-27T02:58:53+00:00
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
  url: ./project/teaching/course_ece260_2025_fall/#logistics
- name: Textbook
  url: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025
---
***
# Executive Summary
This course explores the foundation of digital circuit design, starting from Boolean algebra, through combinational and sequential logic, to finite state machines and basic central processing units (CPUs) under von Neumann architecture. The associated laboratory segment introduces modern digital design techniques, e.g., Verilog hardware description language (HDL) and field-programmable gate array (FPGA), to model, implement, and test the aforementioned digital circuits. Pre: 160 or 110 or ICS 111 or consent.
***

# Logistics {#logistics}
- **CRN**
| ECE260 001 | ECE260 002 | EE260 003 |
| ---        | ---        | ---       |
| 78638      | 78639      | 78640     |

- **Personnel**
|                                                                 |                                      |                                                                      |
| ----                                                            | ---                                  | ---                                                                  |
| Lecturer: [Yao Zheng](mailto:yao.zheng@hawaii.edu)              | N/A                                  | see [here](https://calendly.com/yaozheng-hawaii/30min)               |
| TA: [Kamea McMillan Zilberman](mailto:kameamz@hawaii.edu)       | Session 1 (R  9:00am - 11:45am)      | HH451, R 12:00pm - 13:00pm                                           |
| TA: [Milan Bukovics](mailto:milanabu@hawaii.edu)                | Session 2 (R  13:30pm - 16:15pm)     | HH451, R 19:30pm - 20:30pm                                           |
| TA: [Milan Bukovics](mailto:milanabu@hawaii.edu)                | Session 3 (R  16:30pm - 19:15pm)     | HH451, R 19:30pm - 20:30pm                                           |
| Grader: [Nathaniel Gideon Castro](mailto:ncastro7@hawaii.edu)   | NA                                                                                                          |

- **Classroom**
| Time                 | Location            | Textbook/HW                                                                                          | HW/Exam Effort |
| ----                 | ---                 | ---                                                                                                  | ---            |
| MWF 11:30 am-12:20pm | Kuykendall Hall 101 | [EE260: Introduction to Digital Design](https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025)  | Individual     |

- **Laboratory**
| Session | Time                | Location         | Report Effort |
| ---     | ----                | ---              | ---           |
| 01      | R 9:00am - 11:45am  | Holmes Hall 451  |  Group        |
| 02      | R 13:30pm - 16:15pm | Holmes Hall 451  |  Group        |
| 02      | R 16:30pm - 19:15pm | Holmes Hall 451  |  Group        |

***
# Grading

- **Breakdown**
| Participation | Challenge | Labs           | Midterms (2) | Final |
| ----------    | ------    | -------------- | -------      | ---   |
| 5%            | 20%       | 25%            | 30%          | 20%   |

- **Curves**
| Linear                         | Bell            |
| ---                            | ---             |
| participation, challenge, labs | Midterms, Final |

- **Cutoffs**
| A-     | B-    | C-    |
| ------ | ----- | ----- |
| 70%    | 50%   | 30%   |

- **Proscribed Conduct**: Copying or otherwise cheating on homework, lab reports, or exam will result in a failing grade for the course. More details can be found at student conduct code policies, [III.C.](http://studentaffairs.manoa.hawaii.edu/policies/conduct_code/proscribed_conduct.php)

***
# Schedule
## Lecture
| TIME                         | TOPICS                                                                 | READING/HW/EXAM              | DEADLINE      |
| ---                          | ---                                                                    | ---                          | ---           |
| Week 1 (8/25, 8/27, 8/29)    | Course Logistic and Introduction                                       | [Read/HW 01][read 01 url]    | 8/31, 11:59PM |
| Week 2 (9/3, 9/5)            | Number Systems                                                         | [Read/HW 02][read 02 url]    | 9/7,  11:59PM |
| Week 3 (9/8, 9/10, 9/12)     | Combinational Logic: Switches, Transistors, Logic Gates                | [Read/HW 03][read 03 url]    | 9/14, 11:59PM |
| Week 4 (9/15, 9/17, 9/19)    | Combinational Logic: Boolean Algebra                                   | [Read/HW 04][read 04 url]    | 9/21, 11:59PM |
| Week 5 (9/22, 9/24, 9/26)    | Combinational Logic: Design Process, More Gates                        | [Read/HW 05][read 05 url]    | 9/28, 11:59PM |
| Week 6 (9/29)                | Practice Midterm I                                                     | --                           | --            |
| Week 6 (10/1)                | Midterm I: 9:30AM - 10:20AM                                            | --                           | --            |
| Week 6 (10/3)                | Midterm I Review                                                       | --                           | --            |
| Week 7 (10/6, 10/8, 10/10)   | Sequential Logic: Clock, Latches, and Flip-Flops                       | [Read/HW 07][read 07 url]    | 10/12, 11:59PM|
| Week 8 (10/15, 10/17)        | Sequential Logic: Finite State Machines                                | [Read/HW 08][read 08 url]    | 10/19, 11:59PM|
| Week 9 (10/20, 10/22, 10/24) | Sequential Logic: Registers, Counters, Shifters, and Arithmetic        | [Read/HW 09][read 09 url]    | 10/26, 11:59PM|
| Week 10 (10/27)              | Practice Midterm II                                                    | --                           | --            |
| Week 10 (10/29)              | Midterm II: 9:30AM - 10:20AM                                           | --                           | --            |
| Week 10 (10/31)              | Midterm II Review                                                      | --                           | --            |
| Week 11 (11/3, 11/5, 11/7)   | Register-Transfer Level Design                                         | [Read/HW 11][read 11 url]    | 11/9, 11:59PM |
| Week 12 (11/10, 11/12, 11/14)| Register Memory Components and FIFO                                    | [Read/HW 12][read 12 url]    | 11/16, 11:59PM|
| Week 13 (11/17, 11/19, 11/21)| Optimizations and Tradeoffs                                            | [Read/HW 13][read 13 url]    | 11/23, 11:59PM|
| Week 14 (11/24, 11/26, 11/28)| Physical Implementation on ICs                                         | [Read/HW 14][read 14 url]    | 11/30, 11:59PM|
| Week 15 (12/1, 12/3, 12/5)   | Programmable Processors                                                | [Read/HW 15][read 15 url]    | 12/7, 11:59PM |
| Week 16 (12/8, 12/10)        | Review, Practice Final                                                 | --                           | --            |
| Week 17 (12/19)              | [Final: 9:45AM - 11:45AM][game final url]                              | --                           | 12/19, 11:45AM|

## Laboratory
| TIME                                 | Materials                                                      | Virtual               | DEADLINE                      |
| ---                                  | ---                                                            | ---                   | ---                           |
| Week 1 (8/26)                        | --                                                             | ---                   | ---                           |
| Week 2 (9/2)                         | [Vivado Tutorial][lab video 00 url]                            | [Vlab 00][vlab00 url] | 8/7, 11:59PM                  |
| Week 3 (9/9)                         | [Modeling Concepts][lab video 01 url]                          | [Vlab 01][vlab01 url] | 9/14, 11:59PM                 |
| Week 4 (9/16)                        | [Numbering Systems][lab video 02 url]                          | [Vlab 02][vlab02 url] | 9/21, 11:59PM                 |
| Week 5 (9/23)                        | [Multi-Output Circuits][lab video 03 url]                      | [Vlab 03][vlab03 url] | 9/28, 11:59PM                 |
| Week 6 (9/30)                        | --                                                             |  --                   |  --                           |
| Week 7 (10/7)                        | [Tasks Functions, and Testbench][lab video 04 url]             | [Vlab 04][vlab04 url] | 10/12, 11:59PM                |
| Week 8 (10/16)                       | [Modeling Latches and Flip-Flops][lab video 05 url]            | [Vlab 05][vlab05 url] | 10/19, 11:59PM                |
| Week 9 (10/21)                       | [Finite State Machines][lab video 06 url]                      | [Vlab 06][vlab06 url] | 10/26, 11:59PM                |
| Week 10 (10/28)                      | --                                                             |  --                   |  --                           |
| Week 11 (11/4)                       | [Modeling Registers and Counters][lab video 07 url].           | [Vlab 07][vlab07 url] | 11/9, 11:59PM                 |
| Week 12 (11/11)                      | [Architectural Wizard and IP Catalog][lab video 08 url].       | [Vlab 08][vlab08 url] | 11/16, 11:59PM                |
| Week 13 (11/18)                      | [Behavioral Modeling and Timing Constraints][lab video 09 url] | [Vlab 09][vlab09 url] | 11/23, 11:59PM                |
| Week 14 (11/25)                      | [Sequential System Design using ASM Charts][lab video 10 url]  | [Vlab 10][vlab10 url] | 12/7, 11:59PM                 |
| Week 15 (12/2)                       | --                                                             |  --                   |                               |
| Week 16 (12/9)                       | --                                                             |  --                   | --                            |
| Week 17 (12/16)                       | --                                                            |  --                   | --                            |

***

[recording urls]: # (recording urls)
[recording 0113 url]: https://youtu.be/RtppPuw2Thw
[recording 0115 url]: https://youtu.be/Io-uqv-oNEM
[recording 0120 url]: https://youtu.be/nSlZ9HoWbqk
[recording 0122 url]: https://youtu.be/WLKV46bScUY
[recording 0125 url]: https://youtu.be/zd7QDoAOB5M
[recording 0127 url]: https://youtu.be/qOvsE0DwB6g
[recording 0129 url]: https://youtu.be/GnCvNdikZ9E
[recording 0201 url]: https://youtu.be/aKAWfHtch7E
[recording 0203 url]: https://youtu.be/3XZm8G8HvGQ
[recording 0205 url]: https://youtu.be/TT6feNwPG5o
[recording 0208 url]: https://youtu.be/j1XKgbZsiyQ
[recording 0210 url]: https://youtu.be/tzZee1WCJjY
[recording 0212 url]: https://youtu.be/8y-eXbUz4pM
[recording 0217 url]: https://youtu.be/pNOfUSQwvdQ
[recording 0222 url]: https://youtu.be/Iy2d9AWodQk
[recording 0224 url]: https://youtu.be/LS11RUABmFo
[recording 0226 url]: https://youtu.be/OyeArTPWShU
[recording 0301 url]: https://youtu.be/anNbjOznNO8
[recording 0303 url]: https://youtu.be/bKm5rYalXHA
[recording 0305 url]: https://youtu.be/_IhJ0ECNnSY
[recording 0308 url]: https://youtu.be/9vp-RKdkr5I
[recording 0310 url]: https://youtu.be/q2X74p8BGSY
[recording 0312 url]: https://youtu.be/VOkZueH-JeU
[recording 0322 url]: https://youtu.be/Ah44ermxwx8
[recording 0329 url]: https://youtu.be/J_4rpI6FpI0
[recording 0331 url]: https://youtu.be/tDa7I-SHRQE
[recording 0405 url]: https://youtu.be/kYcv13UohG8
[recording 0407 url]: https://youtu.be/frvdQcka0x0
[recording 0409 url]: https://youtu.be/Ad3YPhXkpvc
[recording 0412 url]: https://youtu.be/kcbqTWbn3wM
[recording 0414 url]: https://youtu.be/xhgT7T8U130
[recording 0416 url]: https://youtu.be/evFDDTSXZCo
[recording 0419 url]: https://youtu.be/4Fg3OoCjEho
[recording 0421 url]: https://youtu.be/zmqfPlbq4Ww
[recording 0423 url]: https://youtu.be/qz9bKvlZCJY
[recording 0426 url]: https://youtu.be/pX8NtuTNpvE
[recording 0428 url]: https://youtu.be/iV4xkz7ygaI
[recording 0430 url]: https://youtu.be/uaOPjOimqsg
[recording 0503 url]: https://youtu.be/HIHR0tBOeWw
[recording 0505 url]: https://youtu.be/PWIIeYGItZY


[read urls]: # (reading urls)
[read 01 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/1/section/1
[read 02 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/2/section/1
[read 03 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/3/section/1
[read 04 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/4/section/1
[read 05 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/5/section/1
[read 06 url]: # (reading urls)
[read 07 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/6/section/1
[read 08 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/7/section/1
[read 09 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/8/section/1
[read 10 url]: # (reading urls)
[read 11 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/9/section/1
[read 12 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/10/section/1
[read 13 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/11/section/1
[read 14 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/12/section/1
[read 15 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/13/section/1
[read 16 url]: # (reading urls)
[read 17 url]: # (reading urls)


[vlabs urls]: # (vlabs urls)
[vlab00 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/1
[vlab01 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/2
[vlab02 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/3
[vlab03 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/4
[vlab04 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/5
[vlab05 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/6
[vlab06 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/7
[vlab07 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/8
[vlab08 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/9
[vlab09 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/10
[vlab10 url]: https://learn.zybooks.com/zybook/HAWAIIECE260ZhengFall2025/chapter/14/section/11


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
[lab video 10 url]: https://youtu.be/zmqfPlbq4Ww


[exam urls]: # (exam urls)
[practice midterm 01 url]: ../../docs/exams/course_ece260_2025_spring/miterm_01_practice/
[game midterm 01 url]: ../../docs/exams/course_ece260_2025_spring/miterm_01_game/
[practice midterm 02 url]: ../../docs/exams/course_ece260_2025_spring/miterm_02_practice/
[game midterm 02 url]: ../../docs/exams/course_ece260_2025_spring/miterm_02_game/
[game final url]: ../../docs/exams/course_ece260_2025_spring/final_game/