
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const reservation = {};

        formData.forEach((value, key) => {
            reservation[key] = value;
        });

        // שמירת ההזמנה ב-localStorage
        let reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
        reservations.push({ ...reservation, status: "ממתין" });
        localStorage.setItem("reservations", JSON.stringify(reservations));

        alert("הבקשה נשלחה בהצלחה!");
        form.reset();
    });
});
