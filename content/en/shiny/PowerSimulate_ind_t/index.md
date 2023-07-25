---
title: 'PowerSimulate: Independent t-test'
date: 2023-07-25T00:00:00
authors: ["admin"]
summary: PowerSimulate is a series of small R Shiny applications to run simulation-based power analyses.
tags: ["Shiny", "t-test", "Sample size", "Statistical power"]
add_badge: false
---
## Independent *t*-test
<br>
Power analysis based on the simulation of a population, and the probability of obtaining a significant result with a sample of a given size.
Although more direct tools for power analysis exist for *t*-tests, this application relies on simulations to illustrate the concept of statistical power.

<hr>

This app is available from my (rather slow) personal [Shiny server](https://shiny.jdl-svr.lat/PowerSimulate_ind_t_EN/). However, if that is too slow or my server is not working, you can always run it locally in your computer with R installed. 

To do this, you can simply run the code below in R:

```R
library(shiny)
runGitHub("PowerSimulate_ind_t_EN", "JDLeongomez")
```

(**NOTA:** Para la versión en Español, entra a https://github.com/JDLeongomez/PowerSimulate_ind_t_ES)

<html>
<head><title>Shiny App Iframe</title></head>
<body>
<iframe id="PowerSimulate" src="https://shiny.jdl-svr.lat/PowerSimulate_ind_t_EN/" style="border: none; width: 100%; height: 1650px" frameborder="0"></iframe>
</body>
</html>
