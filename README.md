# Meu Site Elementor

This repository contains a minimal example site with a typing animation.

## Opening the demo page

1. Clone or download this repository.
2. Open `pagina-completa-purah-elementor/advanmd-captura-completa.html` in your web browser. You can double-click the file or serve the folder with a local HTTP server.
3. Ensure you have an internet connection so the page can load `assets/pagina-advanmd.js` from GitHub.

## Typing animation overview

The `assets/pagina-advanmd.js` script runs after `DOMContentLoaded` and does the following:

1. Collects all `.elementor-section` elements and their heading and paragraph nodes.
2. Stores each node's text, clears the content and hides the section with a `type-hidden` class.
3. A `runTyping` routine reveals each section sequentially and types the stored text character by character with a 50&nbsp;ms delay.
4. Small pauses between each element and section create a smooth animated effect.
5. The animation starts 500&nbsp;ms after page load.

This setup allows Elementor sections to appear as if they're being typed in real time.
