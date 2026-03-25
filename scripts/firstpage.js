// Aspettiamo che il documento sia caricato
document.addEventListener("DOMContentLoaded", function () {
  // Recuperiamo gli elementi dagli ID del tuo HTML
  const checkbox = document.getElementById("check");
  const btn = document.getElementById("btn");
  const alertBox = document.getElementById("alert-checkbox");

  // CONFIGURAZIONE PIOGGIA
  const rainImageUrl = "./assets/images/stefano.png";
  let rainInterval;

  // Funzione per creare un singolo elemento della pioggia
  function createRainDrop() {
    const drop = document.createElement("img");
    drop.src = rainImageUrl;
    drop.classList.add("rain-drop");

    // CORREZIONE: Usiamo 'left' per distribuire le immagini orizzontalmente
    drop.style.left = Math.random() * 100 + "vw";

    // Dimensione casuale leggera per dare profondità
    const size = Math.random() * (35 - 20) + 20;
    drop.style.width = size + "px";

    // Durata dell'animazione casuale (velocità di caduta)
    const duration = Math.random() * (4 - 2) + 2;
    drop.style.animationDuration = duration + "s";

    // Aggiungiamo l'elemento al body
    document.body.appendChild(drop);

    // Rimuoviamo l'elemento dal DOM dopo che l'animazione è finita
    setTimeout(function () {
      drop.remove();
    }, duration * 1000);
  }

  // Funzione per avviare/fermare la pioggia in base alla checkbox
  function toggleRain() {
    if (checkbox.checked) {
      // 1. Avvia la pioggia creando un'immagine ogni 150ms
      createRainDrop();
      rainInterval = setInterval(createRainDrop, 150);

      // 2. LOGICA 5 SECONDI: Stop automatico della generazione
      setTimeout(function () {
        clearInterval(rainInterval);
        console.log("Generazione pioggia terminata dopo 5 secondi");
      }, 5000);
    } else {
      // Se l'utente toglie la spunta manualmente, ferma subito
      clearInterval(rainInterval);
    }
  }

  // Ascolta il cambiamento di stato della checkbox per la pioggia
  checkbox.addEventListener("change", toggleRain);

  // Gestione del click sul bottone
  btn.addEventListener("click", function () {
    if (!checkbox.checked) {
      // Mostra l'alert (fumetto)
      alertBox.classList.add("alert-visible");

      // Nascondilo dopo 3 secondi
      setTimeout(function () {
        alertBox.classList.remove("alert-visible");
      }, 3000);
    } else {
      // Attiva l'effetto ingrandimento e cambia pagina
      btn.classList.add("btn-expand");

      setTimeout(function () {
        window.location.href = "welcome.html";
      }, 500);
    }
  });
});
