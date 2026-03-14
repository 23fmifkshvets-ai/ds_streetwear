const images = [
    "/img",
    "/img/t-shirt/DC Goth Vein Tee back.png",
    "/img/t-shirt/DC Goth Vein Tee detail.png"
];

let currentImage = 0;

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    document.getElementById("product-image").src = images[currentImage];
}

function prevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    document.getElementById("product-image").src = images[currentImage];
}
