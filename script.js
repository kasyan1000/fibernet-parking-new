
function showLoginPopup() {
  document.getElementById('loginPopup').style.display = 'block';
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin officer" && password === "Parkfor@56789") {
    window.location.href = "dashboard.html";
  } else {
    alert("פרטי ההתחברות שגויים.");
  }
  return false;
}
