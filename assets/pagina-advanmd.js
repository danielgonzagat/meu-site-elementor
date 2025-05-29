// Arquivo JS personalizado para animacao de digitacao

document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.elementor-section'));
  const data = sections.map(section => {
    const textNodes = Array.from(section.querySelectorAll('h1,h2,h3,h4,h5,h6,p'));
    const texts = textNodes.map(el => el.textContent);
    textNodes.forEach(el => (el.textContent = ''));
    section.classList.add('type-hidden');
    return { section, textNodes, texts };
  });

  const delay = ms => new Promise(res => setTimeout(res, ms));

  async function typeText(el, text, speed = 50) {
    for (const ch of text) {
      el.textContent += ch;
      await delay(speed);
    }
  }

  async function runTyping() {
    for (const { section, textNodes, texts } of data) {
      section.classList.remove('type-hidden');
      for (let i = 0; i < textNodes.length; i++) {
        await typeText(textNodes[i], texts[i]);
        await delay(300);
      }
      await delay(500);
    }
  }

  setTimeout(runTyping, 500);
});
