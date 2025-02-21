function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1;
}

function timer() {
    setInterval(addOneToCounter, 1000);
}