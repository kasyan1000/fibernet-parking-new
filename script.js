
function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "flex";
}

function handleAdminLogin() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;
    if (username === "admin officer" && password === "Parkfor@56789") {
        window.location.href = "dashboard.html";
    } else {
        alert("שם משתמש או סיסמה שגויים");
    }
}

function addGuest() {
    alert("הוספת אורח נוסף - פיתוח עתידי");
}
