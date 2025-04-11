
function approve(button) {
    const row = button.closest("tr");
    row.cells[1].innerText = "מאושר";
    alert("נשלחה הודעת אישור למייל.");
}

function reject(button) {
    const row = button.closest("tr");
    row.cells[1].innerText = "נדחה";
    alert("נשלחה הודעת דחייה למייל.");
}

function filterTable() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#requestTable tbody tr");
    rows.forEach(row => {
        const name = row.cells[8].innerText.toLowerCase();
        const car = row.cells[7].innerText.toLowerCase();
        const phone = row.cells[4].innerText.toLowerCase();
        if (name.includes(input) || car.includes(input) || phone.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
