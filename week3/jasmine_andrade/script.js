function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1 
}

function moveImage() {
    var image = document.getElementById("cookie");
    var movement = 25;
    image.style = "transform: translate(60px ,120px);";

   
  }