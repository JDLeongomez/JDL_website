+++
title = "Análisis de poder estadístico y cálculo de tamaño de muestra en R: Guía práctica"
date = 2020-08-18T00:00:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["admin"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["3"]

# Publication name and optional abbreviated version.
publication = "*Zenodo*"
publication_short = ""

# Abstract.
abstract = "Esta guía práctica acompaña la serie de videos [Poder estadístico y tamaño de muestra en *R*](https://www.youtube.com/playlist?list=PLHk7UNt35ccVdyHqnQ6oXVYA6JBNFrE1x), de mi canal de YouTube [Investigación Abierta](https://www.youtube.com/user/juanleongomez), que recomiendo ver antes de leer este documento. Contiene una explicación general del análisis de poder estadístico y cálculo de tamaño de muestra, centrándose en el procedimiento para realizar análisis de poder y tamaños de muestra en jamovi y particularmente en R, usando los paquetes [`pwr`](https://www.rdocumentation.org/packages/pwr/versions/1.3-0) (para diseños sencillos) y [`Superpower`](https://cran.r-project.org/web/packages/Superpower/vignettes/intro_to_superpower.html) (para diseños factoriales más complejos). La sección dedicada a [`pwr`](https://www.rdocumentation.org/packages/pwr/versions/1.3-0) está ampliamente basada en [este video](https://youtu.be/ZIjOG8LTTh8) de Daniel S. Quintana (2019)."

# Summary. An optional shortened abstract.
summary = ""

# Digital Object Identifier (DOI)
doi = "10.5281/zenodo.3988777"

# Is this a featured publication? (true/false)
featured = false

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Links (optional).
url_pdf = ""
url_preprint = ""
url_code = "https://doi.org/10.17605/OSF.IO/3QX6A"
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

# Custom links (optional).
# For multiple links, use the form `[{...}, {...}, {...}]`.
# links = [{name = "Supplementary Material", url = ""}]

# Does this page contain LaTeX math? (true/false)
math = true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
[image]
  # Caption (optional)
  caption = "Image credit: **Juan David Leongómez 2020**"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "BottomLeft"

+++

<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>

<html>
  <style>
    section {
        background: white;
        color: white;
        border-radius: 1em;
        padding: 1em;
        left: 50% }
    #inner {
        display: inline-block;
        display: flex;
        align-items: center;
        justify-content: center }
  </style>
  <section>
    <div id="inner">
      <span style="float:left"; class="__dimensions_badge_embed__" data-doi="10.5281/zenodo.3988777" data-hide-zero-citations="true" data-legend="always">
      </span><script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"></script>
      <div  style="float:right"; data-link-target="_blank" data-badge-details="right" data-badge-type="medium-donut"
      data-doi="10.5281/zenodo.3988777"   data-condensed="true" data-hide-no-mentions="true" class="altmetric-embed"></div>
    </div>
  </section>
