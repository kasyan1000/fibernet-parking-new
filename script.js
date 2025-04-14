let guestCount = 0;

document.getElementById('add-guest-btn').addEventListener('click', () => {
  if (guestCount >= 3) {
    document.getElementById('guest-limit-msg').style.display = 'block';
    return;
  }

  guestCount++;
  const newGuest = document.createElement('div');
  newGuest.className = 'guest-entry';
  newGuest.innerHTML = `
    <input name="name${guestCount}" placeholder="שם אורח">
    <input name="phone${guestCount}" placeholder="טלפון">
    <input name="car${guestCount}" placeholder="מספר רכב">
    <input name="start${guestCount}" type="time" placeholder="שעת התחלה">
    <input name="end${guestCount}" type="time" placeholder="שעת סיום">
  `;
  document.getElementById('guests-container').appendChild(newGuest);

  if (guestCount === 3) {
    document.getElementById('guest-limit-msg').style.display = 'block';
  }
});