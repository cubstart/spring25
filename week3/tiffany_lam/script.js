function addOneToCounter() {
    document.getElementById("count").innerText = 
        parseInt(document.getElementById("count").innerText) + 1
}


function subtractOneToCounter() {
    document.getElementById("count").innerText = 
        parseInt(document.getElementById("count").innerText) - 1
}

function resetCounter() {
    document.getElementById("count").innerText = 0
}


function changeImage() {
    const full_cookie = "/week3/tiffany_lam/cookie.jpeg"
    const half_cookie = "/week3/tiffany_lam/half_cookie.jpeg"
    let image_link = document.getElementById("cookie_image").src
    if (image_link == full_cookie) {
        image_link = half_cookie
    } else {
        image_link = full_cookie
    }
    // document.getElementById("cookie_image").src="/week3/tiffany_lam/cookie.jpeg"
}

