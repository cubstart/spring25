let count = 0;
let image = document.getElementById("basketball");
let scorecount = document.getElementById("counter");
let winloss = document.getElementById("winorlose");

image.onclick = function () {
    if (count < 113) {
        let int = Math.floor(Math.random() * 4);
        if (int == 0) {
            count+=2;
            scorecount.innerHTML = count;
        }
        if (int == 1) {
            count+=3;
            scorecount.innerHTML = count;
        }
    } else {
        winloss.innerHTML = "You Did It, That's a Game Winner!";
    }
}


