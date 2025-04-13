
document.addEventListener("DOMContentLoaded", () => {
  const guestFormsContainer = document.getElementById("guestFormsContainer");
  const addGuestBtn = document.getElementById("addGuestBtn");
  const maxGuests = 3;
  let guestCount = 0;

  function createGuestForm(index) {
    return `
      <fieldset style="text-align:right; border:1px solid #ccc; padding:10px; margin:10px 0;">
        <legend>פרטי אורח ${index + 1}</legend>
        <input type="text" name="guestName" placeholder="שם מלא של האורח" required><br>
        <input type="text" name="licensePlate" placeholder="מספר רכב" required><br>
        <input type="date" name="visitDate" required><br>
        <input type="time" name="visitStart" required><br>
        <input type="time" name="visitEnd" required><br>
        <input type="tel" name="guestPhone" placeholder="מספר טלפון" required><br>
        <input type="email" name="employeeEmail" placeholder="כתובת מייל של העובד המזמין" required><br>
        ${index === maxGuests - 1 ? "<small style='color:red;'>שים לב הינך מוגבל להזמנה של 3 חניות , להזמנת חניות נוספות יש לפנות לקב"ט</small>" : ""}
      </fieldset>
    `;
  }

  function addGuestForm() {
    if (guestCount < maxGuests) {
      const formHtml = createGuestForm(guestCount);
      guestFormsContainer.insertAdjacentHTML("beforeend", formHtml);
      guestCount++;
    }
    if (guestCount === maxGuests) {
      addGuestBtn.disabled = true;
    }
  }

  addGuestBtn.addEventListener("click", addGuestForm);
  addGuestForm(); // טופס ראשון מוצג כברירת מחדל

  document.getElementById("mainForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("הבקשה נשלחה בהצלחה!");
  });
});
