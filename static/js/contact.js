
// Get form elements
const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation (empty fields check)
    if (!name || !email || !message) {
        showResponseMessage("All fields are required!", "error");
        return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showResponseMessage("Please enter a valid email address.", "error");
        return;
    }
    
    setTimeout(() => {
        // Assuming form submission is successful
        showResponseMessage("Thank you for your message! We will get back to you shortly.", "success");
        form.reset();
    }, 1000);
});

// Function to display the response message
function showResponseMessage(message, type) {
    responseMessage.textContent = message;
    responseMessage.className = `response-message ${type}`;
    responseMessage.style.display = "block";
}

    
