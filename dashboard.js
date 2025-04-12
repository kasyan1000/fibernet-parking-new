
function approve(button) {
    const row = button.closest("tr");
    row.className = "approved";
    row.cells[6].innerText = "מאושרת";
}

function reject(button) {
    const row = button.closest("tr");
    row.className = "rejected";
    row.cells[6].innerText = "נדחתה";
}

function exportToCSV() {
    const rows = [['שם אורח', 'מספר רכב', 'שעת התחלה', 'שעת סיום', 'טלפון', 'אימייל', 'סטטוס']];
    document.querySelectorAll('#requestsTable tbody tr').forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(cell => cell.innerText.trim());
        rows.push(cells.slice(0, 7));
    });
    const csvContent = rows.map(e => e.join(',')).join('\n');
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'parking_requests.csv';
    link.click();
}
