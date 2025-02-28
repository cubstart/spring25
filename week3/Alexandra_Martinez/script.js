function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
    
}
function makePictureBigger() {
    document.getElementById("picture").style.height = "300px";
    document.getElementById("picture").height = "50px"
    myIMG.height = mouseX;
    myIMG.width = mouseY;
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 5
}