let allReservations = [];

function renderReservations(data) {
  const tableBody = document.getElementById("reservations-table-body");
  tableBody.innerHTML = "";

  data.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.guestName}</td>
      <td>${res.carNumber}</td>
      <td>${res.visitDate}</td>
      <td>${res.startTime} - ${res.endTime}</td>
      <td>${res.phone}</td>
      <td>${res.email}</td>
      <td>
        ${res.status}
        ${res.status === "pending" ? `
          <button onclick="updateStatus('${res._id}', 'approved')">אישור</button>
          <button onclick="updateStatus('${res._id}', 'rejected')">דחייה</button>
        ` : ""}
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function updateStatus(id, status) {
  fetch(`http://localhost:5000/api/reservations/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  })
  .then(res => res.json())
  .then(() => loadReservations())
  .catch(err => console.error("Status update failed", err));
}

function filterReservations() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filtered = allReservations.filter(res =>
    res.guestName.toLowerCase().includes(search) ||
    res.carNumber.toLowerCase().includes(search) ||
    res.visitDate.includes(search) ||
    res.status.toLowerCase().includes(search)
  );
  renderReservations(filtered);
}

function loadReservations() {
  fetch("http://localhost:5000/api/reservations")
    .then(res => res.json())
    .then(data => {
      allReservations = data;
      renderReservations(data);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadReservations();
  document.getElementById("searchInput").addEventListener("input", filterReservations);
});