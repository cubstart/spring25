let counter = 0;
let autoClickerStart = false;
let autoClickersCost = 10;
let autoClickersOwned = 0;


function addOneToCounter(){
    counter += 1;   
    updateScore()
}
function updateScore(){
    document.getElementById("counter").innerText = counter
}
// check if enough cookies for autoclicker. if yes add clicker
function buyAutoClicker(){

    if (!autoClickerStart){
        autoClickerStart = true;
        setInterval(() => {
            counter += 1;
            updateScore();
        }, (1000));
    }
}