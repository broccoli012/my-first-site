// Smooth page transition
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Login functionality
    const loginButton = document.getElementById('login_button');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginOutput = document.getElementById('login_output');

            if (username === "admin" && password === "1234") {
                loginOutput.className = "success";
                loginOutput.innerText = `Welcome back, ${username}!`;
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1500);
            } else {
                loginOutput.className = "error";
                loginOutput.innerText = "Incorrect username or password. Please try again.";
            }
        });
    }
});