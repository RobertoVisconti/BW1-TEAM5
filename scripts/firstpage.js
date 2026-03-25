// Aspettiamo che il documento sia caricato
document.addEventListener("DOMContentLoaded", function () {
  // Recuperiamo gli elementi dagli ID del tuo HTML
  const checkbox = document.getElementById("check");
  const btn = document.getElementById("btn");
  const alertBox = document.getElementById("alert-checkbox");

  // Funzione che gestisce il click sul bottone
  btn.addEventListener("click", function () {
    // Se la checkbox NON è spuntata
    if (!checkbox.checked) {
      // Mostra l'alert (fumetto)
      alertBox.classList.add("alert-visible");

      // Nascondilo dopo 3 secondi
      setTimeout(function () {
        alertBox.classList.remove("alert-visible");
      }, 3000);
    } else {
      // Se la checkbox è spuntata, attiva l'effetto e cambia pagina

      // Aggiunge l'effetto ingrandimento (classe definita nel CSS)
      btn.classList.add("btn-expand");

      // Aspetta 500ms per far finire l'animazione e poi cambia pagina
      setTimeout(function () {
        // Sostituisci con il nome del tuo file HTML di destinazione
        window.location.href = "welcome.html";
      }, 500);
    }
  });
});
