
function logout() {
    window.location.href = "index.html";
}

function saveStatus(rowId, status) {
    localStorage.setItem(`rowStatus_${rowId}`, status);
}

function loadStatuses() {
    const rows = document.querySelectorAll("#parkingTable tbody tr");
    rows.forEach((row, index) => {
        const status = localStorage.getItem(`rowStatus_${index}`);
        if (status) {
            row.cells[8].innerText = status;
            if (status === "מאושר") {
                row.style.backgroundColor = "#c6f6d5";
            } else if (status === "נדחה") {
                row.style.backgroundColor = "#fed7d7";
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadStatuses();

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll("#parkingTable tbody tr");

        rows.forEach(row => {
            const textContent = row.innerText.toLowerCase();
            row.style.display = textContent.includes(filter) ? "" : "none";
        });
    });

    const exportBtn = document.querySelector(".export");
    if (exportBtn) {
        exportBtn.addEventListener("click", function () {
            const rows = Array.from(document.querySelectorAll("#parkingTable tr"));
            const csv = rows.map(row =>
                Array.from(row.cells).map(cell => `"${cell.innerText}"`).join(",")
            ).join("\n");

            const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "parking-requests.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    const approveButtons = document.querySelectorAll(".approve-btn");
    const rejectButtons = document.querySelectorAll(".reject-btn");

    approveButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const row = button.closest("tr");
            row.style.backgroundColor = "#c6f6d5";
            row.cells[8].innerText = "מאושר";
            saveStatus(index, "מאושר");
        });
    });

    rejectButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const row = button.closest("tr");
            row.style.backgroundColor = "#fed7d7";
            row.cells[8].innerText = "נדחה";
            saveStatus(index, "נדחה");
        });
    });
});
