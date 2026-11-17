/* Keep the news carousel manual and expose its position to all readers. */
(() => {
  function initializeHighlights() {
    if (!window.jQuery || !window.jQuery.fn.carousel) return;

    document.querySelectorAll('[data-highlights-carousel]').forEach(region => {
      if (region.dataset.highlightsReady) return;

      const carousel = region.closest('.carousel');
      const slides = [...region.querySelectorAll('.carousel-item')];
      const counter = region.querySelector('.highlights-position');
      const separator = region.dataset.counterSeparator;
      const $carousel = window.jQuery(carousel);

      // The Hugo configuration also sets interval=false, before scripts load.
      carousel.setAttribute('data-interval', 'false');
      carousel.removeAttribute('data-ride');
      $carousel.data('interval', false).carousel({ interval: false }).carousel('pause');

      function updatePosition(index) {
        if (counter) counter.textContent = `${index + 1} ${separator} ${slides.length}`;
        slides.forEach((slide, slideIndex) => {
          const active = slideIndex === index;
          slide.setAttribute('aria-hidden', String(!active));
          slide.querySelectorAll('a').forEach(link => {
            if (active) link.removeAttribute('tabindex');
            else link.setAttribute('tabindex', '-1');
          });
        });
      }

      updatePosition(slides.findIndex(slide => slide.classList.contains('active')));
      $carousel.on('slid.bs.carousel', event => {
        updatePosition(slides.indexOf(event.relatedTarget));
      });
      region.dataset.highlightsReady = 'true';
    });
  }

  if (document.readyState === 'complete') initializeHighlights();
  else window.addEventListener('load', initializeHighlights, { once: true });
})();
