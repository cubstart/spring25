let count = 0;
let size = 200;
let maxClicks = 30;

function addOneToCounter() {
    let counter = document.getElementById("counter");
    let cookie = document.getElementById("cookie");

    count++;
    counter.innerText = count;

    if (count <= maxClicks) {
        size += 20;
        cookie.style.width = size + "px";
    }

    cookie.classList.add("pop");

    setTimeout(() => {
        cookie.classList.remove("pop");
    }, 100);

    if (count >= maxClicks) {
        cookie.classList.add("explode");

        setTimeout(() => {
            cookie.style.display = "none"; 
            alert("YOU GET FIVE BIG BOOMS! BOOM BOOM BOOM BOOM BOOM!");
        }, 500);
    }
}