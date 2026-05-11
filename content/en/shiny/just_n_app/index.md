---
title: "Just-N Framework: Interactive Application"
date: 2026-05-07T00:00:00
lastmod: 2026-05-07T00:00:00
authors: ["admin"]
summary: "Interactive Shiny application that guides researchers in choosing, applying, and justifying the most appropriate sample size strategy for quantitative, qualitative, and mixed-methods designs."
tags: ["Statistics", "App", "Software", "R", "Sample size", "n", "Correlation", "t-tests", "ANOVA", "Quantitative methods", "Qualitative methods", "Mixed methods", "Just-N Framework"]
editor_options:
  markdown:
    wrap: 80
---

**Just-N Framework: Interactive Application** is a Shiny app that guides researchers from any discipline in deciding, applying, and justifying the most appropriate sample size strategy for their study, whether quantitative, qualitative, or mixed-methods. It runs entirely in the browser via [Shinylive](https://shiny.posit.co/py/docs/shinylive.html) (WebAssembly): no server or R installation required.
<p style="display: flex; gap: 0.8em; flex-wrap: wrap; margin-bottom: 1.5em;">
  <a href="https://jdleongomez.github.io/just_n_app/"
     target="_blank"
     style="
       display: inline-block;
       padding: 0.7em 1.4em;
       background-color: #4f46e5;
       color: #ffffff;
       font-size: 1.05em;
       font-weight: 600;
       border-radius: 8px;
       text-decoration: none;
     ">
    ▶️ Open app
  </a>
  <a href="https://github.com/JDLeongomez/just_n_app"
     target="_blank"
     style="
       display: inline-block;
       padding: 0.7em 1.4em;
       background-color: #24292e;
       color: #ffffff;
       font-size: 1.05em;
       font-weight: 600;
       border-radius: 8px;
       text-decoration: none;
     ">
    📂 GitHub repository
  </a>
  <a href="https://doi.org/10.5281/zenodo.19860616"
     target="_blank"
     style="
       display: inline-block;
       padding: 0.7em 1.4em;
       background-color: #1d6fa4;
       color: #ffffff;
       font-size: 1.05em;
       font-weight: 600;
       border-radius: 8px;
       text-decoration: none;
     ">
    🔗 DOI: 10.5281/zenodo.19860616
  </a>
</p>
<iframe
  src="https://jdleongomez.github.io/just_n_app/"
  width="100%"
  height="750"
  style="border: 1px solid #e0e0e0; border-radius: 8px;"
  allowfullscreen>
</iframe>

## App contents

The application is organised into five tabs:

- **Introduction**: explains why justifying sample size is a central methodological decision, and provides an initial navigation guide.
- **Quantitative**: a parameterised decision tree leading to one of five strategies -- SESOI/statistical power (*a priori*), estimation precision (confidence intervals), sequential/adaptive designs, prior evidence and comparability, and cost-benefit analysis -- each with interactive calculators (`pwr`, Fisher-z) and, for SESOI, Monte Carlo simulations.
- **Qualitative**: a decision tree for five strategies (theoretical or data saturation, diversity and representativeness, community-based participatory research (CBPR), feasibility and ethical commitments, and narrative justification) with methodological guides and citable references per strategy.
- **Mixed**: guidance for designs combining quantitative and qualitative components.
- **References**: full bibliography (~88 sources) with APA metadata.

## Complementary resource

This app is the interactive version of the static document [**Just-N Framework**](https://jdleongomez.github.io/just_n/), which presents the same strategies in table format with linked references. Both resources are self-contained and can be used independently.

## Cite

> Leongómez, J. D. (2026). *Just-N Framework: Interactive Application* (v1.0). Zenodo. [https://doi.org/10.5281/zenodo.19860616](https://doi.org/10.5281/zenodo.19860616)
