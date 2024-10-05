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
