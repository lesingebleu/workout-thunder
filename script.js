const images = [
    "FcnjRi5aUAAn0G9.jpg",  // Replace with your image filenames
    "FcnjTmqaMAAV8Gv.jpg",
    "FcnjUj_aUAAsMMz.jpg"
];

const randomImage = document.getElementById("randomImage");
const randomIndex = Math.floor(Math.random() * images.length);
randomImage.src = images[randomIndex];