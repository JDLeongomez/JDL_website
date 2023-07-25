---
title: 'PowerSimulate: Prueba t independiente'
date: 2023-07-25T00:00:00
authors: ["admin"]
summary: PowerSimulate  es una serie de pequeñas aplicaciones R Shiny para ejecutar análisis de poder estadístico con base en simulaciones.
tags: ["Shiny", "Prueba t", "Tamaño de muestra", "Poder"]
add_badge: false
---
## Prueba t independiente
<br>
Análisis de poder basado en la simulación de una población y en la probabilidad de obtener un resultado significativo con una muestra de un tamaño determinado.
Aunque existen herramientas más directas para el análisis de poder en el caso de las correlaciones, esta aplicación se basa en simulaciones para ilustrar el concepto de poder estadístico

<hr>

Esta aplicación está disponible en mi (bastante lento) [servidor personal Shiny](https://shiny.jdl-svr.lat/PowerSimulate_ind_t_ES/). Sin embargo, si corre demasiado lento o mi servidor no funciona, siempre puedes ejecutarla localmente en tu ordenador con R instalado. 

Para ello, basta con ejecutar el código siguiente en R:

```R
library(shiny)
runGitHub("PowerSimulate_ind_t_ES", "JDLeongomez")
```

(**NOTE:** For the English version, go to https://github.com/JDLeongomez/PowerSimulate_ind_t_EN)


<html>
<head><title>Shiny App Iframe</title></head>
<body>
<iframe id="PowerSimulate" src="https://shiny.jdl-svr.lat/PowerSimulate_ind_t_EN/" style="border: none; width: 100%; height: 1650px" frameborder="0"></iframe>
</body>
</html>
