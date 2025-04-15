document.addEventListener("DOMContentLoaded", function () {
  function validateLogin() {
    const username = document.getElementById("admin-username").value.trim();
    const password = document.getElementById("admin-password").value.trim();
    const errorMsg = document.getElementById("login-error");

    if (username === "officer" && password === "Parkfor@56789") {
      window.location.href = "dashboard.html";
    } else {
      if (errorMsg) {
        errorMsg.textContent = "שם משתמש או סיסמה שגויים";
        errorMsg.style.color = "red";
        errorMsg.style.marginTop = "10px";
      }
    }
  }

  // לחשוף את הפונקציה כך שכפתור יוכל לגשת אליה
  window.validateLogin = validateLogin;
});