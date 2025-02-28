function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}


const jsConfetti = new JSConfetti();

function rain(){
    if(document.getElementById("counter").innerText = 0){
        jsConfetti.addConfetti()
    }
}