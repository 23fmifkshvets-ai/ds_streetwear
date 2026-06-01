document.addEventListener('DOMContentLoaded', () => {

    const latestProduct = document.querySelector('.products .product-card');

    if (!latestProduct) return;

    const img = latestProduct.querySelector('img')?.src;
    const name = latestProduct.querySelector('h3')?.textContent;
    const link = latestProduct.querySelector('a')?.href;

    const story = document.getElementById('story1');
    const btn = document.getElementById('story-btn');
    const shirt = document.querySelector('.story1-shirt');

    if (!story || !link || !shirt) return;

    if (img) {
        shirt.src = img;
    }

    const label = story.querySelector('.story-label');

    if (label && name) {
        label.textContent = `New: ${name}`;
    }

    btn.addEventListener('click', () => {
        window.location.href = link;
    });

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    const scale = random(1.5, 2);
    const rotate = random(-20, 20);

    story.style.setProperty('--scale', scale);
    story.style.setProperty('--rotate', `${rotate}deg`);

});

console.log("JS START");