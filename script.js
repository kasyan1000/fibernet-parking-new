function showLoginPopup() {
  document.getElementById("login-popup").style.display = "block";
}

function hideLoginPopup() {
  document.getElementById("login-popup").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin officer" && password === "Parkfor@56789") {
    window.location.href = "dashboard.html";
  } else {
    alert("פרטי ההתחברות שגויים.");
  }
}