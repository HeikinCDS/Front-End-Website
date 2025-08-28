function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("rememberMe").checked;

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    // Find matching user
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        const username = validUser.username;
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("login", "true");

        if (remember) {
            // Save in localStorage and cookies

            setCookie("email", email, 7);
            setCookie("password", password, 7);
            setCookie("username", username, 7);
            setCookie("rememberMe", "true", 7);

        } else {

            deleteCookie("email");
            deleteCookie("password");
            deleteCookie("username");
            deleteCookie("rememberMe");
            setCookie("rememberMe", "false", 7);
        }

        alert("Login successful! Welcome " + username);

        window.location.href = "recipes.html";


    } else {
        alert("Invalid email or password!");
    }
});

