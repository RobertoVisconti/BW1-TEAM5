const results = JSON.parse(localStorage.getItem("quizResults")) || {
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  questionDetail: [],
  language: currentLang,
};

const rateBtn = document.getElementById("rate-us");
const resultsContainer = document.getElementById("results-answer");
const resultsList = document.querySelector(".results-questions");

let hasCalculated = false;
let isPassed = false;

// --- FUNZIONE RENDERING DETTAGLI ---
const renderSummary = () => {
  const questionsData = results.questionDetail || [];
  const lang = results.language || "it";

  const labels = {
    it: {
      user: "Tua risposta: ",
      correct: "Corretta: ",
      none: "Nessuna risposta",
    },
    en: { user: "Your answer: ", correct: "Correct: ", none: "No answer" },
  };

  resultsList.innerHTML = "";

  questionsData.forEach((item, index) => {
    const li = document.createElement("li");
    const isCorrect = item.result === "correct";
    const colorClass = isCorrect ? "cyan-text" : "magenta-text";
    const userAns = item.selected ? item.selected : labels[lang].none;

    let htmlContent =
      "<div class='summary-item'>" +
      "<p class='question-text'><strong>" +
      (index + 1) +
      ". " +
      item.text +
      "</strong></p>" +
      "<p>" +
      labels[lang].user +
      "<span class='" +
      colorClass +
      "'>" +
      userAns +
      "</span></p>";

    if (!isCorrect) {
      htmlContent +=
        "<p>" +
        labels[lang].correct +
        "<span class='cyan-text'>" +
        item.correct +
        "</span></p>";
    }

    htmlContent +=
      "</div><hr style='border: 0.5px solid #555; margin: 10px 0;'>";

    li.innerHTML = htmlContent;
    resultsList.appendChild(li);
  });

  resultsContainer.style.display = "block";

  // Ho ridotto leggermente il delay a 3000ms (3 secondi) perché 5 sembravano troppi,
  // ma puoi rimettere 5000 se preferisci un'attesa più lunga.
  setTimeout(() => {
    resultsContainer.style.opacity = "1";
    resultsContainer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 3000);
};

// --- FUNZIONE DI CALCOLO AUTOMATICO ---
const calculateResults = () => {
  if (hasCalculated) return;

  const total = results.totalQuestions || 1;
  const correctPct = (results.correctAnswers / total) * 100;
  const wrongPct = 100 - correctPct;
  const lang = results.language || "it";

  isPassed = correctPct >= 60;

  // Aggiornamento UI testi percentuali
  document.getElementById("correct-percent").innerText =
    correctPct.toFixed(1) + "%";
  document.getElementById("wrong-percent").innerText =
    wrongPct.toFixed(1) + "%";
  document.getElementById("correct-count").innerText =
    results.correctAnswers + "/" + total + " questions";
  document.getElementById("wrong-count").innerText =
    results.wrongAnswers + "/" + total + " questions";

  const chartContent = document.querySelector(".chart-center");

  // Logica testi in base al risultato
  if (isPassed) {
    if (lang === "en") {
      chartContent.innerHTML =
        "<h3 class='cyan-text'>Congratulations, Trainer/DigiDestined! 🎉</h3>" +
        "<p class='cyan-text'>You defeated the Pokémon League and took down the final Digimon boss without losing a single HP.</p>" +
        "<p class='small-text'>Get ready: you are officially a <strong>Master of the Nerd Multiverse 😎</strong></p>";
      rateBtn.innerText = "GIVE A FEEDBACK";
    } else {
      chartContent.innerHTML =
        "<h3 class='cyan-text'>Congratulazioni, Allenatore/Digiprescelto!</h3>" +
        "<p class='cyan-text'>Hai battuto la Lega Pokémon e il boss finale dei Digimon senza perdere nemmeno un punto vita (HP).</p>" +
        "<p class='small-text'>Preparati: ora sei ufficialmente un <strong>Maestro del Multiverso Nerd</strong></p>";
      rateBtn.innerText = "LASCIACI UN FEEDBACK";
    }
  } else {
    if (lang === "en") {
      chartContent.innerHTML =
        "<h3 class='magenta-text'>Game Over… 💀</h3>" +
        "<p>You challenged the Pokémon League and got defeated by Prof. Stefano’s team…</p>" +
        "<p class='magenta-text'>made entirely of cats with OP moves</p>" +
        "<p class='small-text italic'>Prof. Stefano, while petting a cat, whispered: “You’re not ready yet. Try again!!!”</p>";
      rateBtn.innerText = "TRY AGAIN";
    } else {
      chartContent.innerHTML =
        "<h3 class='magenta-text'>Fine del gioco…</h3>" +
        "<p>Hai sfidato la Lega Pokémon e la squadra del Professor Stefano ti ha battuto…</p>" +
        "<p class='magenta-text'>era una squadra fatta solo di gatti con mosse fortissime</p>" +
        "<p class='small-text italic'>Il Professor Stefano, mentre accarezzava un gatto, ha sussurrato: “Non sei ancora pronto. Riprova!!!”</p>";
      rateBtn.innerText = "RIPROVA";
    }
    rateBtn.style.borderColor = "#d21480";
    rateBtn.style.color = "#d21480";
  }

  // Animazione del grafico
  const chart = document.querySelector(".donut-chart");
  let currentPercent = 0;
  const targetPercent = Math.floor(wrongPct);

  const interval = setInterval(() => {
    if (currentPercent >= targetPercent) {
      clearInterval(interval);
      renderSummary(); // Mostra la lista risposte dopo il grafico
    } else {
      currentPercent += 1;
      chart.style.setProperty("--percent", currentPercent + "%");
    }
  }, 15);

  hasCalculated = true;
};

// --- ATTIVAZIONE AL CARICAMENTO ---
window.addEventListener("DOMContentLoaded", calculateResults);

// --- GESTIONE CLICK SUL BOTTONE (SOLO NAVIGAZIONE) ---
rateBtn.addEventListener("click", () => {
  if (isPassed) {
    window.location.href = "feedback.html";
  } else {
    localStorage.removeItem("quizResults");
    window.location.href = "questions.html";
  }
});
