function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

let startTime;
let clickCount = 0;
let speed = 0;

const image = document.getElementById("image");
const speedDisplay = document.getElementById("speedDisplay");

image.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 1) {
        startTime = new Date().getTime();
    } else {
        const timeElapsed = (new Date().getTime() - startTime) /1000;
        speed = clickCount /timeElapsed;
        if (speed < 0.8) {
            resetTest();
        }
        updateSpeed();
    }
});

function updateSpeed() {
    speedDisplay.textContent = speed.toFixed(2);
}

function resetTest() {
    clickCount = 0;
    startTime = undefined;
    speed = 0;
}

setInterval(updateSpeed, 1);