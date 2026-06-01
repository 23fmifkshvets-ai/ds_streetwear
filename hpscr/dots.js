/* if (window.innerWidth >= 768) {

  document.querySelectorAll('.product-gallery').forEach(gallery => {

    let isScrolling = false;

    gallery.addEventListener('wheel', (e) => {

      e.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      const step = gallery.offsetWidth;

      gallery.scrollBy({
        left: e.deltaY > 0 ? step : -step,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrolling = false;
      }, 400);

    }, { passive: false });

  });

}




document.querySelectorAll('.gallery-card').forEach(product => {

  const gallery = product.querySelector('.product-gallery');
  const dots = product.querySelectorAll('.dot');



  // ACTIVE DOT
  gallery.addEventListener('scroll', () => {

    const index = Math.round(
      gallery.scrollLeft / gallery.offsetWidth
    );

    dots.forEach(dot =>
      dot.classList.remove('active')
    );

    if (dots[index]) {
      dots[index].classList.add('active');
    }

  });



  // CLICK DOTS
  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      gallery.scrollTo({
        left: gallery.offsetWidth * index,
        behavior: 'smooth'
      });

    });

  });

});
*/



document.querySelectorAll('.product-card').forEach(product => {

  const gallery = product.querySelector('.product-gallery');
  const dots = product.querySelectorAll('.dot');

  if (!gallery) return;

  // -------------------------
  // ОНОВЛЕННЯ АКТИВНОГО ДОТА
  // -------------------------
  function updateDots() {

    const index = Math.round(
      gallery.scrollLeft / gallery.offsetWidth
    );

    dots.forEach(dot =>
      dot.classList.remove('active')
    );

    if (dots[index]) {
      dots[index].classList.add('active');
    }

  }

  // -------------------------
  // СКРОЛ ГАЛЕРЕЇ → ДОТИ
  // -------------------------
  gallery.addEventListener('scroll', updateDots);
  let snapTimer;

gallery.addEventListener('scroll', () => {
  
   if (gallery.children.length < 2) return;

  clearTimeout(snapTimer);

  snapTimer = setTimeout(() => {

    const index = Math.round(
      gallery.scrollLeft / gallery.offsetWidth
    );

    gallery.scrollTo({
      left: index * gallery.offsetWidth,
      behavior: 'smooth'
    });

  }, 200);

});
  // -------------------------
  // КЛІК ПО ДОТАХ
  // -------------------------
  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      gallery.scrollTo({
        left: gallery.offsetWidth * index,
        behavior: 'smooth'
      });

    });

  });

  // -------------------------
  // КОЛЕСО МИШІ (DESKTOP)
  // -------------------------
 if (window.innerWidth >= 768) {

    let isScrolling = false;

    gallery.addEventListener('wheel', (e) => {

      // Якщо в галереї лише одна фотка — нічого не робимо
      if (gallery.children.length < 2) return;

      e.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      gallery.scrollBy({
        left: e.deltaY > 0
          ? gallery.offsetWidth
          : -gallery.offsetWidth,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrolling = false;
      }, 400);

    }, { passive: false });

  }

  // Початковий стан дотів
  updateDots();

}); 