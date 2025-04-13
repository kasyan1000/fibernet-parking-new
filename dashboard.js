
function logout() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll("#parkingTable tbody tr");

        rows.forEach(row => {
            const name = row.cells[7].innerText.toLowerCase();
            const car = row.cells[6].innerText.toLowerCase();
            const phone = row.cells[3].innerText.toLowerCase();

            if (name.includes(filter) || car.includes(filter) || phone.includes(filter)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    const exportBtn = document.querySelector(".export");
    if (exportBtn) {
        exportBtn.addEventListener("click", function () {
            const rows = Array.from(document.querySelectorAll("#parkingTable tr"));
            const csv = rows.map(row =>
                Array.from(row.cells).map(cell => `"\${cell.innerText}"`).join(",")
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

    const rows = document.querySelectorAll("#parkingTable tbody tr");
    rows.forEach(row => {
        row.style.backgroundColor = "#f0f0f0"; // grey for default state
    });

    const table = document.getElementById("parkingTable");
    table.addEventListener("click", function (e) {
        if (e.target.classList.contains("approve-btn")) {
            const row = e.target.closest("tr");
            row.classList.remove("pending", "rejected");
            row.classList.add("approved");
            row.querySelector(".status").innerText = "מאושר";
            row.style.backgroundColor = "#d4edda"; // light green
        }

        if (e.target.classList.contains("reject-btn")) {
            const row = e.target.closest("tr");
            row.classList.remove("pending", "approved");
            row.classList.add("rejected");
            row.querySelector(".status").innerText = "נדחה";
            row.style.backgroundColor = "#e0e0e0"; // light grey
        }
    });
});
