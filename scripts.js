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

    loginBtn.addEventListener('click', login);
    registerBtn.addEventListener('click', register);

    document.querySelector(".bx-menu").onclick = myMenuFunction;
});

function myMenuFunction() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("responsive");
}

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

    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Clear all error messages
    clearAllErrors();

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        setError("emailError", "Please enter a valid email address");
        isValid = false;
    }

    // Phone validation (must be 10 digits)
    if (phone.length !== 10 || isNaN(phone)) {
        setError("phoneError", "Please enter a valid 10-digit phone number");
        isValid = false;
    }

    // Password length validation
    if (password.length < 8) {
        setError("passwordError", "Password must be at least 8 characters long");
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        setError("confirmPasswordError", "Passwords do not match");
        isValid = false;
    }

    return isValid;
}

function setError(elementId, errorMessage) {
    document.getElementById(elementId).innerText = errorMessage;
}

function clearError(elementId) {
    document.getElementById(elementId).innerText = "";
}

function clearAllErrors() {
    clearError('emailError');
    clearError('phoneError');
    clearError('passwordError');
    clearError('confirmPasswordError');
}
