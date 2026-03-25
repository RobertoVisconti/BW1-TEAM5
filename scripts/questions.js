// timer







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

const language = document.getElementById("language")

const questionText = document.getElementById("question")

const answersDiv = document.getElementById("answers")

const remainingQuestions = document.getElementById("questions-left")

const customAlert = document.getElementById("customAlert")

const nextQuestionButton = document.getElementById("nextQuestion")

const buttons = [...answersDiv.querySelectorAll("button")]

let  currentQuestion = 1

let score = 0 

const resultsArray = []

let answerIsSelected = false;

let selectedAnswer = null; 

buttons.forEach((button) => button.addEventListener("click", function(e) {        // add event listeners to the buttons
    answerIsSelected = true;
    selectedAnswer = e.target.innerText;
    customAlert.style.display = "none";        // alert hidden
}))

language.addEventListener("click", function() {
    // toggle language
})

const finishQuiz = function() {
    // redirect to result page
}

const reloadTimer = function() {
    // reload timer
}

const updateScore = function(selectedAnswer, index) {
    
    if (selectedAnswer === questionsArray[index].rightAnswer) {

        score ++

        resultsArray.push("correct")

    } else {

        resultsArray.push("wrong")

    }
}

const getNextQuestion = function(n) {

    console.log(answerIsSelected)
    console.log(selectedAnswer)
    console.log(resultsArray)
    console.log(score)

    answerIsSelected = false

    selectedAnswer = null;

    if (n <= questionsArray.length) {

        questionText.innerText = questionsArray[n].text         //update question
           
        for (let i = 0; i < buttons.length; i++) {              // update answers
            buttons[i].innerText = questionsArray[n].answers[i]
        }

        remainingQuestions.innerHTML = `${currentQuestion}/${questionsArray.length}` // update remaining questions index

    } else {

        finishQuiz()

    }

    reloadTimer()
}


const skip = document.getElementById("skipQuestion")     // alert button for skipping current question
skip.addEventListener("click", function() {
    customAlert.style.display = "none"
    resultsArray.push("wrong")
    currentQuestion++
    getNextQuestion(currentQuestion)
})

const resume = document.getElementById("resumeQuestion")        //alert button for resuming current question       
resume.addEventListener("click", function() {
    customAlert.style.display = "none"
})


nextQuestionButton.addEventListener("click", function() {       // add event listener to next question button
    if (answerIsSelected) {
        updateScore(selectedAnswer, currentQuestion)
        currentQuestion++
        getNextQuestion(currentQuestion)
    } else {
        customAlert.style.display = "block"
    }
})


getNextQuestion(currentQuestion);



