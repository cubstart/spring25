function addOneToCounter() {
    const counterElement = document.getElementById("counter");
    let count = parseInt(counterElement.innerText) + 1;
    counterElement.innerText = count;

    const imageElement = document.getElementById("cookieImage");

    if (count % 10 === 0) {
        imageElement.classList.add("rgb-effect");
    } else {
        imageElement.classList.remove("rgb-effect");
    }
}