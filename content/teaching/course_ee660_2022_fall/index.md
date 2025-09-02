---
title: "EE660: Computer Architecture I"

subtitle: "Fall, 2022"

summary: "EE660 is the graduate-level course to study models of computation, high-performance processors, pipelined machines, RISC processors, VLIW, superscalar and fine-grain parallel machines."

date: 2022-08-18T10:07:39-10:00
lastmod: 2022-08-18T10:07:39-10:00
featured: false
draft: false

authors:
- Yao Zheng

tags:
- digital design
- fpga
- offered course
#- current semester

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
#- icon: twitter
#  icon_pack: fab
#  name: Follow
#  url: https://twitter.com/georgecushen
- name: CRN
  url: ./project/teaching/course_ee660_2022_fall/#logistics
#- name: Sample Assignment
# url: ./docs/assignments/course_ee660_2021_fall/week_13/assignment/
---

***
# Executive Summary
Fundamental understanding of computer architecture is key to hardware and processor design, compilers, operating systems, and high performance programming. This course explores computer architectures and design techniques of modern microprocessors at various scales. The focus will be given to architectures that can exploit different forms of parallelism, whether they be implicit or explicit, to improve performance. A selection of topics covered by the course include multi-issue superscalar processors, out-of-order processors, Very Long Instruction Word (VLIW) processors, advanced caching, multiprocessor systems, and parallel programming.
***

# Logistics {#logistics}
- **CRN**
| EE660 001 |
| ---   |
| 76915 |

- **Personnel**:
|                                                    |                                             |
| ----                                               | ---                                         |
| Lecturer: [Yao Zheng](mailto:yao.zheng@hawaii.edu) | Office Hours: see [here](../../../#contact) |

- **Format**:
| Lecture Time       | Lecture Location | Textbook                                                                            | Quiz       | Assignment |
| ----               | ---              | ---                                                                                 | ---        | ---        |
| MW 13:30pm-14:45pm | Holmes Hall 389  | *Required*: Computer Architecture: A Quantitative Approach (5th Edition) (PH11)     | Individual | Team       |
|                    |                  | *Optional*: Modern Processor Design: Fundamentals of Supperscalar Processors (SL13) |            |            |

***
## Grading Policy
-- **Breakdown**
| Quiz & Assignment | Discussion & Participation |
| ----------------  | -----------------------    |
| 80%               | 20%                        |

- **Cutoffs**
| A-     | B-    | C-    |
| ------ | ----- | ----- |
| 70%    | 50%   | 30%   |

- **Proscribed Conduct**: Copying or otherwise cheating on homework, lab reports, or exam will result in a failing grade for the course. More details can be found at student conduct code policies, [III.C.](http://studentaffairs.manoa.hawaii.edu/policies/conduct_code/proscribed_conduct.php)

***
## Schedule

| TIME                     | TOPIC                                                  | LECTURE                                         | READING                                | Quiz                   | ASSG  | DUE  |
| ---------                | ------------------------------------------------------ | ----------------------------------------------- | -------------------------------------- | ---------------------- | ------- | ---- |
| Week 01 (Aug 22, 24)     | Introduction to Computer Architecture                  | [lec 01][lec 01 url]                            | PH11: Chapter 1, C1-C16.               | --                     |         |      |
| Week 02 (Aug 29, 31)     | Review: Pipeline                                       | [lec 02][lec 02 url]                            | PH11: C26, C30-C58, C61-C81.           | --                     |         |      |
| Week 03 (Sep 7)          | Review: Pipeline cont.                                 | --                                              | --                                     |                        |         |      |
| Week 04 (Sep 12, 14)     | Review: Cache                                          | [lec 03][lec 03 url]                            | PH11: B1-B40, SL13:177-209.            | --                     |         |      |
| Week 05 (Sep 19, 21)     | Superscalar Pipelines                                  | [lec 04][lec 04 url]                            | PH11:C43-C61, SL13:217-236                          | --                     |         |      |
| Week 06 (Sep 26, 28)     | Out-of-Order Processors                                | [lec 05][lec 05 url]                            | SL13:338-357                                       | --                     |         |      |
| Week 07 (Oct 3, 5)       | Branch, Register Renaming, and Memory Disambiguation   | [lec 06][lec 06 url]                            | SL13:237-273.                          | --                     |         |      |
| Week 08 (Oct 10, 12)     | VLIW Introduction                                      | [lec 07][lec 07 url]                            | PH11: 192-196, Appendix H              | --                     |         |      |
| Week 09 (Oct 17, 19)     | Branch Prediction                                      | [lec 08][lec 08 url]                            | PH11: C26-C30, SL13:219-237, 453-508   | --                     |         |      |  
| Week 10 (Oct 24, 26)     |  Advanced Cache Optimizations                          | [lec 09][lec 09 url]                            | PH11:71-105                   | --                     |         |      |
| Week 11 (Oct 31, Nov 02) | Memory Protection                                      | [lec 10][lec 10 url]                            | PH11 B41-B67, 105-144                          | --                     |         |
| Week 12 (Nov 07, 09)     | Vector Processors and GPUs                             | [lec 11][lec 11 url]                            | PH11:282-357                                      | --                     |         |      |
| Week 13 (Nov 14, 16)     | Multithreading                                         | [lec 12][lec 12 url]                            | PH11:221-259                           |                        |         |      |
| Week 14 (Nov 21, 23)     | Parallel Programming and Small Multiprocessors         | [lec 13][lec 13 url]                            | PH11:377-400, 343-378                  | --                     |         |      |
| Week 15 (Nov 28, 30)     | Interconnection Network                                | [lec 14][lec 14 url]                            | PH11:Appendix F                        | --                     |         |      |
| Week 16 (Dec 05, 07)     | Large Multiprocessors (Directory Protocols)            | [lec 15][lec 15 url]                            | PH11:378-386, 400-429                  | --                     |         |      |
| Week 17 (Dec 12, 16)     | Elective Topic                                         | --                                              | --                                     | --                     |         |      |

[lec urls]: # (lec urls)
[lec 01 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_01_slides.pdf
[lec 02 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_02_slides.pdf
[lec 03 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_03_slides.pdf
[lec 04 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_04_slides.pdf
[lec 05 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_05_slides.pdf
[lec 06 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_06_slides.pdf
[lec 07 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_07_slides.pdf
[lec 08 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_08_slides.pdf
[lec 09 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_09_slides.pdf
[lec 10 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_10_slides.pdf
[lec 11 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_11_slides.pdf
[lec 12 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_12_slides.pdf
[lec 13 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_13_slides.pdf
[lec 14 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_14_slides.pdf
[lec 15 url]: https://s3-us-west-2.amazonaws.com/gustybear-websites/course_ee660_2022_fall/slides/ee660_2022_fall_materials_week_15_slides.pdf

