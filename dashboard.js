
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
});
