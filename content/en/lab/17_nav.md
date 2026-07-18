+++
widget = "blank"
headless = true
active = true
weight = 17
title = ""
subtitle = ""

[design]
  columns = "1"

[advanced]
 css_style = "padding-top: 0; padding-bottom: 0;"
 css_class = "lab-nav"
+++

<style>
html { scroll-behavior: smooth; }

section.lab-nav {
  position: sticky !important;
  top: 66px;
  z-index: 99;
  background: hsla(231, 15%, 14%, 0.88) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(234, 82, 83, 0.3);
}

section.lab-nav .home-section-bg { display: none !important; }

.lab-nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0;
  flex-wrap: wrap;
  margin: 0;
}

.lab-nav-btn {
  display: inline-block;
  padding: 0.3rem 1.3rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none !important;
  border: 2px solid #ea5253;
  color: #ea5253 !important;
  transition: background 0.18s ease, color 0.18s ease;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.lab-nav-btn:hover,
.lab-nav-btn:focus {
  background: #ea5253;
  color: #fff !important;
  outline: none;
  text-decoration: none !important;
}

#20_people_current,
#25_people_alumni {
  scroll-margin-top: 120px;
}
</style>

<nav class="lab-nav-links" aria-label="Lab navigation">
  <a href="#20_people_current" class="lab-nav-btn">Current team</a>
  <a href="#25_people_alumni" class="lab-nav-btn">Former members</a>
</nav>
