/* const video = document.getElementById("heroVideo");

if (window.innerWidth >= 768) {
  video.src = "../../ds-vid-7-1.mp4";
} else {
  video.src = "../../ds-vid-7-m.mp4";
} 

const video = document.getElementById("heroVideo");

if (window.innerWidth >= 768) {
  video.src = "../../ds-vid-7-1.mp4";
  console.log("mobile");
} else {
  video.src = "../../ds-vid-7-m.mp4";
  console.log("desktop");
}

console.log(video.src);
video.load();
*/




const promo = document.querySelector('.promo-overlay');
const closeBtn = document.querySelector('.promo-close');

closeBtn.addEventListener('click', () => {
  promo.style.display = 'none';
});
