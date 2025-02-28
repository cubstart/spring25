// Variables to track game stats
let counter = 0;  // Current cookie count
let clicks = [];  // Array to store click timestamps
let totalClicks = 0;  // Total clicks since start

// Function that runs when cookie is clicked
function addOneToCounter() {
    counter++;
    totalClicks++;
    document.getElementById("counter").textContent = counter;
    document.getElementById("totalClicks").textContent = totalClicks;
    
    // Record click time for CPS calculation
    clicks.push(Date.now());
    updateClicksPerSecond();
    
    // Add click effect
    createClickEffect(event);
}

function updateClicksPerSecond() {
    // Keep only clicks from the last second
    const now = Date.now();
    clicks = clicks.filter(click => now - click <= 1000);
    
    // Calculate CPS
    const cps = clicks.length;
    document.getElementById("clicksPerSecond").textContent = cps;
}

function createClickEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+1';
    effect.style.position = 'absolute';
    effect.style.left = (event.pageX - 10) + 'px';
    effect.style.top = (event.pageY - 10) + 'px';
    effect.style.color = '#d2691e';
    effect.style.fontSize = '20px';
    effect.style.pointerEvents = 'none';
    effect.style.userSelect = 'none';
    effect.style.animation = 'fadeUp 0.5s ease-out';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        document.body.removeChild(effect);
    }, 500);
}

// Add animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Update CPS every 100ms
setInterval(updateClicksPerSecond, 100);