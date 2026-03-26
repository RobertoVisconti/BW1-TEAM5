const results = JSON.parse(localStorage.getItem("quizResults")) || {
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

const rateBtn = document.getElementById("rate-us");
let hasCalculated = false;
let isPassed = false;

rateBtn.addEventListener("click", function () {
  if (!hasCalculated) {
    // --- Obtain Results ---
    const correctPct = (results.correctAnswers / results.totalQuestions) * 100;
    const wrongPct = 100 - correctPct;

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

    // Chart text
    const chartContent = document.querySelector(".chart-center");

    if (isPassed) {
      chartContent.innerHTML =
        "<h3 class='cyan-text'>Congratulations, Trainer/DigiDestined! 🎉</h3>" +
        "<p class='cyan-text'>You defeated the Pokémon League and took down the final Digimon boss without losing a single HP.</p>" +
        "<p class='small-text'>Get ready: you are officially a <strong>Master of the Nerd Multiverse 😎</strong></p>";

      this.innerText = "GIVE A FEEDBACK";
    } else {
      chartContent.innerHTML =
        "<h3 class='magenta-text'>Game Over… 💀</h3>" +
        "<p class='small-text'>You challenged the Pokémon League and got defeated by Prof. Stefano’s team…</p>" +
        "<p class='magenta-text'>made entirely of cats with OP moves</p>" +
        "<p class='small-text'>Prof. Stefano, while petting a cat, whispered: “You’re not ready yet. Try again!!!”</p>";

      this.innerText = "TRY AGAIN";
      this.style.borderColor = "#d21480";
      this.style.color = "#d21480";
    }

    // Upgrade Chart
    const chart = document.querySelector(".donut-chart");
    let currentPercent = 0;

    const interval = setInterval(() => {
      if (currentPercent >= wrongPct) {
        clearInterval(interval);

        // --- AGGIUNTA: Mostra il riepilogo quando l'animazione finisce ---
        renderSummary();
      } else {
        currentPercent += 1;
        chart.style.setProperty("--percent", currentPercent + "%");
      }
    }, 15);

    hasCalculated = true;
  } else {
    // ... (logica dei bottoni feedback/try again)
  }
});

// FUNZIONE PER RENDERIZZARE IL RIEPILOGO
function renderSummary() {
  const resultsContainer = document.getElementById("results-answer");
  const resultsList = document.querySelector(".results-questions");

  // Assicuriamoci che nel JSON ci sia l'array delle risposte (es: results.questionsList)
  // Se il tuo JSON ha una struttura diversa, adatta il nome della proprietà qui sotto
  const questionsData = results.questionsDetail || [];

  resultsList.innerHTML = ""; // Pulisce eventuali residui

  questionsData.forEach((item, index) => {
    const li = document.createElement("li");
    const isCorrect = item.userAnswer === item.correctAnswer;

    li.innerHTML = `
            <div class="summary-item">
                <p class="question-text"><strong>${index + 1}. ${item.question}</strong></p>
                <p>Tua risposta: <span class="${isCorrect ? "cyan-text" : "magenta-text"}">${item.userAnswer}</span></p>
                ${!isCorrect ? `<p>Corretta: <span class="cyan-text">${item.correctAnswer}</span></p>` : ""}
            </div>
            <hr style="border: 0.5px solid #555; margin: 10px 0;">
        `;
    resultsList.appendChild(li);
  });

  // Mostra la sezione con un effetto fade (aggiungendo una classe CSS)
  resultsContainer.classList.add("show-results");
}
