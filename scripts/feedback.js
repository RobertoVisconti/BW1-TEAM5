const stelle = document.querySelectorAll(".star");
const button = document.getElementById("btn");
const inputCommento = document.getElementById("comment");

let votoSelezionato = 0;

// Star Click
for (let i = 0; i < stelle.length; i++) {
  stelle[i].addEventListener("mouseover", function () {
    illuminaStelle(this.getAttribute("data-value"));
  });

  stelle[i].addEventListener("mouseleave", function () {
    illuminaStelle(votoSelezionato);
  });

  stelle[i].addEventListener("click", function () {
    votoSelezionato = this.getAttribute("data-value");
    console.log("Voto fissato: " + votoSelezionato);
    illuminaStelle(votoSelezionato);
  });
}

// Illumination Star
function illuminaStelle(voto) {
  for (let i = 0; i < stelle.length; i++) {
    if (i < voto) {
      stelle[i].classList.add("active");
    } else {
      stelle[i].classList.remove("active");
    }
  }
}
// Btn click
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

  // Create a local storage
  const archivioFeedback =
    JSON.parse(localStorage.getItem("listaFeedback")) || [];

  const nuovoFeedback = {
    stelle: votoSelezionato,
    testo: commento,
    data: new Date().toLocaleDateString(),
  };

  archivioFeedback.push(nuovoFeedback);

  localStorage.setItem("listaFeedback", JSON.stringify(archivioFeedback));

  console.log("Dati salvati in archivio!");

  window.location.href = "extrapage.html";

  inputCommento.value = "";
  votoSelezionato = 0;
  illuminaStelle(0);
});
