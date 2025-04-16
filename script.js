const images = [
    “./images/img1.jpg”,
    “./images/img2.jpg”,
    “./images/img3.jpg”
];

const randomImage = document.getElementById("randomImage"); // Fix quotes (“ ” → " ")
const randomIndex = Math.floor(Math.random() * images.length);
randomImage.src = images[randomIndex];
