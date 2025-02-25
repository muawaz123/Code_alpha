
let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

 
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateLightboxImage();
}

 
function closeLightbox() {
    lightbox.style.display = "none";
}

 
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateLightboxImage();
}

 
function updateLightboxImage() {
    lightboxImg.src = images[currentIndex].src;
}

 
lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
