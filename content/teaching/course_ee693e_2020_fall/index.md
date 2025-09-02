---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "EE693e (Spec Topics): Wireless and Mobile Security"

subtitle: "Fall, 2020"

summary: "The Fall 2020 iteration of EE693e studies research on wireless and mobile security based on the proceeding of ACM WiSec 2020."

date: 2020-08-23T20:07:39-10:00
lastmod: 2020-08-23T20:07:39-10:00
featured: false
draft: false

authors:
- Yao Zheng

tags:
- wireless security
- offered course
# - current semester

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
- name: Sample Report
  url: ./docs/reports/course_ee693e_2020_fall/week_02/01/
- name: Sample Report
  url: ./docs/reports/course_ee693e_2020_fall/week_02/02/
---
***
# Executive Summary
this course focuses on selected research topics of current interest in wireless security and is intended for undergraduate, master, or doctoral students who are interested in wireless security. at the end of this course, students will have a in-depth knowledge of the state-of-the-art and open problems in wireless security, thus enhancing their potential to do research or pursue a career in this rapidly developing area. this course is structured as a research seminar and laboratory where research papers from leading conferences & journals will be presented by the instructor and students. main topics of interests include: pairing, authentication, access control, wireless sensing and localization, jamming and anti-jamming, security analysis of wireless applications, hardware/firmware, side-channel analysis, IoT privacy, wireless fingerprinting, location privacy, and security in future cellular networks.

***
# Textbook
- required: [wisec '20: proceedings of the 13th acm conference on security and
  privacy in wireless and mobile
  networks](https://dl.acm.org/doi/proceedings/10.1145/3395351), by acm. [online access](https://wisec2020.ins.jku.at/program/)


***
# Logistics
- *lecturer*: [yao zheng](mailto:yao.zheng@hawaii.edu) et al.
- *lecture*: mondays wednesday 9:00am-10:15am,
  virtual via [zoom](https://hawaii.zoom.us/j/5764842348).

- *discussion*: virtual via [discord](https://discord.gg/x5qtzzs).
- *office hours*: schedule it [here](../../#contact).
- *laboratory hours*: schedule it [here](../../facility/#schedule).

***

# Policies
- *presenter*: you may work in teams of two or three. each team will be assigned with two topics (four papers). each team needs to complete two tasks on each paper: (1) give a in-depth presentation (60 min) and answer all the questions during the q&a (15 min); (2) write a one-page (excluding citations) summary of the paper (in ieee conference format).
- *audience*: you must work alone and complete the following tasks for each presentation: (1) watch the conference presentation that accompanies the paper; (2) prepare at least one relevent question for the presenter; (3) grade the presenter's presentation and report. 
***

# Schedule
| time                     | lecture/presentations                | presenter                             | papers                                                                       | video/slides                                                                                 | report                    |
| ---                      | ---                                  | ---                                   | ---                                                                          | ---                                                                                          | ---                       |
| Week 01 (Aug 24, 26)     | Course logistic                      | Yao Zheng                             | ---                                                                          | ---                                                                                          | ---                       |
| Week 02 (Aug 31, Sep 02) | Mobile payments and fraud            | Alvin Yang, Thomas Yang               | [Nagaraja et al.][nagaraja2019], [Ulqinaku et al.][ulqinaku2019]             | [Nagaraja et al.(SLD)][nagaraja2019sld], [Ulqinaku et al.(SLD)][ulqinaku2019sld]             | [Week 02(RPT)][week02rpt] |
| Week 03 (Sep 09)         | NO CLASS                             |                                       |                                                                              |                                                                                              |                           |
| Week 04 (Sep 14, 16)     | Wireless localization and security   | Samson Aggelopoulos, Changlong Wu     | [Sun et al.][sun2020], [Darabseh et al.][darabseh2020]                       | [Sun et al.(VID)][sun2020vid], [Darabseh et al.(VID)][darabseh2020vid]                       | [Week 04(RPT)][week04rpt] |
| Week 05 (Sep 21, 23)     | Jamming and anti-jamming             | Grant A. Stankaitis, Japhet J. Ye     | [Akestoridis et al.][akestoridis2020], [Gvozdenovic et al.][gvozdenovic2020] | [Akestoridis et al.(VID)][akestoridis2020vid], [Gvozdenovic et al.(VID)][gvozdenovic2020vid] | [Week 05(RPT)][week05rpt] |
| Week 06 (Sep 28, 30)     | Mobile app security                  | Dawei Yang, Matthew W. Sahara         | [Zhang et al.][zhang2020], [Heinze et al.][heinze2020]                       | [Zhang et al.(VID)][zhang2020vid], [Heinze et al.(VID)][heinze2020vid]                       | [Week 06(RPT)][week06rpt] |
| Week 07 (Oct 05, 07)     | Physical-layer security              | Samson Aggelopoulos, Noha M. Mohammed | [Moser et al.][moser2019], [Maier et al.][maier2020]                         | [Moser et al.][moser2019][Maier et al.(VID)][maier2020vid]                                   | [Week 07(RPT)][week07rpt] |
| Week 08 (Oct 12, 14)     | Hardware, firmware, and side-channel | Alvin Yang, Japhet J. Ye              | [Robyns et al.][robyns2020], [Striegel et al.][striegel2020]                 | [Robyns et al.(VID)][robyns2020vid], [Striegel et al.(VID)][striegel2020vid]                 | [Week 08(RPT)][week08rpt] |
| Week 09 (Oct 19, 21)     | Wireless fingerprints                | Brian Z. Lu, Matthew W. Sahara        | [Foruhandeh et al.][foruhandeh2020], [Wang et al.][wang2020]                 | [Foruhandeh et al.(VID)][foruhandeh2020vid], [Wang et al.(VID)][wang2020vid]                 | [Week 09(RPT)][week09rpt] |
| Week 10 (Oct 26, 28)     | Location privacy                     | Grant A. Stankaitis, Changlong Wu     | [Sung et al.][sung2020], [Wijewardena et al.][wijewardena2020]               | [Sung et al.(VID)][sung2020vid], [Wijewardena et al.(VID)][wijewardena2020vid]               | [Week 10(RPT)][week10rpt] |
| Week 11 (Nov 02, 04)     | Privacy risks and protection in IoT  | Brian Z. Lu, Noha M. Mohammed         | [Weller et al.][weller2020], [Acar et al.][acar2020]                         | [Weller et al.(VID)][weller2020vid], [Acar et al.(VID)][acar2020vid]                         | [Week 11(RPT)][week11rpt] |
| Week 12 (Nov 09)         | NO CLASS                             |                                       |                                                                              |                                                                                              |                           |
| Week 13 (Nov 16, 18)     | Pairing and access control           | Dawei Yang, Thomas Yang               | [Putz et al.][putz2020], [Sikder et al.][sikder2020]                         | [Putz et al.(VID)][putz2020vid], [Sikder et al.(VID)][sikder2020vid]                         | [Week 13(RPT)][week13rpt] |
| Week 14 (Nov 23, 25)     | Wireless sensing and authentication  | Yao Zheng                             | [Shrestha et al.][shrestha2020], [Wijewickrama et al.][wijewickrama2019]     | [Shrestha et al.(VID)][shrestha2020vid], [Wijewickrama et al.(SLD)][wijewickrama2019sld]     |                           |
| Week 15 (Nov 30, Dec 02) | Security in 4G/LTE                   | Yao Zheng                             | [Kohls et al.][kohls2019], [Fang et al.][fang2020]                           | [Kohls et al.(SLD)][kohls2019sld], [Fang et al.(SLD)][fang2020vid]                           |                           |
| Week 16 (Dec 07, 09)     | Security in 5G                       | Yao Zheng                             | [Yeh et al.][yeh2020], [Hessel et al.][hessel2020]                           | [Yeh et al.(VID)][yeh2020vid], [Hessel et al.(VID)][hessel2020vid]                           |                           |
***
# Acknowledgement
This course is developed with the materials provided by ACM WiSec
2020, and the supports of University of Hawaii at Manoa
Coronavirus Aid, Relief and Economic Security (CARES) grant, 
NSF grants DGE-1662487, CNS-1948568.


[paper urls]: # (paper urls)
[putz2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-73.pdf
[sikder2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-117.pdf
[shrestha2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-173.pdf
[sun2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-59.pdf
[zhang2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-43.pdf
[darabseh2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-136.pdf
[akestoridis2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-153.pdf
[gvozdenovic2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-100.pdf
[heinze2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-28.pdf
[maier2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-134.pdf
[robyns2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-147.pdf
[striegel2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-26.pdf
[weller2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-96.pdf
[acar2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-82.pdf
[foruhandeh2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-75.pdf
[wang2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-106.pdf
[sung2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-282.pdf
[wijewardena2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-267.pdf
[yeh2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-168.pdf
[hessel2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-121.pdf
[nagaraja2019]: https://arxiv.org/pdf/1903.00733.pdf
[ulqinaku2019]: https://dl.acm.org/doi/abs/10.1145/3317549.3323404
[kohls2019]: http://poepper.net/papers/WiSec19-LTEfingerprinting.pdf
[fang2020]: https://wisec2020.ins.jku.at/proceedings/wisec20-44.pdf
[wijewickrama2019]: https://sprite.utsa.edu/publications/papers/wijewickramaWiSec19.pdf
[moser2019]: https://lenders.ch/publications/conferences/wisec19_1.pdf

[video urls]: # (video urls)
[putz2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=4800s
[sikder2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=1375s
[shrestha2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=2537s
[zhang2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=806s
[sun2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=15776s
[darabseh2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=14600s
[akestoridis2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=18825s
[gvozdenovic2020vid]: https://www.youtube.com/watch?v=OaRs1dJCo20&t=20058s
[heinze2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=1984s
[maier2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=3182s
[robyns2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=14516s
[striegel2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=15642s
[weller2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=18625s
[acar2020vid]: https://www.youtube.com/watch?v=XfgLPO2_WRU&t=20910s
[foruhandeh2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=2755s
[wang2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=3982s
[sung2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=12786s
[wijewardena2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=15128s
[yeh2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=18176s
[hessel2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=20557s
[fang2020vid]: https://www.youtube.com/watch?v=0BEU7mPADSk&t=19480s
[wijewickrama2019sld]: https://wisec19.fiu.edu/wp-content/uploads/WiSec2019-Slides-34.pdf

[slides urls]: # (slides urls)
[nagaraja2019sld]: https://wisec19.fiu.edu/wp-content/uploads/Clicktok.pdf
[ulqinaku2019sld]: https://wisec19.fiu.edu/wp-content/uploads/wisec.pdf
[kohls2019sld]: https://wisec19.fiu.edu/wp-content/uploads/wisec_19_kk.pdf

[report urls]: # (report urls)
[week02rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_02/
[week04rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_04/
[week05rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_05/
[week06rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_06/
[week07rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_07/
[week08rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_08/
[week09rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_09/
[week10rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_10/
[week11rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_11/
[week13rpt]: ../../../docs/reports/course_ee693e_2020_fall/week_13/
