
function openLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}
function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('loginError').textContent = '';
}
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "admin officer" && password === "Parkfor@56789") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('loginError').textContent = "שם משתמש או סיסמה שגויים";
    }
}
