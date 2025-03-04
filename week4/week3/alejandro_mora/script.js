
// Increment Counter by Clicking
function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

// Load in Cat Slowly into Game
function fadein() {
    document.getElementById("img").style.opacity = 1;

    var audio = document.getElementById("audio");
    audio.play();
}

function fadeout() {
    document.getElementById("img").style.opacity = 0;
}