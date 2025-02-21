function addOne(){
    document.getElementById("count").innerText = parseInt(document.getElementById("count").innerText) + 1
    let newImg = document.createElement("img");
    newImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
    newImg.onclick= addOne;
    newImg.style.width="200px";
    newImg.style.margin = "5px";
    document.body.appendChild(newImg);
}
function resetCookies(){
    document.getElementById("count").innerText= "0";
    let images= document.querySelectorAll("img")
    images.forEach((img, index) => {
        if (index !== 1) img.remove();
    });
}
console.log("DEBUG")
document.getElementById("reset").addEventListener("click",resetCookies);
