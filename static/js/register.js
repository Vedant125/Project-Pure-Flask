function showRegisterPopup() {
    document.getElementById("registerPopup").style.display = "block";
    document.getElementById("loginPopup").style.display = "none";  // Hide login popup
}

function hideRegisterPopup() {
    document.getElementById("registerPopup").style.display = "none";
}

function switchToLogin() {
    hideRegisterPopup();
    showLoginPopup();
}

function switchToRegister() {
    hideLoginPopup();
    showRegisterPopup();
}

// Close popup if clicked outside the popup content (added this logic here)
window.onclick = function(event) {
    // Close register popup if clicked outside the register popup
    if (event.target == document.getElementById("registerPopup")) {
        hideRegisterPopup();
    }
};
