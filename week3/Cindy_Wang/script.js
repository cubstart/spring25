function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText)+1
}
const filters = {
    "grayscale": "grayscale(100%)",
    "sepia": "sepia(100%)",
    "invert": "invert(100%)",
    "hueRotate": "hue-rotate(90deg)",
    "brightness": "brightness(150%)",
    "contrast": "contrast(200%)"
};

function changeImageColor() {
    let img = document.getElementById("cookieImage");
    let filterKeys = Object.keys(filters);
    let randomFilter = filters[filterKeys[Math.floor(Math.random() * filterKeys.length)]];
    
    img.style.filter = randomFilter;
}