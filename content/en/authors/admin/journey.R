library(tidyverse)
library(emojifont)
library(fontawesome)
library(rworldmap)
library(dplyr)
library(sf)
library(stplanr)
library(plotly)

load.fontawesome()
uni <- fontawesome('fa-university')
work <- fontawesome('fa-briefcase')
#teach <- fontawesome('fa-chalkboard')
world <- getMap(resolution = "high")
world <- world %>% st_as_sf()

cities <- st_sfc(
  st_point(c(-74.08175,4.60971)),
  st_point(c(-2.983333,53.400002)),
  st_point(c(-3.936900,56.116600)),
  st_point(c(-74.08175,4.60971))) %>%
  st_sf(name = c('Bogotá','Liverpool', 'Stirling', 'Bogotá')) %>%
  st_set_crs(4326) %>%
  mutate(label = c("", uni, paste(work,uni, sep = " "),
                   paste(work,uni, sep = " ")))

routes <- cities %>%
  points2line() %>%
  slice(c(2,7,12)) %>%
  st_segmentize(units::set_units(100, m))

acj <- ggplot(data = world) +
  geom_sf(color = 'white', lwd = 0.1) +
  xlab("") + ylab("") +
  geom_sf_text(
    data = cities,
    aes(label = label),
    size = 3,
    color = '#008080',
    family = "fontawesome-webfont") +
  geom_sf(data = routes, color = '#008080', size = 0.5, alpha = 0.5,
          linetype = 'dotted') +
  coord_sf(crs = '+proj=robin',
           xlim = c(-10000000, 3500000),
           ylim = c(-390000,6100000)) +
  theme_minimal() +
  theme(panel.grid = element_line(color = 'transparent'),
        plot.margin = margin(-1, 0, -1, -1, "cm"),
        axis.text = element_blank(),
        axis.title = element_blank())

ggplotly(acj)


fig <- plot_geo(lat = c(-74.08175,
                        -2.983333,
                        -3.936900,
                        -74.08175),
                lon = c(4.60971,
                        53.400002,
                        56.116600,
                        4.60971)) %>%
  add_lines(data = cities,
            color = I("#008080"),
            size = I(2)) %>%
  layout(showlegend = FALSE,
         geo = list(resolution = 50,
                    showland = TRUE,
                    showlakes = TRUE,
                    landcolor = toRGB("grey80"),
                    countrycolor = toRGB("white"),
                    lakecolor = toRGB("white"),
                    projection = list(type = "orthographic"),
                    coastlinewidth = 0,
                    lataxis = list(range = c(-10, 60),
                                   showgrid = TRUE,
                                   tickmode = "linear",
                                   dtick = 10),
                    lonaxis = list(range = c(-100, 20),
                                   showgrid = TRUE,
                                   tickmode = "linear",
                                   dtick = 20)))
fig

#####

library(rnaturalearth)

fig <- ne_countries(returnclass = "sf")

plot_ly(fig, color = I("gray80"),
        stroke = I("white"),
        span = I(1)) %>%
  add_sf(split = ~name,
         span = I(1),
         hoverinfo = "text",
         hoveron = "fills") %>%
  layout(showlegend = FALSE,
         geo = list(resolution = 50,
                    showland = TRUE,
                    showlakes = TRUE,
                    landcolor = toRGB("grey80"),
                    countrycolor = toRGB("grey80"),
                    lakecolor = toRGB("white"),
                    projection = list(type = "azimuthal equal area"),
                    coastlinewidth = 2,
                    lataxis = list(range = c(-10, 60),
                                   showgrid = TRUE,
                                   tickmode = "linear",
                                   dtick = 10),
                    lonaxis = list(range = c(-100, 20),
                                   showgrid = TRUE,
                                   tickmode = "linear",
                                   dtick = 20)))

######

library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv')

# change default color scale title
m <- list(colorbar = list(title = "Total Inches"))

# geo styling
g <- list(scope = 'world',
          showland = TRUE,
          landcolor = toRGB("grey83"),
          subunitcolor = toRGB("white"),
          countrycolor = toRGB("white"),
          showlakes = TRUE,
          lakecolor = toRGB("white"),
          showsubunits = TRUE,
          showcountries = TRUE,
          projection = list(type = 'orthographic'),
          lonaxis = list(showgrid = TRUE,
                         gridwidth = 0.5,
                         range = c(-100, 20),
                         dtick = 5),
          lataxis = list(showgrid = TRUE,
                         gridwidth = 0.5,
                         range = c(-10, 60),
                         dtick = 5))

paths <- read.csv("D:/GitHub/JDL_website/content/en/authors/admin/paths.csv", sep=";")
paths$id <- seq_len(nrow(paths))
fig <- plot_geo(cities)
fig <- fig %>% add_segments(data = group_by(paths, id),
                            x = ~start_lon, xend = ~end_lon,
                            y = ~start_lat, yend = ~end_lat,
                            alpha = 0.3, size = I(1), hoverinfo = "none")
fig <- fig %>% layout(geo = geo, showlegend = FALSE)
fig
