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

// Results
const renderSummary = () => {
  const questionsData = results.questionDetail || [];
  const lang = results.language || "it";

  // Translate
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

  // Show section
  resultsContainer.style.display = "block";
  setTimeout(() => {
    resultsContainer.style.opacity = "1";
    resultsContainer.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

// EVENT LISTENER
rateBtn.addEventListener("click", () => {
  if (!hasCalculated) {
    const total = results.totalQuestions || 1;
    const correctPct = (results.correctAnswers / total) * 100;
    const wrongPct = 100 - correctPct;
    const lang = results.language || "it";

    isPassed = correctPct >= 60;

    // Ui
    document.getElementById("correct-percent").innerText =
      correctPct.toFixed(1) + "%";
    document.getElementById("wrong-percent").innerText =
      wrongPct.toFixed(1) + "%";
    document.getElementById("correct-count").innerText =
      results.correctAnswers + "/" + total + " questions";
    document.getElementById("wrong-count").innerText =
      results.wrongAnswers + "/" + total + " questions";

    // Chart Text
    const chartContent = document.querySelector(".chart-center");

    if (isPassed) {
      if (lang === "en") {
        chartContent.innerHTML =
          "<h3 class='cyan-text'>Congratulations! 🎉</h3>" +
          "<p class='cyan-text'>Master of the Nerd Multiverse 😎</p>";
        rateBtn.innerText = "GIVE A FEEDBACK";
      } else {
        chartContent.innerHTML =
          "<h3 class='cyan-text'>Congratulazioni! 🎉</h3>" +
          "<p class='cyan-text'>Maestro del Multiverso Nerd 😎</p>";
        rateBtn.innerText = "LASCIACI UN FEEDBACK";
      }
    } else {
      if (lang === "en") {
        chartContent.innerHTML =
          "<h3 class='magenta-text'>Game Over… 💀</h3>" +
          "<p class='small-text'>Prof. Stefano: 'Try again!!!'</p>";
        rateBtn.innerText = "TRY AGAIN";
      } else {
        chartContent.innerHTML =
          "<h3 class='magenta-text'>Game Over… 💀</h3>" +
          "<p class='small-text'>Il Prof. Stefano sussurra: 'Riprova!!!'</p>";
        rateBtn.innerText = "RIPROVA";
      }
      rateBtn.style.borderColor = "#d21480";
      rateBtn.style.color = "#d21480";
    }

    // Chart Animation
    const chart = document.querySelector(".donut-chart");
    let currentPercent = 0;
    const targetPercent = Math.floor(wrongPct);

    const interval = setInterval(() => {
      if (currentPercent >= targetPercent) {
        clearInterval(interval);
        renderSummary();
      } else {
        currentPercent += 1;
        chart.style.setProperty("--percent", currentPercent + "%");
      }
    }, 15);

    hasCalculated = true;
  } else {
    // Second Click
    if (isPassed) {
      window.location.href = "feedback.html";
    } else {
      localStorage.removeItem("quizResults");
      window.location.href = "questions.html";
    }
  }
});
