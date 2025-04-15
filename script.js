let guestCount = 1;

document.getElementById('add-guest-btn').addEventListener('click', () => {
  if (guestCount >= 3) return;

  guestCount++;
  const guestDiv = document.createElement('div');
  guestDiv.className = 'guest-entry';
  guestDiv.innerHTML = `
    <hr>
    <h4>מבקר ${guestCount}</h4>
    <input name="name${guestCount}" placeholder="שם אורח">
    <input name="car${guestCount}" placeholder="מספר רכב">
    <input name="phone${guestCount}" placeholder="מספר טלפון">
    ${guestCount === 2 ? '<button type="button" class="add-guest-btn-inner">➕ הוסף מבקר נוסף</button>' : ''}
    ${guestCount === 3 ? '<p style="color:red; margin-top:10px;">עובד יקר, קיימת הגבלה להזמנה של עד 3 חניות לעובד. להזמנת חניות נוספות פנה לקב"ט.</p>' : ''}
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
          <hr>
          <h4>מבקר ${guestCount}</h4>
          <input name="name${guestCount}" placeholder="שם אורח">
          <input name="car${guestCount}" placeholder="מספר רכב">
          <input name="phone${guestCount}" placeholder="מספר טלפון">
          <p style="color:red; margin-top:10px;">עובד יקר, קיימת הגבלה להזמנה של עד 3 חניות לעובד. להזמנת חניות נוספות פנה לקב"ט.</p>
        `;
        document.getElementById('guests-container').appendChild(thirdDiv);
        innerBtn.disabled = true;
      }
    });
  }

  if (guestCount === 3) {
    document.getElementById('add-guest-btn').disabled = true;
  }
});