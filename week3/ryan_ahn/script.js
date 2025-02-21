function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1;

    const cookieDimension = Math.floor(Math.random() * 501 + 100);
    console.log(cookieDimension);
    
    const maxX = window.innerWidth - cookieDimension;
    const maxY = window.innerHeight - cookieDimension;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    const cookieImg = document.createElement('img');
    cookieImg.src = "https://images.cdn.us-central1.gcp.commercetools.com/4e5a974e-1287-4368-811f-41d06eb6c548/Chocolate%20Chip%20Silo%20-t71xMOs7.png";

    cookieImg.style.width = `${cookieDimension}px`;
    cookieImg.style.height = `${cookieDimension}px`;
    cookieImg.style.left = `${x}px`;
    cookieImg.style.top = `${y}px`;
    cookieImg.style.position = 'absolute';
    cookieImg.classList.add("generated-cookie");
    cookieImg.onclick = addOneToCounter;

    document.body.appendChild(cookieImg);
}

function resetButton() {
    document.querySelectorAll(".generated-cookie").forEach(cookie => cookie.remove());
    document.getElementById("counter").innerText = "0";
}