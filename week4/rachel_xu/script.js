let biteCounter = 0; 
let cookieCounter = 0; 
let isCookieEaten = false; 
let storeUnlocked = false;
// auto-clicking system
let autoClickSpeed = { "mouse?": 3000, "real-mouse": 8000 }; // Default speeds (ms per action)
let autoClickIntervals = { "mouse?": null, "real-mouse": null };

const cookieImages = [
    "cookies/1.png", 
    "cookies/2.png",  
    "cookies/3.png",  
    "cookies/4.png",  
    "cookies/5.png",  
    "cookies/6.png"   
];

const storeItems = [
    { name: "Oiiai", price: 15, icon: "items/oia-uia.gif", meme: "items/oia-uia.gif" },
    { name: "Volcano", price: 25, icon: "items/volcano.png" },
    { name: "Mouse?", price: 40, icon: "items/cursor.jpeg" },
    { name: "Real Mouse", price: 60, icon: "items/mouse.jpg" },
    { name: "Store", price: 100, icon: "items/store.png" }
];

const totalVolcanoImages = 8;

function addOneToCounter() {
    if (!storeUnlocked && isCookieEaten) return; // Prevent clicking before restart if store not unlocked

    let currentBites = biteCounter % (cookieImages.length - 1); 
    biteCounter++;

    document.getElementById("counter").innerText = biteCounter; 
    document.getElementById("cookie-img").src = cookieImages[currentBites + 1];

    if (currentBites + 1 === cookieImages.length - 1) {
        isCookieEaten = true;

        if (cookieCounter >= 2) { // Unlock store after eating 3 cookies since cookie counter is tracked below
            storeUnlocked = true;
            document.getElementById("restart-btn").style.display = "none"; 
            showWelcomeMessage();
        } else {
            document.getElementById("restart-btn").style.display = "block"; // Show restart button only if store is NOT unlocked
        }

        cookieCounter++; 
        document.getElementById("cookie-count").innerText = `Cookies eaten: ${cookieCounter}`;
    }

    updateStoreUI(); 
}

function restartGame() {
    document.getElementById("cookie-img").src = cookieImages[0]; // Reset to full cookie
    document.getElementById("restart-btn").style.display = "none"; 
    isCookieEaten = false;
}

function showWelcomeMessage() {
    let messageBox = document.getElementById("store-message");
    messageBox.innerText = "🎉 Welcome! You've unlocked the Cookie Monster Store! 🍪";
    messageBox.classList.add("blinking");

    setTimeout(() => {
        messageBox.classList.remove("blinking"); 
        messageBox.classList.add("fade-out-yellow"); 

        setTimeout(() => {
            messageBox.style.opacity = "0"; 
            messageBox.style.visibility = "hidden"; 
            let store = document.getElementById("store-container");
            store.style.display = "flex"; 
            store.classList.add("fade-in"); 
        }, 1000);
    }, 4000); 
}

function updateStoreUI() {
    storeItems.forEach((item, index) => {
        let itemElement = document.getElementById(`store-item-${index}`);
        if (biteCounter >= item.price) {
            itemElement.classList.add("unlocked");
            itemElement.onclick = () => purchaseItem(index);
        } else {
            itemElement.classList.remove("unlocked");
            itemElement.onclick = null;
        }
    });
}

function purchaseItem(index) {
    if (biteCounter >= storeItems[index].price) {
        biteCounter -= storeItems[index].price;
        document.getElementById("counter").innerText = biteCounter;
        updateStoreUI();

        if (index === 0) {
            createFloatingMeme();
        } else if (index === 1) {
            createRandomVolcano();
        } else if (index === 2) {
            levelUpAutoClicker("mouse?");
        } else if (index === 3) {
            levelUpAutoClicker("real-mouse");
        }
    }
}

function levelUpAutoClicker(type) {
    if (autoClickSpeed[type] > 500) { // Increase speed by reducing interval time
        autoClickSpeed[type] *= 0.85;
    }

    if (autoClickIntervals[type]) {
        clearInterval(autoClickIntervals[type]); // Clear old interval
    }

    if (type === "mouse?") {
        autoClickIntervals[type] = setInterval(animateMouseClick, autoClickSpeed[type]);
    } else if (type === "real-mouse") {
        if (!document.querySelector(".real-mouse")) {
            createWalkingMouse();
        }
        autoClickIntervals[type] = setInterval(() => {
            completeMouseLoop();
        }, autoClickSpeed[type]);
    }
}

// +1 +5 tips
function showFloatingText(text, color, targetElementId) {
    let targetElement = document.getElementById(targetElementId);
    let floatingText = document.createElement("div");
    floatingText.innerText = text;
    floatingText.className = "floating-text";
    floatingText.style.color = color;

    let rect = targetElement.getBoundingClientRect();
    floatingText.style.left = `${rect.right + 10}px`;
    floatingText.style.top = `${rect.top}px`;

    document.body.appendChild(floatingText);

    setTimeout(() => {
        floatingText.style.opacity = "0";
        floatingText.style.transform = "translateY(-20px)";
    }, 50);
    setTimeout(() => floatingText.remove(), 800);
}

// for item 1 🐈
function createFloatingMeme() {
    let meme = document.createElement("img");
    meme.src = storeItems[0].meme;
    meme.className = "meme-animation";
    document.body.appendChild(meme);

    let xPos = Math.random() * window.innerWidth * 0.8; 
    let yPos = Math.random() * window.innerHeight * 0.8; 
    let xSpeed = (Math.random() * 3 + 2) * (Math.random() < 0.5 ? 1 : -1);
    let ySpeed = (Math.random() * 3 + 2) * (Math.random() < 0.5 ? 1 : -1);

    meme.style.left = xPos + "px";
    meme.style.top = yPos + "px";

    function moveMeme() {
        let screenWidth = window.innerWidth - 100; 
        let screenHeight = window.innerHeight - 100; 

        xPos += xSpeed;
        yPos += ySpeed;

        if (xPos <= 0 || xPos >= screenWidth) xSpeed *= -1; 
        if (yPos <= 0 || yPos >= screenHeight) ySpeed *= -1; 

        meme.style.left = xPos + "px";
        meme.style.top = yPos + "px";

        requestAnimationFrame(moveMeme);
    }
    moveMeme();
}

// for item 2 🌋
function createRandomVolcano() {
    let randomIndex = Math.floor(Math.random() * totalVolcanoImages) + 1;
    let volcanoImagePath = `volcanos/volcano${randomIndex}.jpg`;

    let volcano = document.createElement("img");
    volcano.src = volcanoImagePath;
    volcano.className = "volcano-image";
    document.body.appendChild(volcano);

    let xPos, yPos;
    
    // restricted areas 
    let storeArea = document.getElementById("store-container").getBoundingClientRect();
    let cookieArea = document.getElementById("cookie-img").getBoundingClientRect();

    do {
        xPos = Math.random() * (window.innerWidth - 150); 
        yPos = Math.random() * (window.innerHeight - 150);
    } while (
        // Avoid the store area
        (xPos > storeArea.left - 50 && xPos < storeArea.right + 50 &&
         yPos > storeArea.top - 50 && yPos < storeArea.bottom + 50) ||

        // Avoid the cookie image area
        (xPos > cookieArea.left - 50 && xPos < cookieArea.right + 50 &&
         yPos > cookieArea.top - 50 && yPos < cookieArea.bottom + 50)
    );

    volcano.style.left = xPos + "px";
    volcano.style.top = yPos + "px";
}

// for item 3 🖱
function animateMouseClick() {
    let cursor = document.createElement("img");
    cursor.src = "items/cursor.png";
    cursor.className = "cursor-click";
    document.body.appendChild(cursor);

    let cookieArea = document.getElementById("cookie-img").getBoundingClientRect();
    cursor.style.left = `${cookieArea.left + Math.random() * cookieArea.width}px`;
    cursor.style.top = `${cookieArea.top + Math.random() * cookieArea.height}px`;

    setTimeout(() => {
        cursor.remove();
        addOneToCounter();
        showFloatingText("+1", "blue", "counter"); //Show blue "+1" for bites
    }, 300);
}

// for item 4 🐀
function createWalkingMouse() {
    let mouse = document.createElement("div");
    mouse.innerText = "🐀"; 
    mouse.className = "real-mouse";
    document.body.appendChild(mouse);

    let cookieArea = document.getElementById("cookie-img").getBoundingClientRect();
    
    let mouseY = cookieArea.bottom - 80;
    let movingRight = false; 

    function walkMouse() {
        let speed = autoClickSpeed["real-mouse"] / 4; 
        let startX = movingRight ? cookieArea.left - 30 : cookieArea.right + 30;
        let endX = movingRight ? cookieArea.right + 30 : cookieArea.left - 30;

        let startTime = performance.now();
        function animateMouseWalk(currentTime) {
            let elapsedTime = currentTime - startTime;
            let progress = Math.min(elapsedTime / speed, 1);
            mouse.style.left = `${startX + progress * (endX - startX)}px`;
            mouse.style.top = `${mouseY}px`;

            if (progress < 1) {
                requestAnimationFrame(animateMouseWalk);
            } else {
                movingRight = !movingRight; 
                mouse.style.transform = `scaleX(${movingRight ? -1 : 1})`; 

                completeMouseLoop();

                setTimeout(walkMouse, 200);
            }
        }
        requestAnimationFrame(animateMouseWalk);
    }

    mouse.style.left = `${cookieArea.right}px`;
    mouse.style.top = `${mouseY}px`;

    walkMouse(); 
}

// 🐀 After the mouse completes a loop, eat a full cookie (5 bites + 1 cookie)
function completeMouseLoop() {
    biteCounter += 5;
    cookieCounter++;

    document.getElementById("counter").innerText = biteCounter;
    document.getElementById("cookie-count").innerText = `Cookies eaten: ${cookieCounter}`;
    document.getElementById("cookie-img").src = "cookies/1.png";


    showFloatingText("+5", "blue", "counter"); // Show blue "+5" for bites
    showFloatingText("+1", "red", "cookie-count"); // Show red "+1" for cookies
}



// todos: 
// - mouse speed and interval needs fix
// - haven't tested out leveling up
// - item 5 to be implemented