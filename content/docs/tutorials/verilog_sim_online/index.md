---
draft: false
title: "Online Verilog Simulation Guide"
date: 2025-09-30
type: book
commentable: true

summary: "Online tools for Verilog simulation"

tags:
- teaching
- ee260
- tutorial

weight: 1
---
If you don’t have a local Verilog simulator (e.g., Icarus Verilog or Vivado XSim) installed, you can run this lab directly **in your web browser** using free online tools such as **EDA Playground** or **Makerchip**. These platforms allow you to paste your Verilog source and testbench, simulate, and view console outputs or waveforms.

## 🧩 Option 1 — Using EDA Playground (Recommended)

**Website:** [https://edaplayground.com](https://edaplayground.com)

### Steps

1. Open the website and click **“Create New Playground”**.
2. In the **left code pane**, paste your **design source** file:
   - e.g., `src/reg_multifunc.v` or `src/regfile_2r1w.v`
3. In the **right code pane**, paste the corresponding **testbench**:
   - e.g., `tb/tb_reg_multifunc.v` or `tb/tb_regfile_2r1w.v`
4. In the **Tools & Simulators** panel:
   - Set **Language** to `Verilog 2001` or `SystemVerilog 2012`
   - Choose **Simulator**: `Icarus Verilog (vvp)`
   - Uncheck “Enable Design for UVM” if it appears
5. Click **Run ▶️** at the top.
6. Watch the console output:
   - You should see `[PASS]` and `[FAIL]` messages from the testbench.
   - All “PASS” messages indicate correct behavior.

### Saving & Sharing
- Click **Share → Save & Share Link**.
- Include the generated link in your lab report or submission.

---

## ⚙️ Option 2 — Using Makerchip (Advanced Visualizer)

**Website:** [https://makerchip.com](https://makerchip.com)

### Steps

1. Go to the Makerchip homepage → click **“Start Designing”**.
2. Paste both your **design** and **testbench** codes into the editor.
3. Click **Build & Run**.
4. View the **console log** for pass/fail messages and use the **waveform viewer** for debugging.
5. Makerchip automatically recognizes any module ending with `_tb` as the top-level testbench.

---

## ✅ Expected Output

A successful run will produce console logs like:
```
[PASS] LOAD: q=A5 @ t=10
[PASS] SHL:  q=4A @ t=20
[PASS] SHR:  q=25 @ t=30
tb_reg_multifunc completed OK
```

If something fails, you’ll see:
```
[FAIL] SAR from 0x80: got 40 expected C0 @ t=70
```
Fix your RTL code and re-run the simulation.

---

## 💡 Tips
- Use **Ctrl + Enter** (EDA Playground) or **Ctrl + R** (Makerchip) to rerun quickly.
- To view waveforms in EDA Playground:
  - Check “Enable VCD dump” under *Run Options*, then open the waveform viewer.
- Always verify reset behavior and edge timing (posedge clock updates).
- Record your **simulation logs** and include screenshots in your report.

---

**End of Online Simulation Guide**