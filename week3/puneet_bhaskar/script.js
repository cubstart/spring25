let lastClickTime = null;
let clickCount = 0;


let currentTime = new Date().getTime();

function buttonResponse(){
    clickCount ++;
    document.getElementById("counter").innerText = clickCount;
    currentTime = new Date().getTime();
    getSpeed(currentTime);
    lastClickTime = currentTime;
}

function getSpeed(currentTime) {
    if (lastClickTime !== null) {
        const timeDiff = currentTime - lastClickTime;
        const clickSpeed = 1000/ timeDiff 
        output.textContent = `Click Speed: ${clickSpeed.toFixed(2)} clicks per second`;
    }
}