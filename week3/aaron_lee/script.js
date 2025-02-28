function counter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
    var sound = new Audio("clack.wav")
    sound.play()
}

function growAndShrink () {
    var cookie = document.getElementById("cookie");
    cookie.classList.add("clicked");

    setTimeout(function() {
        cookie.classList.remove("clicked");
    }, 150);
}