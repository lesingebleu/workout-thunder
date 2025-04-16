const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];

const randomImage = document.getElementById("randomImage");
let lastImage = localStorage.getItem("lastImage"); // Get last shown image

// Filter out the last image to avoid repeats
let availableImages = images.filter(img => img !== lastImage);

// Select a new random image from remaining options
const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];

// Update the image and store the new choice
randomImage.src = newImage;
localStorage.setItem("lastImage", newImage);
