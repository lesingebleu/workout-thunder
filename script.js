const images = [
    "./images/FcnjRi5aUAAn0G9.jpg",
    "./images/FcnjTmqaMAAV8Gv.jpg",
    "./images/FcnjUj_aUAAsMMz.jpg"
];

const randomImage = document.getElementById("randomImage"); // Fix quotes (“ ” → " ")
const randomIndex = Math.floor(Math.random() * images.length);
randomImage.src = images[randomIndex];
