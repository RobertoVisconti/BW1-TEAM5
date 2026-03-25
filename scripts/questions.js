
//main functionalities

const questionsArray = [
  {
    text: "Chi è il protagonista principale dell’anime di Pokémon?",
    answers: ["Brock", "Ash Ketchum", "Gary Oak", "Tracey Sketchit"],
    rightAnswer: "Ash Ketchum"
  },
  {
    text: "Qual è il Pokémon iniziale di tipo Fuoco nella prima generazione?",
    answers: ["Charmander", "Vulpix", "Growlithe", "Flareon"],
    rightAnswer: "Charmander"
  },
  {
    text: "Come si chiama il professore che consegna il primo Pokémon ad Ash?",
    answers: ["Professor Elm", "Professor Birch", "Professor Oak", "Professor Rowan"],
    rightAnswer: "Professor Oak"
  },
  {
    text: "Qual è il tipo di Mewtwo?",
    answers: ["Psico", "Buio", "Spettro", "Drago"],
    rightAnswer: "Psico"
  },
  {
    text: "Qual è l’evoluzione finale di Charmander?",
    answers: ["Charmeleon", "Charizard", "Magmar", "Blaziken"],
    rightAnswer: "Charizard"
  },
  {
    text: "Come si chiama il protagonista principale di Digimon Adventure?",
    answers: ["Matt Ishida", "Tai Kamiya", "Joe Kido", "T.K. Takaishi"],
    rightAnswer: "Tai Kamiya"
  },
  {
    text: "Qual è il nome del Digimon partner di Tai?",
    answers: ["Gabumon", "Patamon", "Agumon", "Tentomon"],
    rightAnswer: "Agumon"
  },
  {
    text: "In Digimon, come si chiama il processo di evoluzione?",
    answers: ["Trasformazione", "Evoluzione", "Digievoluzione", "Metamorfosi"],
    rightAnswer: "Digievoluzione"
  },
  {
    text: "Qual è il nome del mondo in cui vivono i Digimon?",
    answers: ["Cyber World", "DigiWorld", "Digital World", "Net Realm"],
    rightAnswer: "Digital World"
  },
  {
    text: "Chi è il principale antagonista nella prima stagione?",
    answers: ["Devimon", "Myotismon", "Apocalymon", "Etemon"],
    rightAnswer: "Apocalymon"
  },
  {
    text: "Quale tra Pokémon e Digimon utilizza le Poké Ball per catturare creature?",
    answers: ["Digimon", "Entrambi", "Pokémon", "Nessuno"],
    rightAnswer: "Pokémon"
  },
  {
    text: "Quale serie presenta creature che parlano più spesso il linguaggio umano?",
    answers: ["Pokémon", "Digimon", "Entrambi allo stesso modo", "Nessuna delle due"],
    rightAnswer: "Digimon"
  },
  {
    text: "In quale serie le creature evolvono temporaneamente durante le battaglie?",
    answers: ["Digimon", "Pokémon", "Entrambi", "Nessuna"],
    rightAnswer: "Digimon"
  },
  {
    text: "In quale serie gli allenatori catturano e collezionano creature?",
    answers: ["Digimon", "Entrambi", "Pokémon", "Nessuna"],
    rightAnswer: "Pokémon"
  },
  {
    text: "Quale serie è nata prima (come franchise)?",
    answers: ["Digimon", "Pokémon", "Entrambe nello stesso anno", "Nessuna delle due"],
    rightAnswer: "Pokémon"
  }
];

const englishQuestionsArray = [
  {
    text: "Who is the main protagonist of the Pokémon anime?",
    answers: ["Brock", "Ash Ketchum", "Gary Oak", "Tracey Sketchit"],
    rightAnswer: "Ash Ketchum"
  },
  {
    text: "Which is the Fire-type starter Pokémon in the first generation?",
    answers: ["Charmander", "Vulpix", "Growlithe", "Flareon"],
    rightAnswer: "Charmander"
  },
  {
    text: "What is the name of the professor who gives Ash his first Pokémon?",
    answers: ["Professor Elm", "Professor Birch", "Professor Oak", "Professor Rowan"],
    rightAnswer: "Professor Oak"
  },
  {
    text: "What type is Mewtwo?",
    answers: ["Psychic", "Dark", "Ghost", "Dragon"],
    rightAnswer: "Psychic"
  },
  {
    text: "What is the final evolution of Charmander?",
    answers: ["Charmeleon", "Charizard", "Magmar", "Blaziken"],
    rightAnswer: "Charizard"
  },
  {
    text: "Who is the main protagonist of Digimon Adventure?",
    answers: ["Matt Ishida", "Tai Kamiya", "Joe Kido", "T.K. Takaishi"],
    rightAnswer: "Tai Kamiya"
  },
  {
    text: "What is the name of Tai's partner Digimon?",
    answers: ["Gabumon", "Patamon", "Agumon", "Tentomon"],
    rightAnswer: "Agumon"
  },
  {
    text: "In Digimon, what is the evolution process called?",
    answers: ["Transformation", "Evolution", "Digivolution", "Metamorphosis"],
    rightAnswer: "Digivolution"
  },
  {
    text: "What is the name of the world where Digimon live?",
    answers: ["Cyber World", "DigiWorld", "Digital World", "Net Realm"],
    rightAnswer: "Digital World"
  },
  {
    text: "Who is the main antagonist in the first season?",
    answers: ["Devimon", "Myotismon", "Apocalymon", "Etemon"],
    rightAnswer: "Apocalymon"
  },
  {
    text: "Which series uses Poké Balls to capture creatures?",
    answers: ["Digimon", "Both", "Pokémon", "Neither"],
    rightAnswer: "Pokémon"
  },
  {
    text: "Which series features creatures that speak human language more often?",
    answers: ["Pokémon", "Digimon", "Both equally", "Neither"],
    rightAnswer: "Digimon"
  },
  {
    text: "In which series do creatures evolve temporarily during battles?",
    answers: ["Digimon", "Pokémon", "Both", "Neither"],
    rightAnswer: "Digimon"
  },
  {
    text: "In which series do trainers capture and collect creatures?",
    answers: ["Digimon", "Both", "Pokémon", "Neither"],
    rightAnswer: "Pokémon"
  },
  {
    text: "Which series was created first (as a franchise)?",
    answers: ["Digimon", "Pokémon", "Both in the same year", "Neither"],
    rightAnswer: "Pokémon"
  }
];

let currentLang = "it"

const questions = {
    it: questionsArray,
    en: englishQuestionsArray
}

const language = document.getElementById("language")

const questionText = document.getElementById("question")

const answersDiv = document.getElementById("answers")

const remainingQuestions = document.getElementById("questions-left")

const customAlert = document.getElementById("customAlert")

if (currentLang === "en") {
    customAlert.innerHTML = `<p>Are you sure you want to leave this question unanswered? You won't score any points.</p>
          <button id="skipQuestion">Skip</button>
          <button id="resumeQuestion">Resume</button>`
    } else if (currentLang === "it") {
        customAlert.innerHTML = `<p>Sei sicuro di voler lasciare questa domanda senza risposta? Non otterrai alcun punteggio.</p>
          <button id="skipQuestion">Lascia</button>
          <button id="resumeQuestion">Riprendi</button>`
    }

const nextQuestionButton = document.getElementById("nextQuestion")

const buttons = [...answersDiv.querySelectorAll("button")]

let  currentQuestion = 0

let correctAnswers = 0 

let wrongAnswers = 0

const resultsArray = []

let answerIsSelected = false;

let selectedAnswer = null; 

const finalResults = {

}

const changeLanguage = function(index) {

    if (currentLang === "it") {

        currentLang = "en"
        language.innerHTML = `<span class="fi fi-gb"></span>`
        
        questionText.innerText = questions[currentLang][index].text  // translate question

        for (let i = 0; i < buttons.length; i++) {         // translate answers
            buttons[i].innerText = questions[currentLang][index].answers[i]
        }

    } else if (currentLang === "en") {

        currentLang = "it"
        language.innerHTML = `<span class="fi fi-it"></span>`

        questionText.innerText = questions[currentLang][index].text // translate question

        for (let i = 0; i < buttons.length; i++) {       //translate answers
            buttons[i].innerText = questions[currentLang][index].answers[i]
        }

    }
}

language.addEventListener("click", function() {
    changeLanguage(currentQuestion)
})

const finishQuiz = function() {
   alert(resultsArray)
}

const updateScore = function(selectedAnswer, index) {
    
    if (selectedAnswer === questions[currentLang][index].rightAnswer) {

        correctAnswers ++

        let answerData = {
            text : questions[currentLang][index].text,
            selected: selectedAnswer, 
            result: "correct",
            correct: questions[currentLang][index].rightAnswer,
            score: 1
        }

        console.log(answerData)
        resultsArray.push(answerData)

    } else if (!selectedAnswer) {

        wrongAnswers++
        
        let answerData = {
            text : questions[currentLang][index].text,
            selected: null, 
            result: "wrong",
            correct: questions[currentLang][index].rightAnswer,
            score: 0
        }

        console.log(answerData)
        resultsArray.push(answerData)
        

    } else {

        wrongAnswers++

        let answerData = {
            text : questions[currentLang][index].text,
            selected: selectedAnswer, 
            result: "wrong",
            correct: questions[currentLang][index].rightAnswer,
            score: 0
        }

        console.log(answerData)
        resultsArray.push(answerData)

    }

}

const getNextQuestion = function(n) {

    answerIsSelected = false

    selectedAnswer = null;

    const currentSet = questions[currentLang]

    if (n < currentSet.length) {

        questionText.innerText = currentSet[n].text         //update question
           
        for (let i = 0; i < buttons.length; i++) {              // update answers
            buttons[i].innerText = currentSet[n].answers[i]
        }

        buttons.forEach((button) => button.addEventListener("focus", function(e) {        // add event listeners to the buttons
            answerIsSelected = true;
            selectedAnswer = e.target.innerText;
            console.log(answerIsSelected)
            console.log(selectedAnswer)
            customAlert.style.display = "none";        // alert hidden
        }))

        buttons.forEach((button) => button.addEventListener("focusout", function(e) {
            answerIsSelected = false;
            selectedAnswer = null;
            console.log(answerIsSelected)
            console.log(selectedAnswer)
        }))

        startTimer();

        remainingQuestions.innerHTML = `${currentQuestion+1}/${currentSet.length}` // update remaining questions index


    } else {

        finishQuiz()

    }
}

nextQuestionButton.addEventListener("click", function() {       // add event listener to next question button

    if (answerIsSelected) {
        updateScore(selectedAnswer, currentQuestion)
        currentQuestion++
        getNextQuestion(currentQuestion)
    } else {
        if (currentLang === "en") {
            customAlert.innerHTML = `<p>Are you sure you want to leave this question unanswered? You won't score any points.</p>
          <button id="skipQuestion">Skip</button>
          <button id="resumeQuestion">Resume</button>`
        } else if (currentLang === "it") {
        customAlert.innerHTML = `<p>Sei sicuro di voler lasciare questa domanda senza risposta? Non otterrai alcun punteggio.</p>
          <button id="skipQuestion">Lascia</button>
          <button id="resumeQuestion">Riprendi</button>`
        }   

    customAlert.style.display = "block"

    const skip = document.getElementById("skipQuestion")     // alert button for skipping current question
    skip.addEventListener("click", function() {
        customAlert.style.display = "none"
        updateScore(selectedAnswer, currentQuestion)
        currentQuestion++
        getNextQuestion(currentQuestion)
    })

    const resume = document.getElementById("resumeQuestion")        //alert button for resuming current question       
    resume.addEventListener("click", function() {
        customAlert.style.display = "none"
    })

    }

})

// TIMER

const FULL_DASH_ARRAY = 282.743;
const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;

// 1. Sposta la variabile qui fuori (inizialmente vuota)
let timerInterval; 

const timerText = document.getElementById("timer-text");
const progressRing = document.getElementById("progress-ring");

function setCircleDashoffset() {
  const dashOffset = FULL_DASH_ARRAY * (1 - timePassed / TIME_LIMIT);
  progressRing.style.strokeDashoffset = dashOffset;
}

function startTimer() {
  // 2. FERMA assolutamente ogni timer attivo prima di iniziarne uno nuovo
  clearInterval(timerInterval); 

  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerText.textContent = timeLeft;
  progressRing.style.strokeDashoffset = 0;

  // 3. Assegna il nuovo intervallo alla variabile globale
  timerInterval = setInterval(() => {
    timePassed++;
    timeLeft = TIME_LIMIT - timePassed;
    timerText.textContent = timeLeft;

    setCircleDashoffset();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      updateScore(selectedAnswer, currentQuestion);
      currentQuestion++;
      getNextQuestion(currentQuestion);
    }
  }, 1000);
}


getNextQuestion(currentQuestion)



