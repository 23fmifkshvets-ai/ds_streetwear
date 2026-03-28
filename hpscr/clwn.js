document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".logo-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
        });
    });
});



const images = [
    "../../img/clwn/white_cl_bk.jpg",
    "../../img/clwn/black_cl_f.jpg",
    "../../img/clwn/black_cl_b.jpg",
    "../../img/clwn/black_cl_f2.jpg"
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




// COLOR
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
// SIZE
document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

