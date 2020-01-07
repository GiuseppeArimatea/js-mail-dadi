// Gioco dei dadi, chi fa di più vince

var giocatoreUno = parseInt(prompt('inserisci un numero da 1 a 10'));
var giocatoreDue = Math.floor(Math.random() * 9) + 1;

  if (giocatoreUno > giocatoreDue) {
    console.log('ha vinto giocatore uno');
  }
  else if (giocatoreDue > giocatoreUno) {
    console.log('ha vinto giocatore due');
  } else {
    console.log('parità');
  }
