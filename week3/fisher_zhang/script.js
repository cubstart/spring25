let clickTimestamps = [];

const maxSpeed = 10;

const lowColor = [238, 130, 238]; // light orange 
const highColor = [255, 0, 0]; // shiny red


function interpolateColor(color1, color2, factor) {
    const result = color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}




function addOneToCounter(){
    console.log("Function addOneToCounter called");

    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1;

    count = parseInt(document.getElementById("counter").innerText)
    // // rotating
    // let cookie = document.querySelector('.cookie');
    // cookie.classList.remove('rotate');
    // void cookie.offsetWidth;
    // cookie.classList.add('rotate');

    //changing background color every 20 click
    if (count % 20 === 0) {
        // Step 3: Define the colors and choose one based on the count
        const colors = ["orange","green", "violet"];
        let colorIndex = Math.floor(count / 20) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    }
    
    
    // Capture the current timestamp (in milliseconds)
    const now = Date.now();
    // Add this timestamp to our global array
    clickTimestamps.push(now);
    console.log("Current clickTimestamps:", clickTimestamps);

    // We only need to keep the last 4 clicks.
    // If there are more than 4 timestamps, remove the oldest ones.
    if (clickTimestamps.length > 4) {
        clickTimestamps.shift();  // Removes the first element in the array
    }


    // If we have at least 4 clicks, calculate the click speed
    const speedElement = document.getElementById('click-speed');
    const progressBar = document.getElementById('progress-bar');

    if (clickTimestamps.length >= 4) {
        // Calculate the time difference between the oldest and current click (in ms)
        const timeDiffMs = now - clickTimestamps[0];
        // For 4 clicks there are 3 intervals, so calculate clicks per second
        const clicksPerSecond = 3 / (timeDiffMs / 1000);
        const formattedSpeed = clicksPerSecond.toFixed(2);
        speedElement.innerText = `Speed: ${formattedSpeed} clicks/sec`;
        
        // --- Update the Progress Bar ---
        // Calculate percentage based on maxSpeed and cap it at 100%
        let percentage = Math.min((clicksPerSecond / maxSpeed) * 100, 100);
        progressBar.style.width = percentage + '%';
        
        // Calculate the interpolation factor (0 to 1)
        let factor = percentage / 100;
        // Get the interpolated color for the current factor
        let barColor = interpolateColor(lowColor, highColor, factor);
        progressBar.style.backgroundColor = barColor;
      } else {
        speedElement.innerText = `Speed: calculating...`;
        progressBar.style.width = '0%';
        progressBar.style.backgroundColor = interpolateColor(lowColor, highColor, 0); // light orange
      }




}