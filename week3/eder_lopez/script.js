function addOneToCounter(){
    document.getElementById("counter").innerText= 
    parseInt(document.getElementById("counter").innerText) + 1
}

function messages() {
    if (document.getElementById('counter').innerText > 5) {
            alert('holy cow that is a lot of cookies')
    }
    
}