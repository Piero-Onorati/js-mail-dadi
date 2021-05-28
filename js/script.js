/* Gioco dei dadi: generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

var player = Math.floor(Math.random()*6) + 1;
document.getElementById('player-number').innerHTML = player;

var computer = Math.floor(Math.random()*6) + 1;
document.getElementById('computer-number').innerHTML = computer;

var result = 'both win';

if (player < computer) {
    result = 'computer wins';
    document.getElementById('computer-result').innerHTML = result;    
} else if (player > computer) {
    result = 'player wins';
    document.getElementById('player-result').innerHTML = result;
}