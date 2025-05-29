// Custom typing animation for Advanmd page
// Types text of specific elements sequentially

document.addEventListener('DOMContentLoaded', async () => {
  const textSelector = 'h1, h2, h3, h4, h5, h6, p, .elementor-widget-container';
  const sections = Array.from(document.querySelectorAll('section'));

  const style = document.createElement('style');
  style.textContent = `
    .typing-section:not(.revealed) :not(.typing-target) { opacity: 0; }
    .typing-section.revealed :not(.typing-target) { opacity: 1; transition: opacity 0.6s ease; }
  `;
  document.head.appendChild(style);

  for (const section of sections) {
    const textEls = Array.from(section.querySelectorAll(textSelector));
    const targets = [];

    textEls.forEach(el => {
      const text = el.textContent.trim();
      if (!text) return;
      el.dataset.originalText = text;
      el.textContent = '';
      el.classList.add('typing-target');
      targets.push(el);
    });

    if (targets.length === 0) continue;
    section.classList.add('typing-section');

    for (const el of targets) {
      await typeText(el, el.dataset.originalText, 40);
    }

    section.classList.add('revealed');
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
