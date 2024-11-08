function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("registerPopup").style.display = "none";
}

function hideLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Perform login logic or validation (using MongoDB)
        document.getElementById("loginError").style.display = "none";

        try {
            // Make an API call to the backend to validate the credentials
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: username, password: password }) // MongoDB column names: 'name' and 'password'
            });

            const data = await response.json();

            if (data.success) {
                // On successful login, hide the popup and redirect to the thank you page
                hideLoginPopup();
                window.location.href = "D:/AISSMS/Sem 7/Major Project/Project/Project-Pure-Flask-main/templates/thankyou.html"; // Redirect to thank you page
            } else {
                // If credentials are invalid
                document.getElementById("loginError").style.display = "block";
                alert("Invalid username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            document.getElementById("loginError").style.display = "block";
        }

    } else {
        document.getElementById("loginError").style.display = "block"; // Show error message if fields are empty
    }
}

// Close popup if clicked outside the popup content
window.onclick = function (event) {
    // Close login popup if clicked outside the login popup
    if (event.target == document.getElementById("loginPopup")) {
        hideLoginPopup();
    }
    
    // Close register popup if clicked outside the register popup
    if (event.target == document.getElementById("registerPopup")) {
        hideRegisterPopup();
    }
};