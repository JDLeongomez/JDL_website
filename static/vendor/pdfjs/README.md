PDF.js 6.5.438, from the official `pdfjs-dist` npm package:
https://registry.npmjs.org/pdfjs-dist/-/pdfjs-dist-6.5.438.tgz

Upstream: https://github.com/mozilla/pdf.js
License: Apache-2.0 (see LICENSE).

Unmodified runtime modules, viewer components, styles, images, fonts, CMaps,
color profiles, and WebAssembly support files are bundled here. Source maps
and the upstream demo application are omitted. Keep the core, worker, and
viewer components on the same version when updating.

The custom CV viewer lives in static/pdf-viewer/. It loads the existing PDF
URLs on GitHub Pages, which allow cross-origin requests. No separate PDF copies
or preview images are needed when the CVs are updated.
