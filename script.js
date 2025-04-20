let guestCount = 1;

document.getElementById('add-guest-btn').addEventListener('click', () => {
  if (guestCount >= 3) return;

  guestCount++;
  const guestDiv = document.createElement('div');
  guestDiv.className = 'guest-entry';
  guestDiv.innerHTML = `
    <div class="guest-box">
      <div class="guest-header">
        <h4>מבקר ${guestCount}</h4>
        <button class="remove-guest" title="הסר">X</button>
      </div>
      <input name="name${guestCount}" placeholder="שם אורח">
      <input name="car${guestCount}" placeholder="מספר רכב">
      <input name="phone${guestCount}" placeholder="מספר טלפון">
      ${guestCount === 2 ? '<button type="button" class="add-guest-btn-inner">➕ הוסף מבקר נוסף</button>' : ''}
      ${guestCount === 3 ? '<p class="guest-limit-msg">עובד יקר, קיימת הגבלה להזמנה של עד 3 חניות לעובד. להזמנת חניות נוספות פנה לקב"ט.</p>' : ''}
    </div>
  `;
  document.getElementById('guests-container').appendChild(guestDiv);

  if (guestCount === 2) {
    const innerBtn = guestDiv.querySelector('.add-guest-btn-inner');
    innerBtn.addEventListener('click', () => {
      if (guestCount < 3) {
        guestCount++;
        const thirdDiv = document.createElement('div');
        thirdDiv.className = 'guest-entry';
        thirdDiv.innerHTML = `
          <div class="guest-box">
            <div class="guest-header">
              <h4>מבקר ${guestCount}</h4>
              <button class="remove-guest" title="הסר">X</button>
            </div>
            <input name="name${guestCount}" placeholder="שם אורח">
            <input name="car${guestCount}" placeholder="מספר רכב">
            <input name="phone${guestCount}" placeholder="מספר טלפון">
            <p class="guest-limit-msg">עובד יקר, קיימת הגבלה להזמנה של עד 3 חניות לעובד. להזמנת חניות נוספות פנה לקב"ט.</p>
          </div>
        `;
        document.getElementById('guests-container').appendChild(thirdDiv);
        innerBtn.disabled = true;
        addRemoveListener(thirdDiv);
      }
    });
  }

  addRemoveListener(guestDiv);

  if (guestCount === 3) {
    document.getElementById('add-guest-btn').disabled = true;
  }
});

function addRemoveListener(div) {
  const removeBtn = div.querySelector('.remove-guest');
  removeBtn.addEventListener('click', () => {
    div.remove();
    guestCount--;
    document.getElementById('add-guest-btn').disabled = false;
  });
}
// כניסת מנהל - פתיחת חלון התחברות
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("admin-login-btn");
  const loginPopup = document.getElementById("login-popup");

  if (loginBtn && loginPopup) {
    loginBtn.addEventListener("click", function () {
      loginPopup.style.display = "block";
    });

    // סגירת הפופאפ בלחיצה מחוץ או על כפתור סגירה
    window.addEventListener("click", function (e) {
      if (e.target === loginPopup) {
        loginPopup.style.display = "none";
      }
    });
  }
});
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

function openAdminLoginModal() {
  document.getElementById("adminLoginModal").style.display = "block";
}

function closeAdminLoginModal() {
  document.getElementById("adminLoginModal").style.display = "none";
}

function handleAdminLogin() {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  if (username.toLowerCase() === "admin officer" && password === "Parkfor@56789") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}
