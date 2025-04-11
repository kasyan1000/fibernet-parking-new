
document.getElementById('filterDate').addEventListener('change', filterTable);
document.getElementById('filterStatus').addEventListener('change', filterTable);

function filterTable() {
    const date = document.getElementById('filterDate').value;
    const status = document.getElementById('filterStatus').value;
    const rows = document.querySelectorAll('#requestsTable tbody tr');

    rows.forEach(row => {
        const rowDate = row.cells[2].textContent.trim();
        const rowStatus = row.cells[7].textContent.trim();

        const showByDate = !date || rowDate === date;
        const showByStatus = !status || rowStatus === convertStatus(status);

        row.style.display = (showByDate && showByStatus) ? '' : 'none';
    });
}

function convertStatus(code) {
    switch (code) {
        case 'pending': return 'ממתין';
        case 'approved': return 'מאושר';
        case 'rejected': return 'נדחה';
        default: return '';
    }
}
