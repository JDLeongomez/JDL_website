import { getDocument, GlobalWorkerOptions } from '../vendor/pdfjs/build/pdf.mjs';

// The viewer components use the core module's global export.
const { EventBus, PDFViewer, PDFLinkService } = await import('../vendor/pdfjs/web/pdf_viewer.mjs');
GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/build/pdf.worker.mjs', import.meta.url).href;

const params = new URLSearchParams(location.search);
const spanish = params.get('lang') === 'es';
const labels = spanish ? {
  controls: 'Controles del PDF', page: 'Página', previous: 'Página anterior', next: 'Página siguiente',
  zoom: 'Escala', zoomIn: 'Ampliar', zoomOut: 'Reducir', fitPage: 'Página completa', fitWidth: 'Ancho de página',
  loading: 'Cargando PDF…', error: 'No se pudo cargar el PDF. Puedes abrirlo con el enlace situado encima del visor.',
  document: 'Documento de hoja de vida',
} : {
  controls: 'PDF controls', page: 'Page', previous: 'Previous page', next: 'Next page',
  zoom: 'Zoom', zoomIn: 'Zoom in', zoomOut: 'Zoom out', fitPage: 'Fit page', fitWidth: 'Fit width',
  loading: 'Loading PDF…', error: 'The PDF could not be loaded. You can open it using the link above the viewer.',
  document: 'CV document',
};
document.documentElement.lang = spanish ? 'es' : 'en';
document.title = params.get('title') || labels.document;
document.querySelector('.toolbar').setAttribute('aria-label', labels.controls);
document.querySelectorAll('[data-text]').forEach(element => { element.textContent = labels[element.dataset.text]; });
document.querySelectorAll('[data-label]').forEach(element => {
  element.setAttribute('aria-label', labels[element.dataset.label]);
  element.title = labels[element.dataset.label];
});
const $ = id => document.getElementById(id);
const container = $('scroll-container');
container.setAttribute('aria-label', document.title);
const status = $('status');
status.textContent = labels.loading;

try {
  const file = new URL(params.get('file'), location.href);
  if (!['http:', 'https:'].includes(file.protocol)) throw new Error('Unsupported PDF URL');
  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2, externalLinkRel: 'noopener noreferrer' });
  const viewer = new PDFViewer({ container, viewer: $('pages'), eventBus, linkService });
  linkService.setViewer(viewer);

  eventBus.on('pagesinit', () => {
    viewer.currentScaleValue = 'page-fit';
    $('page').max = viewer.pagesCount;
    document.querySelectorAll('button, input, select').forEach(element => { element.disabled = false; });
    updatePage();
  });
  eventBus.on('pagerendered', () => {
    status.hidden = true;
    container.setAttribute('aria-busy', 'false');
  });
  eventBus.on('pagechanging', updatePage);
  eventBus.on('scalechanging', () => {
    const scale = viewer.currentScaleValue;
    const option = [...$('zoom').options].find(item => item.value === scale);
    $('custom-zoom').hidden = Boolean(option);
    $('custom-zoom').textContent = `${Math.round(viewer.currentScale * 100)}%`;
    $('zoom').value = option ? scale : 'custom';
  });
  function updatePage() {
    $('page').value = viewer.currentPageNumber;
    $('page-count').textContent = `/ ${viewer.pagesCount}`;
    $('previous').disabled = viewer.currentPageNumber <= 1;
    $('next').disabled = viewer.currentPageNumber >= viewer.pagesCount;
  }
  function goToPage(number) {
    if (Number.isInteger(number) && number >= 1 && number <= viewer.pagesCount) {
      viewer.scrollPageIntoView({ pageNumber: number });
    }
    updatePage();
  }
  $('previous').addEventListener('click', () => goToPage(viewer.currentPageNumber - 1));
  $('next').addEventListener('click', () => goToPage(viewer.currentPageNumber + 1));
  $('page').addEventListener('change', () => goToPage(Number($('page').value)));
  $('page').addEventListener('keydown', event => {
    if (event.key === 'Enter') goToPage(Number($('page').value));
  });
  $('zoom').addEventListener('change', () => {
    if ($('zoom').value !== 'custom') viewer.currentScaleValue = $('zoom').value;
  });
  function zoom(factor) { viewer.currentScale = Math.min(4, Math.max(0.2, viewer.currentScale * factor)); }
  $('zoom-in').addEventListener('click', () => zoom(1.25));
  $('zoom-out').addEventListener('click', () => zoom(0.8));
  new ResizeObserver(() => {
    if (viewer.pagesCount && ['page-fit', 'page-width'].includes(viewer.currentScaleValue)) {
      viewer.currentScaleValue = viewer.currentScaleValue;
    }
  }).observe(container);

  const asset = path => new URL(`../vendor/pdfjs/${path}`, import.meta.url).href;
  const pdf = await getDocument({
    url: file.href,
    cMapUrl: asset('cmaps/'), cMapPacked: true,
    standardFontDataUrl: asset('standard_fonts/'), wasmUrl: asset('wasm/'),
    iccUrl: asset('iccs/'),
    isEvalSupported: false,
  }).promise;
  viewer.setDocument(pdf);
  linkService.setDocument(pdf, file.href);
} catch (error) {
  console.error('CV viewer:', error);
  status.hidden = false;
  status.textContent = labels.error;
  container.setAttribute('aria-busy', 'false');
}
