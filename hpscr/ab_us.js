

setTimeout(() => {

    document.querySelector(".intro").style.display = "none"

}, 2500)


const paragraphs = document.querySelectorAll(".about-text p");

paragraphs.forEach((p, i) => {
    setTimeout(() => {
        p.classList.add("show");
    }, 2200 + i * 350);
});