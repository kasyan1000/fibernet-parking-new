
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const rows = document.querySelectorAll("#requestTable tbody tr");

  // חיפוש חכם
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(query) ? "" : "none";
    });
  });

  // צביעת שורות לפי סטטוס
  rows.forEach(row => {
    const statusCell = row.querySelector(".status-cell");
    if (!statusCell) return;
    const status = statusCell.textContent.trim();
    if (status === "מאושר") {
      row.style.backgroundColor = "#d4edda"; // ירוק
    } else if (status === "נדחה") {
      row.style.backgroundColor = "#f8d7da"; // אדום בהיר
    } else {
      row.style.backgroundColor = "#f0f0f0"; // אפור
    }
  });

  // ייצוא לאקסל
  const exportBtn = document.getElementById("exportExcelBtn");
  exportBtn.addEventListener("click", () => {
    const table = document.getElementById("requestTable");
    let csvContent = "";
    for (const row of table.rows) {
      const rowData = [];
      for (const cell of row.cells) {
        rowData.push(cell.innerText.replace(/,/g, ""));
      }
      csvContent += rowData.join(",") + "\n";
    }
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fibernet_dashboard_export.csv";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
});
