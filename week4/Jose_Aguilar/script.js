function addOneToCounter(){
    document.getElementById("counter").innerText = 
    parseInt(document.getElementById("counter").innerText) + 1;
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected value from the radio buttons
    const form = document.getElementById('cookieForm');
    const selectedCookie = form.cookie.value;

    // Display the selected value (you can process it further as needed)
    console.log('Selected cookie:', selectedCookie);
    alert('You selected: ' + selectedCookie);
}

console.log("Hello! I'm Jose Aguilar");