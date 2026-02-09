function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ email, password, verified: true }));
  document.getElementById("msg").innerText = "Registered! (Email verification goes here)";
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    window.location.href = "book.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}
