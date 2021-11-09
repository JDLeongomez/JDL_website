---
title: Publications

# View.
#   1 = List
#   2 = Compact
#   3 = Card
#   4 = Citation
view: 4

# Optional header image (relative to `static/img/` folder).
header:
  caption: ""
  image: ""
---

{{< cta cta_text="<strong>NOTE:</strong> Most of my publications are full open-access and/or available as pre-prints. However, if not, please <strong>email me</strong> if you would like a copy of any of the publications listed below" cta_link="/en/#contact" cta_new_tab="false" >}}


```{r include=FALSE}
library(scholar)
library(ggplot2)
library(ggpubr)
library(ggtext)
library(bib2df)
library(scales)
library(xfun)
library(dplyr)

publist <- bib2df("../../../../JDL_CV-master/journal.bib")

jd <- "8Q0jKHsAAAAJ"

ct <- get_citation_history(jd)
pt <- c(1,1,0,1,2,0,2,3,4,1,8)
get_num_articles(jd)
profile <- get_profile(jd)

dat <- cbind(ct, pt)

ylim.prim <- c(0, max(dat$pt)*1.25)   # publications
ylim.sec <- c(0, max(dat$cites))   # citations

b <- diff(ylim.prim)/diff(ylim.sec)
a <- ylim.prim[1] - b*ylim.sec[1]

Sys.setlocale('LC_TIME','English')

p1 <- ggplot(dat, aes(year, pt)) +
  geom_col(fill = "lightgrey") +
  geom_line(aes(y = a + cites*b), color = "#008080") +
  scale_y_continuous("Publications", breaks= pretty_breaks(), sec.axis = sec_axis(~ (. - a)/b, name = "Citations")) +
  theme_pubclean() +
  theme(axis.line.y.right = element_line(color = "#008080"), 
        axis.ticks.y.right = element_line(color = "#008080"),
        axis.text.y.right = element_text(color = "#008080"), 
        axis.title.y.right = element_text(color = "#008080"),
        axis.line.y.left = element_line(color = "black"), 
        axis.ticks.y.left = element_line(color = "black"),
        axis.text.y.left = element_text(color = "black"), 
        axis.title.y.left = element_text(color = "black"),
        #axis.line.x = element_line(color = "grey"), 
        #axis.ticks.x = element_line(color = "grey"),
        plot.subtitle=element_text(size=9)) +
  theme(axis.text = element_text(size = 6),
        axis.title = element_text(size = 8)) +
  labs(x = "Year",
       subtitle = "Publications and citations per year")

yearRecent <- as.integer(format(Sys.Date(),'%Y')) - 2

citSum <- profile$total_cites

citRecentSum <- ct %>%
  summarize(sumB = sum(cites[year >= yearRecent]))

count50cit <- nrow(ct[ct$cites > 50, ])

citRecentProp <- citRecentSum/citSum

#g-index
pubs <- get_publications(jd)
pubs$square <- as.numeric(row.names(pubs))^2
pubs$sums <- cumsum(pubs$cites)
gindex <- max(which(pubs$square < pubs$sums))

pubs$rank <- seq.int(nrow(pubs))

p2 <- ggplot(pubs, aes(x = rank, y = cites)) +
  geom_segment(aes(x = profile$h_index, y = 0, xend = profile$h_index, yend = profile$h_index+4),
               size = 0.1, color = "#008080") +
  geom_line(size = 1, colour = "grey") +
  geom_abline(intercept = 0, slope = 1, colour = "#008080", linetype = "dashed") +
  annotate("text", y = profile$h_index, x = profile$h_index,
           label= paste0("h-index"),
           hjust = -0.5, angle = 90,
           color = "#008080", size = 2.5) + 
  labs(x = "Rank", 
       y = "Citations",
       subtitle = "Citations per publication and h-index") + 
  xlim(c(0, nrow(publist)-2)) +
  theme_pubclean() +
  theme(axis.line.y.left = element_line(color = "black"), 
        axis.ticks.y.left = element_line(color = "black"),
        axis.text.y.left = element_text(color = "black"), 
        axis.title.y.left = element_text(color = "black"),
        #axis.line.x = element_line(color = "grey"), 
        #axis.ticks.x = element_line(color = "grey"),
        axis.text = element_text(size = 6),
        axis.title = element_text(size = 8),
        plot.subtitle = element_text(size = 9))

p.fin <- ggarrange(p2, p1,
                   widths = c(1,1.4))

#g-index plot... NOT EASY TO REPRESENT!
#ggplot(pubs, aes(x = as.numeric(row.names(pubs)), y = sqrt(sums))) +
#  geom_segment(aes(x = gindex, y = 0, xend = gindex, yend = gindex),
#               size = 0.1, color = "#008080") +
#  geom_line(size = 1, colour = "grey") +
#  geom_abline(intercept = 0, slope = 1, colour = "#008080", linetype = "dashed")
```

I have published (or have in press) `r nrow(publist)-2` journal articles. In most of these I have done all statistical analyses, and 12 are as first or last author. To date, my articles have been cited `r citSum` times, `r citRecentSum` (`r label_percent()(citRecentProp[1,1])`) since the beginning of `r yearRecent`, and `r numbers_to_words(count50cit)` have been cited over 50 times (see figure below). I have an h-index of `r profile$h_index` and a g-index of `r gindex`[^3].

[^3]: Citation data obtained using the [`scholar`](https://cran.r-project.org/web/packages/scholar/index.html) R package.

```{r echo=FALSE}
p <- annotate_figure(p.fin, bottom = text_grob(paste0("Source for citation data: Google Scholar. Updated ", 
                                       format(Sys.Date(),'%B %d, %Y')),
                hjust = 1, x = 1, size = 6))
p
```
