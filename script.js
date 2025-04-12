
let guestCount = 1;
const maxGuests = 3;

document.getElementById("addGuestBtn").addEventListener("click", () => {
  if (guestCount >= maxGuests) return;

  const guestForms = document.getElementById("guest-forms");
  const newGuestDiv = document.createElement("div");
  newGuestDiv.classList.add("guest-form");

  newGuestDiv.innerHTML = `
    <hr />
    <label>שם האורח:</label>
    <input type="text" name="guestName[]" required>

    <label>מספר רכב:</label>
    <input type="text" name="carNumber[]" required>

    <label>תאריך ביקור:</label>
    <input type="date" name="visitDate[]" required>

    <label>שעת התחלה:</label>
    <input type="time" name="startTime[]" required>

    <label>שעת סיום:</label>
    <input type="time" name="endTime[]" required>

    <label>טלפון אורח:</label>
    <input type="tel" name="guestPhone[]" required>
  `;

  if (guestCount === 2) {
    const notice = document.createElement("p");
    notice.style.color = "red";
    notice.style.fontWeight = "bold";
    notice.innerText = "שים לב: הינך מוגבל להזמנה של 3 חניות. להזמנות נוספות יש לפנות לקב"ט.";
    newGuestDiv.appendChild(notice);
  }

  guestForms.appendChild(newGuestDiv);
  guestCount++;
});
