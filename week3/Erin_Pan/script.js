function addOneToCounter(){
    let counterElement = document.getElementById("counter");
    let currentCount = parseInt(counterElement.innerText);

    currentCount += 1;
    counterElement.innerText = currentCount;
    
    if (currentCount >= 5) {
        counterElement.style.color = "red";
        imageElement.src = "https://www.lofthousecookies.com/wp-content/uploads/2023/07/cookie_pink.png";
    } else {
        counterElement.style.color = "black";
    } 
    //document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}