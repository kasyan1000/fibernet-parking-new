
function showLoginPopup() {
  document.getElementById("login-popup").style.display = "block";
}

function hideLoginPopup() {
  document.getElementById("login-popup").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin officer" && password === "Parkfor@56789") {
    window.location.href = "dashboard.html";
  } else {
    alert("פרטי ההתחברות שגויים.");
  }
}

function validateForm(e) {
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const messageArea = document.getElementById("messageArea");

  if (startTime >= endTime) {
    messageArea.innerText = "שעת סיום חייבת להיות אחרי שעת ההתחלה.";
    e.preventDefault();
    return false;
  }

  // Simulated rule for over 3 bookings — shows message
  const simulatedBookingCount = 4;
  if (simulatedBookingCount > 3) {
    messageArea.innerText = "עובד יקר, להזמנה של יותר מ־3 חניות – ההזמנה תועבר לאישור הקב"ט.";
  } else {
    messageArea.innerText = "";
  }

  alert("הטופס נשלח!");
  return true;
}
