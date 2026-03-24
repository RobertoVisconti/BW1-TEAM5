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

const questionText = document.getElementById("question")

const answersDiv = document.getElementById("answers")

const storeResult = function() {
    
}

const getNextQuestion = function() {

}

const nextQuestionButton = document.getElementById("nextQuestion")

nextQuestionButton.addEventListener("click", function() {
    storeResult()
    getNextQuestion()
})



// TIMER

