const images = [
    "./imgs/FcnjRi5aUAAn0G9.jpg",  // Replace with your image filenames
    "./imgs/FcnjTmqaMAAV8Gv.jpg",
    "./imgs/FcnjUj_aUAAsMMz.jpg"
];

const randomImage = document.getElementById("randomImage");
const randomIndex = Math.floor(Math.random() * images.length);
randomImage.src = images[randomIndex];
