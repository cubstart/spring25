var clicks = 0;
var isFirstClick = true; 
var firstClick;

function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1;
    clicks++;
    calculateSpeed();
    if (isFirstClick) {
        isFirstClick = false;
        // let speed = 1000 * (clicks / (new Date().getTime() - firstClick));
        // document.getElementById("speed").innerText = 1;
    }
    move();
}

function calculateSpeed() {
    if (isFirstClick) {
        firstClick = new Date().getTime();
        document.getElementById("speed").innerText = 1;
        return;
    }
    // console.log("clicks: " + clicks);
    // console.log("total time elapsed in seconds(?): " + (new Date().getTime() - firstClick));
    let speed = 1000 * (clicks / (new Date().getTime() - firstClick));
    document.getElementById("speed").innerText = speed;
}

var match = Math.floor(Math.random() * 1); // integer from 0 to 9
function move() {
    var move = Math.floor(Math.random() * 1);
    if (true) {
        let x = Math.random() * 100;
        let y = Math.random() * 100;
        document.getElementById("cookie").style.transform = `translate(${x}px, ${y}px)`;
    }
}