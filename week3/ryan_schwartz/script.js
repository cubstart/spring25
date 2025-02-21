let clicks = 0;
function addOneToCounter() {
    if (GameOver) {
        return;
    }
    clicks += 1;
    document.getElementById("counter").innerText = `${clicks} cookies`;
}

let time = 0;
let level = 1;
let GameOver = false;
function oneIteration() {
    time += 1;
    if ((time % 10) == 0) {
        console.log(time);
        if (parseInt(document.getElementById("counter").innerText) < 1) {
            document.getElementById("counter").innerText = "Game Over";
            GameOver = true;
        } else {
            level += 1;
            const img = document.getElementById("cookie");
            img.styles.width = `${img.width * 0.8}px`;
            img.styles.height = `${img.height * 0.8}px`;
        }
    }
    document.getElementById("speed").innerText = (clicks/time).toFixed(2);
}

setInterval(oneIteration, 1000);

function moveCookie() {
    if (GameOver) {
        return;
    }
    let cookie = document.getElementById("cookie");
    let x = Math.floor(Math.random() * (window.innerWidth - cookie.width)); 
    let y = Math.floor(Math.random() * (window.innerHeight - cookie.height));
    cookie.style.left = `${x}px`;
    cookie.style.top = `${y}px`;
    cookie.style.position = 'absolute';
}

setInterval(moveCookie, 1/level * 1000);