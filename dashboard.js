
document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/api/reservations")
        .then(response => response.json())
        .then(data => renderTable(data));

    document.getElementById("logoutBtn").addEventListener("click", function () {
        window.location.href = "index.html";
    });

    document.getElementById("searchInput").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const rows = document.querySelectorAll("#reservationTable tbody tr");
        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(query) ? "" : "none";
        });
    });
});

function renderTable(data) {
    const tbody = document.querySelector("#reservationTable tbody");
    tbody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.guestName}</td>
            <td>${item.carNumber}</td>
            <td>${item.visitDate}</td>
            <td>${item.startTime} - ${item.endTime}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td class="${item.status === "approved" ? "approved" : item.status === "rejected" ? "rejected" : ""}">${item.status}</td>
        `;
        tbody.appendChild(row);
    });
}
