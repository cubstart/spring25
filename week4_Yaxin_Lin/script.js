function addOneToCounter(){
    let counterElement = document.getElementById("counter");
    let currentCount = parseInt(counterElement.innerText);
    counterElement.innerText = currentCount + 1;

    let fallingCookie = document.createElement("img");
    fallingCookie.src = "https://www.gfifoods.com/media/catalog/product/cache/608c797bf41e8874bcf75172f32fd01b/1/_/1.520oz20cookie_20220613-094305_rqhft3tmv23k13bn.jpg";
    fallingCookie.style.width = "50px"; 
    fallingCookie.style.position = "absolute";

    let position_x = Math.random() * window.width
    let startY_y = 50; 
    
    fallingCookie.style.left = randomX + "px";
    fallingCookie.style.top = startY + "px";

    document.body.appendChild(fallingCookie);

}