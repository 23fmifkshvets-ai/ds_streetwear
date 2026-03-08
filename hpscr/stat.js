let isZoomed = false;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;

const image = document.querySelector(".image-wrapper img");
const imageWrapper = document.querySelector(".image-wrapper");

// Оновлений код для вибору розміру
document.querySelectorAll('.size-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Видаляємо клас активної кнопки у всіх кнопок
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    
    // Додаємо клас активної кнопки тільки для вибраної
    this.classList.add('active');
  });
});

// Код для зміни розміру зображення
function zoomImage() {
  if (isZoomed) {
    image.style.transform = "scale(1)"; // Зменшуємо зображення назад
    image.style.left = "0"; // Встановлюємо початкову позицію
    image.style.top = "0";
    isZoomed = false;
  } else {
    image.style.transform = "scale(2)"; // Збільшуємо зображення
    isZoomed = true;
  }
}

// Функція для початку перетягування
image.addEventListener("mousedown", (e) => {
  if (!isZoomed) return;
  isDragging = true;
  startX = e.clientX - image.getBoundingClientRect().left;
  startY = e.clientY - image.getBoundingClientRect().top;
  image.style.cursor = "grabbing"; // Змінюємо курсор на "grabbing"
});

// Функція для перетягування
image.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let offsetX = e.clientX - startX;
  let offsetY = e.clientY - startY;

  // Обмежуємо зсув, щоб зображення не виходило за межі контейнера
  const maxX = imageWrapper.clientWidth - image.offsetWidth * 2; // Обмеження по осі X
  const maxY = imageWrapper.clientHeight - image.offsetHeight * 2; // Обмеження по осі Y

  offsetX = Math.min(0, Math.max(offsetX, maxX));
  offsetY = Math.min(0, Math.max(offsetY, maxY));

  image.style.transform = `scale(2) translate(${offsetX}px, ${offsetY}px)`; // Переміщаємо зображення
});

// Функція для зупинки перетягування
image.addEventListener("mouseup", () => {
  isDragging = false;
  image.style.cursor = "grab"; // Відновлюємо курсор
});

// Для зупинки перетягування при виході миші з зображення
image.addEventListener("mouseleave", () => {
  isDragging = false;
  image.style.cursor = "grab"; // Відновлюємо курсор
});

// Новий скрипт для хедера (при скролі в ландскейп)
let lastScrollTop = 0;
const header = document.querySelector(".header-wrapper");

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Для ландскейп-режиму
  if (window.matchMedia("(orientation: landscape)").matches) {
    if (currentScroll < lastScrollTop) {
      header.style.display = "block"; // Показуємо хедер при скролі вгору
    } else {
      header.style.display = "none"; // Сховуємо хедер при скролі вниз
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для запобігання негативним значенням
});
