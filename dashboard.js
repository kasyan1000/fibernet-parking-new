
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

  // צביעת השורות לפי סטטוס
  rows.forEach(row => {
    const statusCell = row.querySelector(".status-cell");
    if (!statusCell) return;
    const status = statusCell.textContent.trim();
    if (status === "מאושר") {
      row.style.backgroundColor = "#d4edda"; // ירוק בהיר
    } else if (status === "נדחה") {
      row.style.backgroundColor = "#f8d7da"; // אדום בהיר
    } else {
      row.style.backgroundColor = "#f0f0f0"; // אפור בהיר
    }
  });
});
