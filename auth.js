let generatedCode = "";

/* -------- REGISTER -------- */
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    showMsg("Passwords do not match");
    return;
  }

  // generate 6-digit verification code
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

  // store user (demo purpose)
  localStorage.setItem("user", JSON.stringify({
    email: email,
    password: password,
    verified: false,
    code: generatedCode
  }));

  console.log("Verification code (demo):", generatedCode);

  // switch to verification step
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("verifyForm").style.display = "block";

  showMsg("Verification code sent to your email (demo)");
}

/* -------- VERIFY EMAIL -------- */
function verifyCode() {
  const inputCode = document.getElementById("code").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    showMsg("No registration found");
    return;
  }

  if (inputCode === user.code) {
    user.verified = true;
    localStorage.setItem("user", JSON.stringify(user));
    showMsg("Email verified successfully! You can now login.");
  } else {
    showMsg("Invalid verification code");
  }
}

/* -------- LOGIN -------- */
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    showMsg("No account found. Please register.");
    return;
  }

  if (user.email !== email || user.password !== password) {
    showMsg("Invalid email or password");
    return;
  }

  if (!user.verified) {
    showMsg("Please verify your email before logging in");
    return;
  }

  // login success
  localStorage.setItem("loggedIn", "true");
  window.location.href = "book.html";
}

/* -------- UTIL -------- */
function showMsg(text) {
  const msg = document.getElementById("msg");
  if (msg) msg.innerText = text;
}
