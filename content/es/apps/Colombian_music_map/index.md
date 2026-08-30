---
title: "Colombian Music Map"
date: 2026-08-29T00:00:00
lastmod: 2026-08-29T00:00:00
authors: ["admin"]
summary: "Mapa de relieve interactivo que explora las seis regiones musicales de Colombia mediante ejemplos musicales reproducibles, géneros y clasificaciones de tradicional a fusión."
tags: ["App", "Software", "Visualización de datos", "Mapas", "Música", "Colombia", "D3.js"]
editor_options:
  markdown:
    wrap: 80
---

**Colombian Music Map** es una aplicación interactiva de una sola página que muestra las seis regiones musicales de Colombia -- Caribe, Pacífico, Andina, Orinoquía, Amazonía e Insular -- sobre un mapa de relieve con ejemplos musicales reproducibles. Corre completamente en el navegador (no requiere servidor ni instalación), construida con HTML, CSS y JavaScript puros, usando [D3.js](https://d3js.org/) para el mapa.

<p style="display: flex; gap: 0.8em; flex-wrap: wrap; margin-bottom: 1.5em;">
  <a href="https://jdleongomez.github.io/Colombian_music_map/"
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
  <a href="https://github.com/JDLeongomez/Colombian_music_map"
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
</p>

<iframe
  src="https://jdleongomez.github.io/Colombian_music_map/"
  width="100%"
  height="750"
  style="border: 1px solid #e0e0e0; border-radius: 8px;"
  allowfullscreen>
</iframe>

## Contenido de la app

- **Organización regional**: las seis regiones musicales/fisiográficas de Colombia -- Caribe, Pacífico, Andina, Orinoquía, Amazonía e Insular -- ubicadas sobre un mapa de relieve topográfico, con límites departamentales y países vecinos como referencia geográfica.
- **Marcadores interactivos**: ejemplos musicales grabados, ubicados en su origen geográfico, cada uno con título, artista, año, género y clasificación.
- **Indicadores visuales**: diferentes formas de punto distinguen música Tradicional, de Fusión y No tradicional.
- **Reproductor integrado**: las canciones se reproducen directamente en el mapa mediante videos de YouTube incrustados.

## Contribuir

Cualquier persona puede ampliar la colección de canciones: las pistas se encuentran en un único archivo `data/tracks.csv`, editable en cualquier hoja de cálculo, sin necesidad de modificar ningún otro archivo. Consulta el [repositorio en GitHub](https://github.com/JDLeongomez/Colombian_music_map) para conocer el formato de los datos y cómo contribuir.
