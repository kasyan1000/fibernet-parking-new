
function approve(btn) {
  const row = btn.parentElement.parentElement;
  row.querySelector(".status").textContent = "מאושר";
  alert("הוזן אישור. מייל נשלח לעובד ולשומר (סימולציה).");
}

function reject(btn) {
  const row = btn.parentElement.parentElement;
  row.querySelector(".status").textContent = "נדחה";
  alert("הבקשה נדחתה. מייל נשלח לעובד (סימולציה).");
}
