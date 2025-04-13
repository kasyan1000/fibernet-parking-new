
document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#parkingTable tbody");

    let reservations = JSON.parse(localStorage.getItem("reservations") || "[]");

    function updateTable() {
        tableBody.innerHTML = "";
        reservations.forEach((res, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${res.guestName || ""}</td>
                <td>${res.licensePlate || ""}</td>
                <td>${res.visitDate || ""}</td>
                <td>${res.visitStart || ""}</td>
                <td>${res.visitEnd || ""}</td>
                <td>${res.guestPhone || ""}</td>
                <td>${res.employeeEmail || ""}</td>
                <td class="status">${res.status}</td>
                <td>
                    <button class="approve-btn">אשר</button>
                    <button class="reject-btn">דחה</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        document.querySelectorAll(".approve-btn").forEach((btn, i) =>
            btn.onclick = () => changeStatus(i, "מאושר")
        );
        document.querySelectorAll(".reject-btn").forEach((btn, i) =>
            btn.onclick = () => changeStatus(i, "נדחה")
        );
    }

    function changeStatus(index, status) {
        reservations[index].status = status;
        localStorage.setItem("reservations", JSON.stringify(reservations));
        updateTable();
    }

    updateTable();
});
