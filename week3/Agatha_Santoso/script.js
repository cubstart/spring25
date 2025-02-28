function addOneToCounter() {
  document.getElementById("counter").innerText =
    parseInt(document.getElementById("counter").innerText) + 1;
}

function minusOneToCounter() {
  document.getElementById("counter").innerText =
    parseInt(document.getElementById("counter").innerText) - 1;
}

function playAudio(url) {
  new Audio(url).play();
}
