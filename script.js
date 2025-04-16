const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];

// Preload images to avoid delay
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

const randomImage = document.getElementById("randomImage");

function cycleImage() {
    let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;
    randomImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    localStorage.setItem("imageIndex", currentIndex);
}

window.addEventListener("load", cycleImage);
