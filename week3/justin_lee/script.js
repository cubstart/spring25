counter = 0;
cookiesEaten = 0;
cookiesDropped = 0;

setInterval(() => {
    document.getElementById("counter").innerText = counter;
}, 10);

function increment() {
    counter++;
    if (counter >= 5) {
        document.getElementById("dropButton").style.display = "block";
    }
    if (counter >= 10) {
        document.getElementById("eatButton").style.display = "block";
    }
    if (counter >= 100) {
        document.getElementById("cookieMerchant").style.display = "block";
    }
}

function dropCookies() {
    if (counter < 5) {
        alert("Not enough cookies.");
        return;
    }
    document.getElementById("cookiesDropped").style.display = "block";
    counter = counter - 5;
    cookiesDropped = cookiesDropped + 5;
    droppedText = "You dropped "+cookiesDropped+" cookies. ";
    if (cookiesDropped >= 100 && cookiesDropped < 200) {
        droppedText = droppedText + "Why :(";
    }
    if (cookiesDropped >= 200) {
        droppedText = droppedText + "Maybe you should stop.";
    }

    document.getElementById("cookiesDropped").innerText = droppedText;
}

function eatCookies() {
    if (counter < 10) {
        alert("Not enough cookies.");
        return;
    }
    document.getElementById("cookiesEaten").style.display = "block";
    counter = counter - 10;
    cookiesEaten = cookiesEaten + 10;
    eatenText = "You ate "+cookiesEaten+" cookies. ";
    if (cookiesEaten >= 100 && cookiesEaten < 200) {
        eatenText = eatenText + "That's a lot!";
    }
    if (cookiesEaten >= 200) {
        eatenText = eatenText + "Maybe you should stop.";
    }

    document.getElementById("cookiesEaten").innerText = eatenText;
}

function buyItem() {
    if (counter < 10) {
        dialog = "You don't have enough cookies!";
        document.getElementById("merchantDialog").innerText = dialog;
        return;
    }
    dialog = "Pleasure doing business.";
    counter = counter - 100;
    document.getElementById("merchantDialog").innerText = dialog;
}