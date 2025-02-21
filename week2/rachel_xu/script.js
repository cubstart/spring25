function interact() {
    let img = document.getElementById("oiiai");
    let audio = document.getElementById("oi_sound");

    if (img.style.display === "none") {
        img.style.display = "block";
        audio.play(); 
    } else {
        img.style.display = "none";
        audio.pause();
        audio.currentTime = 0;
    }
}

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 20, lng: 0 }
    });

    let geocoder = new google.maps.Geocoder();

    let locations = [
        "California, USA",
        "Virginia, USA",
        "Washington D.C., USA",
        "North Carolina, USA",
        "South Carolina, USA",
        "Nevada, USA",
        "Arizona, USA",
        "Missouri, USA",
        "Ohio, USA",
        "New York State, USA",
        "Pennsylvania, USA",
        "New Jersey, USA",
        "Maryland, USA",
        "Georgia, USA",
        "Florida, USA",
        "Georgia, USA",
        "Connecticut, USA",
        "Massachusetts, USA",
        "Costa Rica",
        "Greece",
        "Japan",
        "Cambodia",
        "Australia",
        "Malaysia",
        "Philippine",
        "Beijing, China",
        "Shanghai, China",
        "Tianjin, China",
        "Hebei, China",
        "Zhejiang, China",
        "Guangdong, China",
        "Taiwan",
        "Shanxi, China",
        "Shaanxi, China",
        "Shangdong, China",
        "Sichuan, China",
        "Yunnan, China",
        "Guangxi, China",
        "Guizhou, China",
        "Inner Mongolia, China"
    ];

    locations.forEach(place => {
        geocoder.geocode({ address: place }, function (results, status) {
            if (status === "OK") {
                new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    title: place
                });
            } else {
                console.error("Geocode was not successful for " + place + ": " + status);
            }
        });
    });
}
