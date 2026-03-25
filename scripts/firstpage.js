document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("check");
  const btn = document.getElementById("btn");
  const alertBox = document.getElementById("alert-checkbox");

  // btn click
  btn.addEventListener("click", function () {
    // checkbox
    if (!checkbox.checked) {
      // alert
      alertBox.classList.add("alert-visible");

      // Nascondilo dopo 3 secondi
      setTimeout(function () {
        alertBox.classList.remove("alert-visible");
      }, 3000);
    } else {
      // Se la checkbox è spuntata, attiva l'effetto e cambia pagina

      // effetto ingrandimento
      btn.classList.add("btn-expand");

      // time animation
      setTimeout(function () {
        window.location.href = "welcome.html";
      }, 500);
    }
  });
});
