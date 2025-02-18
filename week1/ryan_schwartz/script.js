const data = {
    noSayings: [
        "Wrong button", "Are you sure?", "meanie", "you're a butt(a cute one)", "*silent treatment*", "But I really like you :("
    ],
    noImages: [
        "https://media.tenor.com/_mIjQPNFrBAAAAAj/angry.gif",
        "https://media.tenor.com/uzTknCqPVBgAAAAi/tooji-bubududu.gif",
        "https://media.tenor.com/54a6qPNHh1EAAAAj/dudu-not-happy-dudu-shaking-head.gif",
        "https://media.tenor.com/1qhIUmMFw3gAAAAi/milk-and-mocha.gif",
        "https://media.tenor.com/P7LyTvDSvDIAAAAj/milk-and-mocha.gif",
        "https://media.tenor.com/Wgpqkii_nUcAAAAi/peach-goma.gif"
    ],
    yesData: [
        "https://media.tenor.com/Ddw70xVXPPcAAAAi/milk-and-mocha.gif",
        "WOOOOOOOOO!!",
        "I LOVE YOU SO MUCH POOKIEEE"
    ],
    hoverInYesText: [
        "yeah press itttt",
        "ik you want to",
        "pretty please with a cherry on top",
        "you're almost there",
        "this time for sure"
    ],
    hoverOutYesText: [
        "noooooooo",
        "why did you do that",
        "you're a meanie",
        "bruh, you had that.",
        "now you're just doing it on purpose"
    ]
};

let index = 0;
let hoverIndex = 0;
let success = false;

function moveButton() {
    const button = document.querySelector(".noButton");
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;
    
    // Calculate max X and Y positions to keep the button inside the viewport
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    
    // Generate random position within bounds
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.position = 'absolute'

    // Rotate through sayings and images
    const curSaying = document.querySelector(".subheader");
    curSaying.textContent = data.noSayings[index % data.noSayings.length];

    const img = document.querySelector("img");
    img.src = data.noImages[index % data.noImages.length];

    index++; // Move to the next item
}

function hoverInYes() {
    if (!success) {
        const text = document.querySelector(".subheader");
        text.textContent = data.hoverInYesText[hoverIndex % data.hoverInYesText.length];
    }
}

function hoverOutYes() {
    if (!success) {
        const text = document.querySelector(".subheader");
        text.textContent = data.hoverOutYesText[hoverIndex % data.hoverOutYesText.length];
        hoverIndex++;
    }
}

function luckiestManAlive() {
    // Hide buttons
    const buttonContainer = document.querySelector(".buttonContainer");
    buttonContainer.style.display = "none";

    success = true;

    const title = document.querySelector(".title");
    title.textContent = data.yesData[1];  // Update title text

    const subheader = document.querySelector(".subheader");
    subheader.textContent = data.yesData[2]; // Update subheader text

    const img = document.querySelector("img");
    img.src = data.yesData[0]; // Update image
}

function togetherSince() {
    const title = document.querySelector(".yearsTogether");

    const now = new Date();
    const started = new Date(2020, 5, 5); // July 12, 2020 (Month is 0-based)
    
    let years = now.getFullYear() - started.getFullYear();
    let months = now.getMonth() - started.getMonth();
    let days = now.getDate() - started.getDate();
    let hours = now.getHours() - started.getHours();
    let minutes = now.getMinutes() - started.getMinutes();
    let seconds = now.getSeconds() - started.getSeconds();

    // Adjust if negative
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Update text content
    title.textContent = `My resume for this position is pretty stacked. ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds and counting ❤️`;
}

// Update counter every second
setInterval(togetherSince, 1000);



