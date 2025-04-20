
let guestCount = 1;

document.getElementById('add-guest-btn').addEventListener('click', () => {
  const guestsContainer = document.getElementById("guests-container");
  const guestDiv = document.createElement("div");
  guestDiv.classList.add("guest-entry");
  guestDiv.innerHTML = `
    <label>שם האורח:</label>
    <input type="text" required />
    <label>מספר רכב:</label>
    <input type="text" required />
    <label>טלפון אורח:</label>
    <input type="tel" required />
  `;
  guestsContainer.appendChild(guestDiv);
});

const loginBtn = document.getElementById("admin-login-btn");
const loginPopup = document.getElementById("login-popup");
if (loginBtn && loginPopup) {
  loginBtn.addEventListener("click", function () {
    loginPopup.style.display = "block";
    const errorMsg = document.getElementById("login-error");
    if (errorMsg) errorMsg.textContent = "";
  });
}

window.addEventListener("click", function (e) {
  if (e.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});

const closeBtn = document.getElementById("closePopup");
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    loginPopup.style.display = "none";
  });
}

function validateLogin() {
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value.trim();
  const errorMsg = document.getElementById("login-error");

  if (username.toLowerCase() === "admin officer" && password === "Parkfor@56789") {
    window.location.href = "dashboard.html";
  } else {
    if (errorMsg) {
      errorMsg.textContent = "שם משתמש או סיסמה שגויים";
      errorMsg.style.color = "red";
      errorMsg.style.marginTop = "10px";
    }
  }
}
