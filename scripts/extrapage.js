const container = document.querySelector("footer div");
const tuttiIFeedback = JSON.parse(localStorage.getItem("listaFeedback")) || [];

container.innerHTML = "";

for (let i = 0; i < tuttiIFeedback.length; i++) {
  const fb = tuttiIFeedback[i];
  const boxFeedback = document.createElement("div");

  boxFeedback.className = "span-domanda";
  boxFeedback.style.marginBottom = "20px";
  boxFeedback.style.display = "block";

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
