function addOneToCounter(){
    document.getElementById("counter").innerText = 
    parseInt(document.getElementById("counter").innerText) + 1
 }

function showAddingNumbers(){
    var text = document.getElementById("textField");
    text.style.display = "block";
    setTimeout(hideText(), 50*1000);

function hideText() {
    text.style.display = "none";
    // document.getElementById("textField").style.display = "none";
}
}