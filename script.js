const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];

const randomImage = document.getElementById("randomImage");

let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;
randomImage.src = images[currentIndex];
currentIndex = (currentIndex + 1) % images.length;
localStorage.setItem("imageIndex", currentIndex);
