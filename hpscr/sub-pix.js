function fixStories() {
  const vh = window.innerHeight;

  document.querySelectorAll('.story').forEach(el => {
    el.style.height = vh + 'px';
  });
}

fixStories();
window.addEventListener('resize', fixStories);
