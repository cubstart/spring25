// Counter function
function addOneToCounter() {
    console.log("Counter incremented");
    document.getElementById("counter").innerText =
        parseInt(document.getElementById("counter").innerText) + 1;
}

// Filters for image color
const filters = {
    "grayscale": "grayscale(100%)",
    "sepia": "sepia(100%)",
    "invert": "invert(100%)",
    "hueRotate": "hue-rotate(90deg)",
    "brightness": "brightness(150%)",
    "contrast": "contrast(200%)"
};

// Change image color
function changeImageColor() {
    console.log("Color changed");
    let img = document.getElementById("cookieImage");
    let filterKeys = Object.keys(filters);
    let randomFilter = filters[filterKeys[Math.floor(Math.random() * filterKeys.length)]];
    img.style.filter = randomFilter;
}

// Move cookie to a random position
function moveCookie() {
    console.log("Cookie moved");
    let img = document.getElementById("cookieImage");

    let maxWidth = window.innerWidth - img.clientWidth;
    let maxHeight = window.innerHeight - img.clientHeight;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    img.style.left = randomX + "px";
    img.style.top = randomY + "px";
}

// Add circle at click position
function addCircle(event) {
    console.log("Circle added");
    let container = document.getElementById("cookieContainer");
    let img = document.getElementById("cookieImage");

    let rect = img.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    container.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1000);
}