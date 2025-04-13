
document.getElementById("addVisitorBtn").addEventListener("click", function () {
  const visitorBlocks = document.querySelectorAll(".visitor-entry");
  if (visitorBlocks.length >= 3) {
    document.getElementById("limitNote").classList.remove("hidden");
    return;
  }

  const clone = visitorBlocks[0].cloneNode(true);
  clone.querySelectorAll("input").forEach((input) => (input.value = ""));
  document.getElementById("reservationForm").insertBefore(clone, document.querySelector(".note"));
});
