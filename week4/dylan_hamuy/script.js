function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

function getWeather(){
    var apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=37.8715&lon=122.2730&appid=7a16c3cbf5f181e57bbe7ebc758c325a"
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log("ERROR GETTING WEATHER")
    });
}