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

window.onload = function () {

    // Pre-fill login if Remember Me in cookie/localStorage
    if (window.location.pathname.endsWith("login.html")) {
        if (getCookie("rememberMe") === "true") {
            document.getElementById("email").value = getCookie("email");
            document.getElementById("password").value = getCookie("password");
            document.getElementById("rememberMe").checked = true;
        }
    }

    if (sessionStorage.getItem("login") === "true") {
        const username = sessionStorage.getItem("username");
        document.getElementById("userprofile").innerHTML = username;
        document.getElementById("userdrop1").innerHTML = "Profile";
        document.getElementById("userdrop2").innerHTML = "Sign Out";
    } else {
        document.getElementById("userprofile").innerHTML = "Login/Sign Up";
        document.getElementById("userdrop1").innerHTML = "Login";
        document.getElementById("userdrop2").innerHTML = "Sign Up";
    }
};

document.getElementById("userdrop2").addEventListener("click", function (e) {
    if (this.textContent === "Sign Out") {
        e.preventDefault();
        // Clear session and local storage
        sessionStorage.clear();
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("username");
        localStorage.setItem("rememberMe", "false");

        // Redirect to login page
        window.location.href = "login.html";
    }

    if (this.textContent === "Sign Up") {
        window.location.href = "signup.html";
    }
});

document.getElementById("userdrop1").addEventListener("click", function (e) {
    if (this.textContent === "Login") {
        window.location.href = "login.html";
    }

    if (this.textContent === "Profile") {
        window.location.href = "profile.html";
    }
});