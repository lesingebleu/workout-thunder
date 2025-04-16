const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];

const randomImage = document.getElementById("randomImage");

// Load the next image with fade
function loadNextImage() {
    // Fade out current image
    randomImage.classList.remove("fade-in");

    // After fade-out completes, change image and fade in
    setTimeout(() => {
        // Get next image index (cycle 0 → 1 → 2 → 0...)
        let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;
        randomImage.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        localStorage.setItem("imageIndex", currentIndex);

        // Fade in new image
        randomImage.classList.add("fade-in");
    }, 1000); // Matches the CSS transition time (1s)
}

// Initialize first image on page load
window.addEventListener("load", loadNextImage);

// Optional: Press spacebar to manually cycle
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") loadNextImage();
});
