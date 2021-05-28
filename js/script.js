/* Gioco dei dadi: generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

var player = Math.floor(Math.random()*6) + 1;
console.log(player);

var computer = Math.floor(Math.random()*6) + 1;
console.log(computer);

var result = 'player wins';

if (player < computer) {
    result = 'computers wins';    
} else if (player == computer) {
    result = 'both win';
} 

console.log(result);
