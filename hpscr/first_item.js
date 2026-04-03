// DS Streetwear - Auto Latest Product to Story

// Цей скрипт автоматично бере найновіший товар (перший у списку)
// і підставляє його в перший сторіс-блок

document.addEventListener('DOMContentLoaded', () => {
    // 1. Беремо найновіший товар (перший у списку)
    const latestProduct = document.querySelector('.products .product-card');

    if (!latestProduct) return;

    // 2. Витягуємо дані з карточки
    const img = latestProduct.querySelector('img')?.src;
    const name = latestProduct.querySelector('h3')?.textContent;
    const link = latestProduct.querySelector('a')?.href;

    // 3. Беремо сторіс
    const story = document.getElementById('story1');
    const btn = document.getElementById('story-btn');

    if (!story || !link) return;

    // 4. Ставимо картинку як фон сторіс
    if (img) {
        story.style.backgroundImage = `url(${img})`;
        story.style.backgroundSize = 'cover';
        story.style.backgroundPosition = 'center';
    }

    // 5. Міняємо текст на назву товару
    const label = story.querySelector('.story-label');
    if (label && name) {
        label.textContent = `New: ${name}`;
    }

    const hrf = latestProduct.querySelector('a')?.href;

    const btn_clk = document.getElementById('story-btn');

    if (!btn_clk || !hrf) return;

    btn.addEventListener('click', () => {
        window.location.href = hrf;
    });

    // рандом число
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // налаштування
    const scale = random(1.2, 1.6);      // збільшення
    const rotate = random(-15, 15);      // нахил
    const posX = random(30, 70);         // позиція по X
    const posY = random(20, 60);         // позиція по Y

    // вставляємо фон у ::before
    story.style.setProperty('--bg-url', `url(${img})`);

    const before = window.getComputedStyle(story, '::before');

    // ХАК: задаємо стиль через styleSheet
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
  #story1::before {
    background-image: url(${img});
    transform: scale(${scale}) rotate(${rotate}deg);
    background-position: ${posX}% ${posY}%;
    
  }
`, styleSheet.cssRules.length);

});

/*const latestProduct = document.querySelector('.products .product-card');

// витягуємо дані
const img = latestProduct.querySelector('img').src;
const name = latestProduct.querySelector('h3').textContent;
const link = latestProduct.querySelector('a').href;

// беремо сторіс
const story = document.getElementById('story1');

// 1. робимо фон (красиво виглядає)
story.style.backgroundImage = `url(${img})`;
story.style.backgroundSize = 'cover';
story.style.backgroundPosition = 'center';

// 2. робимо клікабельною всю сторіс
story.style.cursor = 'pointer';
story.addEventListener('click', () => {
    window.open(link, '_blank');
});

// 3. міняємо текст (якщо хочеш)
const label = story.querySelector('.story-label');
if (label) {
    label.textContent = `New: ${name}`;
}*/