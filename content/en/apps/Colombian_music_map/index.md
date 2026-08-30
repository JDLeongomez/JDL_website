---
title: "Colombian Music Map"
date: 2026-08-29T00:00:00
lastmod: 2026-08-29T00:00:00
authors: ["admin"]
summary: "Interactive relief map exploring Colombia's six musical regions through embedded, playable music examples, genres, and traditional-to-fusion classifications."
tags: ["App", "Software", "Data visualization", "Maps", "Music", "Colombia", "D3.js"]
editor_options:
  markdown:
    wrap: 80
---

**Colombian Music Map** is an interactive single-page application that showcases Colombia's six musical regions -- Caribbean, Pacific, Andean, Orinoquía, Amazonía, and Insular -- on a relief map with embedded, playable music examples. It runs entirely in the browser (no server or installation required), built with plain HTML, CSS, and JavaScript, using [D3.js](https://d3js.org/) for the map.

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
    ▶️ Open app
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
    📂 GitHub repository
  </a>
</p>

<iframe
  src="https://jdleongomez.github.io/Colombian_music_map/"
  width="100%"
  height="750"
  style="border: 1px solid #e0e0e0; border-radius: 8px;"
  allowfullscreen>
</iframe>

## App contents

- **Regional organization**: all six of Colombia's musical/physiographic regions -- Caribbean, Pacific, Andean, Orinoquía, Amazonía, and Insular -- laid out on a topographic relief map, with department boundaries and neighbouring countries for geographic context.
- **Clickable markers**: recorded music examples plotted at their geographic origin, each showing title, artist, year, genre, and classification.
- **Visual indicators**: different dot shapes distinguish Traditional, Fusion, and Non-traditional music.
- **Built-in player**: tracks stream directly on the map via embedded YouTube videos.

## Contribute

The song collection can be expanded by anyone: tracks live in a single `data/tracks.csv` file, editable in any spreadsheet application, with no other files to modify. See the [GitHub repository](https://github.com/JDLeongomez/Colombian_music_map) for details on the data format and how to contribute.
