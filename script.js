const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];

const randomImage = document.getElementById("randomImage");

// Get the last index (or default to 0 if first visit)
let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;

// Update the image
randomImage.src = images[currentIndex];

// Increment index (loop back to 0 after last image)
currentIndex = (currentIndex + 1) % images.length;

// Save the next index for the next refresh
localStorage.setItem("imageIndex", currentIndex);
