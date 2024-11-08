function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function hideLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function switchToRegister() {
    hideLoginPopup();
    showRegisterPopup();
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example of how to validate the login (replace with your actual verification logic)
    const isValidUser = validateUser(username, password);

    if (isValidUser) {
        // Redirect to another HTML page (e.g., dashboard.html)
        window.location.href = "dashboard.html"; // Change this to your desired page
    } else {
        // Show error message
        document.getElementById("loginError").style.display = "block";
    }
}

// Placeholder function for user validation
function validateUser(username, password) {
    // Replace this logic with your actual database verification
    const mockUser = {
        username: "testuser",
        password: "password123"
    };

    return username === mockUser.username && password === mockUser.password;
}

// Hide popup on outside click
window.onclick = function(event) {
    const loginPopup = document.getElementById("loginPopup");
    const registerPopup = document.getElementById("registerPopup");

    // Check if the click is outside the login popup
    if (event.target === loginPopup) {
        hideLoginPopup();
    }

    // Check if the click is outside the register popup
    if (event.target === registerPopup) {
        hideRegisterPopup();
    }
};

function switchToLogin() {
    hideRegisterPopup();  // Hide the registration popup
    showLoginPopup();     // Show the login popup
}