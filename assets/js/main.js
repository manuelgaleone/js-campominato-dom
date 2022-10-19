/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

Attenzione:
**nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

//Seleziono gli elementi dalla DOM
let startButton = document.querySelector('.startButton');

let gridElement = document.querySelector('.grid');

let grid_level = 100;

let cells = Math.sqrt(grid_level);

//Genero la Griglia
generazioneGriglia(startButton, gridElement, grid_level, cells);

//Funzione di generazione
function generazioneGriglia(trigEl, wrapEl, max, per_row) {

    //Aggiungo click del pulsante
    trigEl.addEventListener('click', function () {

    //Reset griglia
    wrapEl.innerHTML = ''

    //Ciclo di ripetizione
    for (let i = 1; i <= max; i++) {

    let markupEl = generazioneCelle(i, per_row, 'div', 'cell')
      
    wrapEl.insertAdjacentElement('beforeend', markupEl)

    markupEl.addEventListener('click', function () {
        
    //Cambio colore - classe
    this.classList.toggle('active')
    
    //Numero interno alla cella
    console.log(this.innerText);

    if (isBomb(i, bombe)) {
      console.log("Bomba presa");
      this.style.backgroundcolor = "red";
      this.innerText = "Bomba";
      wrapEl.innerHTML = "Partita finita" + tentativi + "punti"
    } else {
      console.log("Salvo");
      tentativi++;
    }

    if (tentativi == max - 16) {
      console.log("Hai vinto " + tentativi + "punti!")
      wrapEl.innerHTML = "Hai vinto" + tentativi + "punti!"
    }

    })
   }
 })
}

//Funzione di generazione celle
function generazioneCelle(number, cells, tag, classe) {
  
  let markupEl = document.createElement(tag)
  markupEl.className = classe
  markupEl.innerText = number

  // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
  markupEl.style.width = `calc(100% / ${cells})`

  return markupEl
}

let tentativi = 0;

//Generazione bombe
let bombe = generatebombe(min, max)

function generatebombe(min, max) {
  let bombe = []
  while (bombe.length !== 16) {

    let bomb = generazioneNumeri(min, max);

    if (!bombe.includes(bomb)) {
      
      bombe.push(bomb)
    }
  }
  return bombe
}

//Funzione numeri casuali
function generazioneNumeri(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Funzione di bomba
function isBomb(numb, lista) {
  if (lista.includes(numb)) {
    return true
  } 
    return false
}

/*

//Seleziono il bottone dalla DOM
let startButton = document.getElementById("startButton");
//let annullaButton = document.querySelector(".annullaButton");
let container = document.querySelector(".container");

//Creo i quadratini
let maxSquare = 100; 

startButton.addEventListener("click", function() {
    
    squareGenerator(maxSquare, container);
    
});

//Creo la funzione che mi genera i quadratini nella DOM
function squareGenerator(maxSquare, squarePlace) {
    
    for (let i = 1; i < maxSquare + 1; i++) {

        let square = `<div id="squareDiv" class="square"><span class="indexNumber">${i}</span></div>`;
        squarePlace.innerHTML += square;
        
    }
    
}

//Creo la funzione di Click
let squareList = document.querySelectorAll("square");
console.log(squareList[1])
/* //Elimino i quadratini
annullaButton.addEventListener("click", function() {
    
    squareRemover(container);
    
});

//Creo la funzione di reset DOM
function squareRemover(squarePlace) {

    squarePlace.classList.add("none");

} 

*/