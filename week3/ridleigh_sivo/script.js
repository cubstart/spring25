function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

img = document.getElementById("img1");

function enlargeImg() {
    img.style.transform = "scale(1.1)";
    img.style.transform = "transform 0.25s ease";
    setTimeout(resetImg, 100);
}

function resetImg() {
    img.style.transform = "scale(1)";
    img.style.transform = "transform 0.25s ease";
}