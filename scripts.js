document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach((move) => {
        let movingValue = move.getAttribute("data-value");
        let x = (e.clientX * movingValue) / 250;
        let y = (e.clientY * movingValue) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");

    // Login and Register
    loginBtn.addEventListener('click', login);
    registerBtn.addEventListener('click', register);

    // Attach menu button
    function myMenuFunction() {
        var navMenu = document.getElementById("navMenu");

        // Responsive menu
        if (navMenu.classList.contains("responsive")) {
            navMenu.classList.remove("responsive");
        } else {
            navMenu.classList.add("responsive");
        }
    }

    document.querySelector(".bx-menu").onclick = myMenuFunction;
});

//login functionality
function login() {
    var loginContainer = document.getElementById("login");
    var registerContainer = document.getElementById("register");
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");

    loginContainer.style.left = "4px";
    registerContainer.style.right = "-520px";
    loginBtn.classList.add("white-btn");
    registerBtn.classList.remove("white-btn");
    loginContainer.style.opacity = 1;
    registerContainer.style.opacity = 0;
}


//Register functionality
function register() {
    var loginContainer = document.getElementById("login");
    var registerContainer = document.getElementById("register");
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");

    loginContainer.style.left = "-510px";
    registerContainer.style.right = "5px";
    loginBtn.classList.remove("white-btn");
    registerBtn.classList.add("white-btn");
    loginContainer.style.opacity = 0;
    registerContainer.style.opacity = 1;
}

function validateForm() {
    let isValid = true;

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Name since i have divided name for looks therefor i haven't given any restriction to that below code can be used to implement that 
    if (fullName.length < 5) {
        setError("nameError", "Full Name must be at least 5 characters long");
        isValid = false;
    }

    // Validate Email (must contain @)
    if (!email.includes("@")) {
        setError("emailError", "Please enter a valid email address");
        isValid = false;
    }

    // Validate Phone Number (must not be 123456789 and must be 10 digits)
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        setError("phoneError", "Please enter a valid 10-digit phone number");
        isValid = false;
    }

    //Password (cannot be 'password', user's name, or less than 8 characters)
    if (password.toLowerCase() === "password" || password.length < 8 || password === fullName.toLowerCase()) {
        setError("passwordError", "Password cannot be 'password', your name, or less than 8 characters");
        isValid = false;
    }

    //Confirm Password (must match the password)
    if (password !== confirmPassword) {
        setError("confirmPasswordError", "Passwords do not match");
        isValid = false;
    }

    // If the form is not valid, prevent submission
    return isValid;
}

// Function to set error messages
function setError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to clear error messages on change
function clearError(id) {
    document.getElementById(id).textContent = "";
}