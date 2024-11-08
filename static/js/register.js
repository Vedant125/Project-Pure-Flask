function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("registerPopup").style.display = "none";  // Hide register popup
}

function hideLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

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

// Close popup if clicked outside the popup content
window.onclick = function(event) {
    const loginPopup = document.getElementById("loginPopup");
    const registerPopup = document.getElementById("registerPopup");

    // Close login popup if clicked outside the login popup
    if (event.target == loginPopup) {
        hideLoginPopup();
    }

    // Close register popup if clicked outside the register popup
    if (event.target == registerPopup) {
        hideRegisterPopup();
    }
};