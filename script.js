
document.getElementById('admin-login-btn').addEventListener('click', function () {
    document.getElementById('login-popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('login-popup').style.display = 'none';
});

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin officer' && password === 'Parkfor@56789') {
        window.location.href = 'dashboard.html';
    } else {
        alert('שם משתמש או סיסמה שגויים');
    }
}
