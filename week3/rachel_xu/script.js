let biteCounter = 0; 
let cookieCounter = 0; 
let isCookieEaten = false; 

const cookieImages = [
    "cookies/1.png", // Full cookie
    "cookies/2.png",  // First bite
    "cookies/3.png",  // Second bite
    "cookies/4.png",  // Third bite
    "cookies/5.png",  // Almost gone
    "cookies/6.png"   // Only crumbs left
];

function addOneToCounter() {
    if (isCookieEaten) return; 

    let currentBites = biteCounter % (cookieImages.length - 1); 

    if (currentBites === cookieImages.length - 1) {
        document.getElementById("restart-btn").style.display = "block"; // Show restart button when fully eaten
        isCookieEaten = true; 
        return;
    }

    biteCounter++;

    document.getElementById("counter").innerText = biteCounter; 
    document.getElementById("cookie-img").src = cookieImages[currentBites + 1]; 

    if (currentBites + 1 === cookieImages.length - 1) {
        document.getElementById("restart-btn").style.display = "block"; // Show restart button when fully eaten
        isCookieEaten = true; 
    }
}

function restartGame() {
    cookieCounter++; 
    document.getElementById("cookie-count").innerText = `Cookies eaten: ${cookieCounter}`; 

    document.getElementById("cookie-img").src = cookieImages[0]; // Reset to full cookie
    document.getElementById("restart-btn").style.display = "none"; // Hide restart button

    isCookieEaten = false; // Re-enable clicks
}
