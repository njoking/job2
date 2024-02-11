// JavaScript to toggle the side menu
document.getElementById("menu-btn").addEventListener("click", function() {
    var sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.left === "-250px") {
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-250px";
    }
});

// JavaScript to control the video popup
function openVideoPopup() {
    document.getElementById("video-popup").style.display = "block";
}

function closeVideoPopup() {
    document.getElementById("video-popup").style.display = "none";
}
