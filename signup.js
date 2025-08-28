document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find(user => user.email === email)) {
    alert("Email already registered!");
    return;
  }

  users.push({ username, email, password });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! You can now log in.");

  document.getElementById("signup-form").reset();
});