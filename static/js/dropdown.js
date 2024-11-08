// Function to toggle the dropdown on click
function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    const userProfile = document.querySelector(".user-profile");
    const dropdown = document.querySelector(".dropdown-content");
    
    if (!userProfile.contains(event.target)) {
        dropdown.style.display = "none";
    }
};