degree = 0
imgs =["https://pngimg.com/d/cookie_PNG13656.png",
"https://freepngimg.com/thumb/cookie/4-2-cookie-picture.png", 
"https://static.vecteezy.com/system/resources/previews/049/389/988/non_2x/a-single-chocolate-chip-cookie-with-a-transparent-background-a-delicious-treat-free-png.png"
]
function addOneToCounter(){
    numCookie = parseInt(document.getElementById("count").innerText);
    document.getElementById("count").innerText = 
    parseInt(document.getElementById("count").innerText) + 1
    const image = document.getElementsByClassName("cookie");
    
    const letter = document.getElementById("letter");
    letter.style.transform = 'rotateY(360deg)';
    degree = degree + 20;

    var elemm = document.createElement('img'); 
    elemm.classList.add("cookie");
    elemm.onclick = "addOneToCounter()";
    elemm.addEventListener('click', addOneToCounter);
    num = Math.floor(Math.random() * 3);
    elemm.src = imgs[num];
    document.body.appendChild(elemm);

    for(var i=0, len=image.length; i<len; i++)
        {
            size = Math.floor(Math.random() * 100) + 500/(numCookie** 1/2);

            image[i].style["max-height"] = size +'px';
            image[i].style["transform"] = 'rotate(' + degree + 'deg)';
        }
}