const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];

const randomImage = document.getElementById("randomImage");

// Function to cycle images with fade
function cycleImage() {
    // 1. Fade out current image
    randomImage.classList.remove("fade-in");
    
    setTimeout(() => {
        // 2. Update image source
        let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;
        randomImage.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        localStorage.setItem("imageIndex", currentIndex);
        
        // 3. Fade in new image
        randomImage.classList.add("fade-in");
    }, 1000); // Wait for fade-out to finish (1s)
}

// Initialize first image
cycleImage();

// Optional: Re-fade on button click or keyboard press
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") cycleImage();
});
