
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const table = document.getElementById("requestTable");
    const rows = table.querySelectorAll("tbody tr");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(query) ? "" : "none";
            });
        });
    }
});

function approve(button) {
    const row = button.closest("tr");
    const statusCell = row.cells[1];
    statusCell.textContent = "מאושר";
}

function reject(button) {
    const row = button.closest("tr");
    const statusCell = row.cells[1];
    statusCell.textContent = "נדחה";
}
    