
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
});
