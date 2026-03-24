// 1. Selezioniamo gli elementi basandoci sui TUOI ID nell'HTML
const stelle = document.querySelectorAll(".star");
const button = document.getElementById("btn");
const inputCommento = document.getElementById("comment");

// Variabile "globale" per salvare il voto
let votoSelezionato = 0;

// 2. Ciclo FOR per aggiungere il click a ogni stella
for (let i = 0; i < stelle.length; i++) {
  // Effetto Hover (Opzionale: illumina quando passi il mouse)
  stelle[i].addEventListener("mouseover", function () {
    illuminaStelle(this.getAttribute("data-value"));
  });

  // Quando il mouse esce, torna al voto fissato
  stelle[i].addEventListener("mouseleave", function () {
    illuminaStelle(votoSelezionato);
  });

  // Click per fissare il voto
  stelle[i].addEventListener("click", function () {
    votoSelezionato = this.getAttribute("data-value");
    console.log("Voto fissato: " + votoSelezionato);
    illuminaStelle(votoSelezionato);
  });
}

// 3. Funzione per accendere le stelle
function illuminaStelle(voto) {
  for (let i = 0; i < stelle.length; i++) {
    // Se l'indice è minore del voto, aggiungi 'active'
    if (i < voto) {
      stelle[i].classList.add("active");
    } else {
      stelle[i].classList.remove("active");
    }
  }
}
// Gestione del Bottone
button.addEventListener("click", function (e) {
  e.preventDefault();

  const commento = inputCommento.value.trim();

  if (votoSelezionato === 0) {
    alert("Per favore, seleziona una valutazione prima di inviare!");
    return;
  }

  if (commento === "") {
    alert("Il campo commento non può essere vuoto!");
    return;
  }

  // --- LOGICA DI SALVATAGGIO ---

  // Recupero i feedback già esistenti o creo un array vuoto se è il primo
  const archivioFeedback =
    JSON.parse(localStorage.getItem("listaFeedback")) || [];

  // Creo il nuovo oggetto feedback
  const nuovoFeedback = {
    stelle: votoSelezionato,
    testo: commento,
    data: new Date().toLocaleDateString(), // Aggiungiamo anche la data per bellezza
  };

  // Aggiungo il nuovo feedback alla lista
  archivioFeedback.push(nuovoFeedback);

  //Salvo la lista aggiornata nel localStorage
  localStorage.setItem("listaFeedback", JSON.stringify(archivioFeedback));

  // --- FINE SALVATAGGIO ---

  console.log("Dati salvati in archivio!");

  // Reindirizzamento
  window.location.href = "extrapage.html";

  // Reset del form (anche se cambiamo pagina, è buona norma)
  inputCommento.value = "";
  votoSelezionato = 0;
  illuminaStelle(0);
});
