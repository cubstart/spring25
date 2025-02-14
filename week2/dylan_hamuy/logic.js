document.addEventListener('DOMContentLoaded', function() {
    console.log("loaded stuff")
    let count = localStorage.getItem("view-count")
    if (!count) {
        count = 0
    } 
    console.log("count: " + count)
    count++
    localStorage.setItem("view-count", count);
    document.getElementById("view-count").innerHTML = count
});