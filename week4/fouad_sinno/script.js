let last_click = 0;
let click_speeds = []; 

function addOneToCounter() {

    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
    let speed = document.getElementById("speed");

    let clicker_speed = calculate_click_speed();

    if (clicker_speed !== null) {
        speed.innerText = speed.toFixed(2); //Rounding to 2 decimal places
        }
    }

console.log("Hello!")


// Helper function to Track the rate at which the cookie is being clicked

function calculate_click_speed() {
    cur_time = performance.now();

    if (last_click === 0) {
        last_click = cur_time;

        return null;
    }

    let difference = (cur_time - last_click) / 10000; //converts from ms to seconds
    let speed = 1 / difference; //this represents the clicks per second
    click_speeds.push(speed); //add this speed to list

    if (click_speeds.length > 10) {
        click_speeds.shift(); //to remove the oldest speed
    }

    last_click = cur_time; //for the next calculation

    let sum_of_speeds = click_speeds.reduce((a, b) => a + b, 0); //sum all speeds
    let average_speed = sum_of_speeds / click_speeds.length;
    
    return average_speed;
}