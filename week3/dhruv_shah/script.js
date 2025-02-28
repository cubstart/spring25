function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

let lastCount = 0;
let latestCPS = 0;

setInterval(() => {
    let currentCount = parseInt(document.getElementById("counter").innerText);
    let cps = currentCount - lastCount;
    latestCPS = cps;

    lastCount = currentCount; // Update last count for next interval

    for(let clicker of clickers.values()){
        clicker.update();
    }

    document.getElementById("clicksPerSecond").innerText = cps;
    console.log("Clicks Per Second: " + cps);

}, 1000);

class Clicker {
    constructor(name, initialCost, costMultiplier, cps, quantity){
        this.name = name;  // ✅ Fix: Assign the correct name
        this.initialCost = initialCost;
        this.costMultiplier = costMultiplier;
        this.cps = cps;
        this.quantity = quantity;
    }

    buy(){
        let cost = this.initialCost * Math.pow(this.costMultiplier, this.quantity);
        let currentCount = parseInt(document.getElementById("counter").innerText);

        if(currentCount >= cost){
            document.getElementById("counter").innerText = currentCount - cost;
            this.quantity++;
        }
    }

    updateTotalCPS(){  // ✅ Renamed from updateCPS to avoid conflict
        document.getElementById("clicksPerSecond").innerText = 
            parseInt(document.getElementById("clicksPerSecond").innerText) + this.cps * this.quantity;

        document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + this.cps * this.quantity;
    }

    updateCost(){
        document.getElementById(this.name + "Cost").innerText = 
            Math.floor(this.initialCost * Math.pow(this.costMultiplier, this.quantity));
    }

    updateQuantity(){
        document.getElementById(this.name + "Quantity").innerText = this.quantity;
    }

    updateIndividualCPS(){  // ✅ Renamed from updateCPS to avoid conflict
        document.getElementById(this.name + "CPS").innerText = this.cps * this.quantity;
    }

    update(){
        this.updateTotalCPS();
        this.updateCost();
        this.updateQuantity();
        this.updateIndividualCPS();  // ✅ Renamed to avoid conflict
    }
}

const clickers = new Map();

let bonusCPS = 0;

clickers.set("clicker", new Clicker("clicker", 15, 1.15, 1, 0));     // Small boost but keeps it affordable
clickers.set("doge", new Clicker("doge", 100, 1.13, 8, 0));         // Moderate CPS boost
clickers.set("capybara", new Clicker("capybara", 500, 1.12, 30, 0)); // Stronger, but costlier


for(let clicker of clickers.values()){
    clicker.update();
}

console.log(clickers);

function buyClicker(name){  
    clickers.get(name).buy();
}

