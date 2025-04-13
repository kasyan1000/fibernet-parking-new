
document.addEventListener("DOMContentLoaded", function () {
  // כניסת מנהל
  const loginBtn = document.getElementById("adminLoginBtn");
  const loginPopup = document.getElementById("admin-login-popup");
  const loginClose = document.getElementById("close-login");

  if (loginBtn && loginPopup && loginClose) {
    loginBtn.addEventListener("click", () => {
      loginPopup.style.display = "block";
    });

    loginClose.addEventListener("click", () => {
      loginPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == loginPopup) {
        loginPopup.style.display = "none";
      }
    });

    const loginForm = document.getElementById("admin-login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("admin-username").value;
        const password = document.getElementById("admin-password").value;
        if (username === "admin officer" && password === "Parkfor@56789") {
          window.location.href = "dashboard.html";
        } else {
          alert("פרטי ההתחברות שגויים");
        }
      });
    }
  }

  // הוספת אורח נוסף
  const addGuestBtn = document.getElementById("add-guest-btn");
  const guestContainer = document.getElementById("guest-container");
  let guestCount = 1;
  const maxGuests = 3;

  if (addGuestBtn && guestContainer) {
    addGuestBtn.addEventListener("click", () => {
      if (guestCount >= maxGuests) return;

      const guestFields = document.createElement("div");
      guestFields.className = "guest-fields";
      guestFields.innerHTML = `
        <hr>
        <label>שם האורח:</label><input type="text" name="guest_name_${guestCount}">
        <label>מספר רכב:</label><input type="text" name="car_number_${guestCount}">
        <label>טלפון אורח:</label><input type="tel" name="guest_phone_${guestCount}">
${guestCount === maxGuests - 1 ? "<small style='color:red;'>שים לב, הינך מוגבל להזמנה של 3 חניות. להזמנת חניות נוספות יש לפנות לקב\"ט</small>" : ""}
      `;
    const guestContainer = document.getElementById('guest-container');
    if (guestContainer) {
        guestContainer.appendChild(guestFields);
    }
      guestCount++;
    });
  }
});
