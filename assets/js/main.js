/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

- Ogni cella ha un numero progressivo, da 1 a 100.

- Ci saranno quindi 10 caselle per ognuna delle 10 righe.

- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

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