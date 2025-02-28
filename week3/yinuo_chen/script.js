function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}
function resetCount() {
    document.getElementById("counter").innerText = 0
}
function startTimer() {
    document.getElementById("counter").innerText = 0
    const timerSpan = document.getElementById("timer");
    let seconds = 3;
    timerSpan.innerText = seconds;
    const intervalId = setInterval(function() {
        seconds -= 1;
        timerSpan.innerText = seconds;
        if (seconds <= 0) {
            timerSpan.innerText = seconds
            clearInterval(intervalId);
            const finalScore = parseInt(document.getElementById("counter").innerText);
            alert("Final Score: " + finalScore);
        }
    }, 1000);
}