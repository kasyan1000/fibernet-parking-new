document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("adminLoginBtn");
  const loginPopup = document.getElementById("admin-login-popup");
  const loginClose = document.getElementById("close-login");
  const loginForm = document.getElementById("admin-login-form");

  if (loginBtn && loginPopup && loginClose && loginForm) {
    loginBtn.addEventListener("click", () => {
      loginPopup.style.display = "block";
    });

    loginClose.addEventListener("click", () => {
      loginPopup.style.display = "none";
    });

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("admin-username").value;
      const password = document.getElementById("admin-password").value;

      if (username === "admin officer" && password === "Parkfor@56789") {
        alert("התחברת בהצלחה!");
        // window.location.href = "dashboard.html";
      } else {
        alert("פרטי ההתחברות שגויים");
      }
    });
  }
});
