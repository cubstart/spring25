var sound_click = new Audio('mouse_click.mp3');
var sound_eat = new Audio('cookie_crunch.mp3');

function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
    sound_click.currentTime = 0
    sound_click.play();
}

function resetCounter(){
    document.getElementById("counter").innerText = 0
    sound_eat.play();
}

function challengeTimer(){
    const cookie_count = parseInt(document.getElementById("counter").innerText)
    alert(`Time's Up. You made ${cookie_count} cookies in 30 seconds` );
}