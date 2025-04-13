
let guestCount = 1;
function addGuest() {
  if (guestCount >= 3) {
    document.getElementById("limitNote").style.display = "block";
    return;
  }
  guestCount++;
  const guestDiv = document.createElement("div");
  guestDiv.classList.add("guest-block");
  guestDiv.innerHTML = `
    <hr>
    <label>שם האורח:<input type="text" name="guestName[]" required></label>
    <label>מספר רכב:<input type="text" name="carNumber[]" required></label>
    <label>תאריך ביקור:<input type="date" name="visitDate[]" required></label>
    <label>שעת התחלה:<input type="time" name="startTime[]" required></label>
    <label>שעת סיום:<input type="time" name="endTime[]" required></label>
    <label>טלפון אורח:<input type="tel" name="phone[]" required></label>
  `;
  document.getElementById("extraGuests").appendChild(guestDiv);
}
