// 1. Recupero i dati dalla pagina del questionario ( per il momento c'è una prova)
const results = JSON.parse(localStorage.getItem("quizResults")) || {
  totalQuestions: 10,
  correctAnswers: 3,
  wrongAnswers: 7,
};

const rateBtn = document.getElementById("rate-us");
let hasCalculated = false; // "Interruttore" per capire se abbiamo già cliccato
let isPassed = false; // Memoria per il risultato del test

rateBtn.addEventListener("click", function () {
  if (!hasCalculated) {
    // --- PRIMO CLICK: CALCOLA E MOSTRA I RISULTATI ---

    const correctPct = (results.correctAnswers / results.totalQuestions) * 100;
    const wrongPct = 100 - correctPct;

    // Calcolo se il test è superato
    isPassed = correctPct >= 60;

    const correctPercentEl = document.getElementById("correct-percent");
    const wrongPercentEl = document.getElementById("wrong-percent");

    correctPercentEl.innerText = correctPct.toFixed(1) + "%";
    correctPercentEl.className = "percent cyan-text";

    wrongPercentEl.innerText = wrongPct.toFixed(1) + "%";
    wrongPercentEl.className = "percent magenta-text";

    document.getElementById("correct-count").innerText =
      results.correctAnswers + "/" + results.totalQuestions + " questions";
    document.getElementById("wrong-count").innerText =
      results.wrongAnswers + "/" + results.totalQuestions + " questions";

    // Testo centrale della ciambella
    const chartContent = document.querySelector(".chart-center");

    if (isPassed) {
      // In caso di superamento
      chartContent.innerHTML =
        "<h3 class='cyan-text'>Congratulations, Trainer/DigiDestined! 🎉</h3>" +
        "<p class='cyan-text'>You defeated the Pokémon League and took down the final Digimon boss without losing a single HP.</p>" +
        "<p class='small-text'>Get ready: you are officially a <strong>Master of the Nerd Multiverse 😎</strong></p>";

      this.innerText = "GIVE A FEEDBACK";
    } else {
      // In caso di fallimento ( Prof. Stefano con i suoi gatti ha vinto ancora)
      chartContent.innerHTML =
        "<h3 class='magenta-text'>Game Over… 💀</h3>" +
        "<p class='small-text'>You challenged the Pokémon League and got defeated by Prof. Stefano’s team…</p>" +
        "<p class='magenta-text'>made entirely of cats with OP moves</p>" +
        "<p class='small-text'>Prof. Stefano, while petting a cat, whispered: “You’re not ready yet. Try again!!!”</p>";

      this.innerText = "TRY AGAIN";
      this.style.borderColor = "#d21480";
      this.style.color = "#d21480";
    }

    // Aggiornamento della ciambella
    chartContent.classList.add("show-content");
    const chart = document.getElementById("donut-chart");
    chart.style.background =
      "conic-gradient(#d21480 0% " +
      wrongPct +
      "%, #00ffff " +
      wrongPct +
      "% 100%)";

    hasCalculated = true;
  } else {
    // --- SECONDO CLICK: REINDIRIZZAMENTO ---
    if (isPassed) {
      window.location.href = "feedback.html";
    } else {
      // resetto e reindirizzo alla pagina dei quiz
      localStorage.removeItem("quizResults");
      window.location.href = "questions.html";
    }
  }
});
