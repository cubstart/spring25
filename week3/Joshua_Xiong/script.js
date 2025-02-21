function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}
function play(){
    audio = document.getElementById("audio");
    audio.playbackRate=2.5;
    audio.play();
} 
function resize(){

    
    img = document.getElementById("cookie")

    img.classList.add('shrink');
    setTimeout(() => {img.classList.remove('shrink');}, 300);

}