// Custom typing animation for Advanmd page
// Types text of specific elements sequentially

document.addEventListener('DOMContentLoaded', async () => {
  const selectors = 'h1, h2, h3, h4, h5, h6, p, .elementor-widget-container';
  const elements = Array.from(document.querySelectorAll(selectors));
  const items = [];

  elements.forEach(el => {
    const text = el.textContent.trim();
    if (!text) return;
    const section = el.closest('section') || el.parentElement;
    if (section) {
      section.classList.add('typing-section');
    }
    el.classList.add('typing-target');
    el.textContent = '';
    items.push({ el, text, section });
  });

  // CSS to hide non-textual content until typing finishes
  const style = document.createElement('style');
  style.textContent = `
    .typing-section:not(.revealed) :not(.typing-target) { opacity: 0; }
    .typing-section.revealed :not(.typing-target) { opacity: 1; transition: opacity 0.6s ease; }
  `;
  document.head.appendChild(style);

  for (const item of items) {
    await typeText(item.el, item.text, 40);
    if (item.section) {
      item.section.classList.add('revealed');
    }
  }
});

function typeText(el, text, speed) {
  return new Promise(resolve => {
    let index = 0;
    (function typeChar() {
      el.textContent += text.charAt(index);
      index += 1;
      if (index < text.length) {
        setTimeout(typeChar, speed);
      } else {
        resolve();
      }
    })();
  });
}
