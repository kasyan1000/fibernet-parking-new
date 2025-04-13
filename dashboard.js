
function logout() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
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

  approveButtons.forEach(button => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.style.backgroundColor = "#c6f6d5"; // ירוק בהיר
      row.cells[8].innerText = "מאושר"; // עדכון סטטוס
    });
  });

  rejectButtons.forEach(button => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.style.backgroundColor = "#fed7d7"; // אדום חלש
      row.cells[8].innerText = "נדחה"; // עדכון סטטוס
    });
  });
});
