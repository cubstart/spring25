function addOneToCounter(){
    document.getElementById("counter").innerText=parseInt(document.getElementById("counter").innerText)+1
}
console.log()

function resetGame() {
    cookies=0;
    cookiesPerClick=1;
    localStorage.clear(); 
    document.getElementById("counter").innerText=cookies;
}