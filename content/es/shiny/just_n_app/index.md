---
title: "Just-N Framework: Aplicación Interactiva"
date: 2026-05-07T00:00:00
lastmod: 2026-05-07T00:00:00
authors: ["admin"]
summary: "Aplicación Shiny interactiva que guía a investigadores en la elección, aplicación y justificación de la estrategia más adecuada para el tamaño de muestra, para diseños cuantitativos, cualitativos y mixtos."
tags: ["Estadística", "App", "Software", "R", "Tamaño de muestra", "n", "Correlación", "Pruebas t", "ANOVA", "Métodos cuantitativos", "Métodos cualitativos", "Métodos mixtos", "Just-N Framework"]
editor_options:
  markdown:
    wrap: 80
---


**Just-N Framework: Aplicación Interactiva** es una aplicación Shiny que guía a investigadores de cualquier disciplina a decidir, aplicar y justificar la estrategia más adecuada para el tamaño de muestra de su estudio, ya sea cuantitativo, cualitativo o mixto. Corre completamente en el navegador mediante [Shinylive](https://shiny.posit.co/py/docs/shinylive.html) (WebAssembly): no requiere servidor ni instalar R.

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
    ▶️ Abrir aplicación
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
    📂 Repositorio en GitHub
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

## Contenido de la app

La aplicación está organizada en cinco pestañas:

- **Introducción**: explica por qué justificar el tamaño de muestra es una   decisión metodológica central, y ofrece una guía de navegación inicial.
- **Cuantitativo**: árbol de decisiones parametrizado que lleva a una de cinco estrategias — SESOI/poder estadístico (*a priori*), precisión de estimaciones (intervalos de confianza), diseños secuenciales/adaptativos, evidencia previa y comparabilidad, y análisis de coste-beneficio — cada una con calculadoras   interactivas (`pwr`, Fisher-z) y, para SESOI, simulaciones Monte Carlo.
- **Cualitativo**: árbol de decisiones para cinco estrategias (saturación   teórica o de datos, diversidad y representatividad, muestreo guiado por   comunidad (CBPR), viabilidad y compromisos éticos, y justificación narrativa) con guías metodológicas y referencias citables por estrategia.
- **Mixto**: orientaciones para diseños que combinan componentes cuantitativos y   cualitativos.
- **Referencias**: bibliografía completa (~88 fuentes) con metadatos APA.

## Recurso complementario

Esta app es la versión interactiva del documento estático [**Just-N Framework**](https://jdleongomez.github.io/just_n/), que presenta las mismas estrategias en formato tabla con referencias enlazadas. Ambos recursos son independientes y pueden usarse por separado.

## Citar

> Leongómez, J. D. (2026). *Just-N Framework: Aplicación Interactiva* (v1.0). Zenodo. [https://doi.org/10.5281/zenodo.19860616](https://doi.org/10.5281/zenodo.19860616)
