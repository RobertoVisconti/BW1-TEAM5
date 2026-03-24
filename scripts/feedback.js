// 1. Selezioniamo gli elementi basandoci sui TUOI ID nell'HTML
const stelle = document.querySelectorAll('.star');
const button = document.getElementById('btn');
const inputCommento = document.getElementById('comment');

// Variabile "globale" per salvare il voto
let votoSelezionato = 0;

// 2. Ciclo FOR per aggiungere il click a ogni stella
for (let i = 0; i < stelle.length; i++) {
    
    // Effetto Hover (Opzionale: illumina quando passi il mouse)
    stelle[i].addEventListener('mouseover', function() {
        illuminaStelle(this.getAttribute('data-value'));
    });

    // Quando il mouse esce, torna al voto fissato
    stelle[i].addEventListener('mouseleave', function() {
        illuminaStelle(votoSelezionato);
    });

    // Click per fissare il voto
    stelle[i].addEventListener('click', function() {
        votoSelezionato = this.getAttribute('data-value');
        console.log("Voto fissato: " + votoSelezionato);
        illuminaStelle(votoSelezionato);
    });
}

// 3. Funzione per accendere le stelle
function illuminaStelle(voto) {
    for (let i = 0; i < stelle.length; i++) {
        // Se l'indice è minore del voto, aggiungi 'active'
        if (i < voto) {
            stelle[i].classList.add('active');
        } else {
            stelle[i].classList.remove('active');
        }
    }
}

// 4. Gestione del Bottone
button.addEventListener('click', function(e) {
    // Impedisce alla pagina di ricaricarsi (essendo un type="submit")
    e.preventDefault();
    
    const commento = inputCommento.value.trim(); // .trim() toglie spazi vuoti inutili
    
    if (votoSelezionato === 0) {
        alert("Per favore, seleziona una valutazione prima di inviare!");
        return;
    }

    if (commento === "") {
        alert("Il campo commento non può essere vuoto!");
        return;
    }

    // Se tutto è ok
    console.log("INVIO DATI:");
    console.log("Stelle: " + votoSelezionato);
    console.log("Commento: " + commento);
    
    window.location.href = "extrapage.html"
    //svuota il form dopo l'invio
    inputCommento.value = "";
    votoSelezionato = 0;
    illuminaStelle(0);
});