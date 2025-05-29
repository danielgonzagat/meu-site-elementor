# Meu Site Elementor

This repository demonstrates a lightweight capture of an Elementor landing page with a simple typing animation.

The original page was saved using the Save Page WE extension and then manually cleaned: most of the generated markup was removed and the extension specific tags were replaced by a single `<script>` tag pointing to `assets/pagina-advanmd.js`. A small `<style>` tag defines the `.type-hidden` class used by the script.

## Viewing the page

1. Clone or download this repository.
2. Open `pagina-completa-purah-elementor/advanmd-captura-completa.html` in your browser. Serving the folder with a local HTTP server also works.
3. Leave your internet connection enabled so the HTML file can load `assets/pagina-advanmd.js` from GitHub.

### Deploying to GitHub Pages

You can also publish the page via GitHub Pages:

1. Push this repository to your GitHub account.
2. Enable **Pages** in the repository settings, choosing the `main` branch.
3. Visit `https://<your-user>.github.io/meu-site-elementor/pagina-completa-purah-elementor/advanmd-captura-completa.html`.

## Typing animation

The file `assets/pagina-advanmd.js` waits for `DOMContentLoaded`, hides all `.elementor-section` elements and then reveals them while typing their headings and paragraphs character by character. Each letter appears with a 50&nbsp;ms delay and small pauses occur between elements, giving a smooth typing effect.

