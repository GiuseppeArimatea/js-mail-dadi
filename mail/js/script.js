// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere,

// stampa un messaggio appropriato


var inserisciEmail = prompt('inserisci un email');
var nomiEmail = ['giuseppearimatea10@gmail.com', 'giuseppearimatea11@gmail.com', 'giuseppearimatea12@gmail.com', 'giuseppearimatea13@gmail.com', 'giuseppearimatea14@gmail.com', 'giuseppearimatea15@gmail.com'];
console.log(nomiEmail);

for (var i = 0; i < nomiEmail.length; i++) {
  if (inserisciEmail == nomiEmail[i] ) {
    console.log(inserisciEmail + 'puoi accedere');
  } else {
    console.log('non puoi accedere')
  }
}
