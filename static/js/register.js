function showRegisterPopup() {
    document.getElementById("registerPopup").style.display = "block";
}

function hideRegisterPopup() {
    document.getElementById("registerPopup").style.display = "none";
}

// Hide popup on outside click
window.onclick = function(event) {
    const popup = document.getElementById("registerPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
