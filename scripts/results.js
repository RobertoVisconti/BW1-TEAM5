const results = JSON.parse(localStorage.getItem("quizResults")) || {
  totalQuestions: 10,
  correctAnswers: 7,
  wrongAnswers: 3,
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

    // Funzione per l'animazione di riempimento
    const interval = setInterval(() => {
      if (currentPercent >= wrongPct) {
        clearInterval(interval);
      } else {
        currentPercent += 1; // Velocità dell'animazione
        chart.style.setProperty("--percent", currentPercent + "%");
      }
    }, 15); // Fluidità in millisecondi

    hasCalculated = true;
  } else {
    if (isPassed) {
      window.location.href = "feedback.html";
    } else {
      localStorage.removeItem("quizResults");
      window.location.href = "questions.html";
    }
  }
});
