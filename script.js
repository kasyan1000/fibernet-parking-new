
let guestCount = 1;

function addGuest() {
  if (guestCount >= 3) {
    document.getElementById('limitMessage').classList.remove('hidden');
    return;
  }
  const container = document.getElementById("guestFormsContainer");
  const newForm = container.firstElementChild.cloneNode(true);
  newForm.querySelectorAll("input").forEach(input => input.value = "");
  container.appendChild(newForm);
  guestCount++;
  if (guestCount >= 3) {
    document.getElementById('limitMessage').classList.remove('hidden');
  }
}
