function searchTable() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#requestTable tbody tr");

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    const matches = Array.from(cells).some(td =>
      td.textContent.toLowerCase().includes(input)
    );
    row.style.display = matches ? "" : "none";
  });
}
