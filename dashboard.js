
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/api/reservations")
    .then((response) => response.json())
    .then((reservations) => {
      const tableBody = document.getElementById("reservations-table-body");
      tableBody.innerHTML = "";

      reservations.forEach((res) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${res.guestName}</td>
          <td>${res.carNumber}</td>
          <td>${res.visitDate}</td>
          <td>${res.startTime} - ${res.endTime}</td>
          <td>${res.phone}</td>
          <td>${res.email}</td>
          <td>${res.status}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch((err) => {
      console.error("Failed to fetch reservations:", err);
    });
});
