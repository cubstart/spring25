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