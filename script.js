
function showLoginPopup() {
  document.getElementById("login-popup").style.display = "flex";
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
    alert("שם משתמש או סיסמה שגויים");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const adminBtn = document.getElementById("adminBtn");
  if (adminBtn) {
    adminBtn.addEventListener("click", showLoginPopup);
  }
});
