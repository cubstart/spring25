function addOneToCounter(){
    document.getElementById("Counter").innerText = parseInt(document.getElementById("Counter").innerText) + 1

    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    document.querySelector("img").style.border = `5px solid ${randomColor}`;
}