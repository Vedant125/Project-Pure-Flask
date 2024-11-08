function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("registerPopup").style.display = "none";
}

function hideLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Perform login logic or validation
        document.getElementById("loginError").style.display = "none";
        hideLoginPopup(); // Hide popup on successful login
    } else {
        document.getElementById("loginError").style.display = "block";
    }
}

// Close popup if clicked outside the popup content (added this logic here)
window.onclick = function(event) {
    // Close login popup if clicked outside the login popup
    if (event.target == document.getElementById("loginPopup")) {
        hideLoginPopup();
    }
};

window.onclick = function(event) {
    // Close login popup if clicked outside the login popup
    if (event.target == document.getElementById("loginPopup")) {
        hideLoginPopup();
    }
    
    // Close register popup if clicked outside the register popup
    if (event.target == document.getElementById("registerPopup")) {
        hideRegisterPopup();
    }
};
