const container = document.querySelector("footer div");
// Recupero tutto l'array
const tuttiIFeedback = JSON.parse(localStorage.getItem("listaFeedback")) || [];

container.innerHTML = ""; // Pulisco il testo di prova

for (let i = 0; i < tuttiIFeedback.length; i++) {
  const fb = tuttiIFeedback[i];
  const boxFeedback = document.createElement("div");

  // Usiamo la tua classe CSS del box
  boxFeedback.className = "span-domanda";
  boxFeedback.style.marginBottom = "20px";
  boxFeedback.style.display = "block";

  // Costruiamo il contenuto del box
  const stelleGrafiche = "Voto: " + fb.stelle + "/10";

  boxFeedback.innerHTML =
    "<div class='box-feedback'>" +
    "<h2>" +
    stelleGrafiche +
    "</h2>" +
    "<p>" +
    fb.testo +
    "</p>" +
    "<p>" +
    fb.data +
    "</p>";
  +"</div>";

  container.appendChild(boxFeedback);
}
