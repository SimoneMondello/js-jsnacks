let invitati = ["John", "Michael", "Chanel", "Nancy"];
let nuovoInvitato = prompt("Inserisci il tuo nome");

// if con ".includes" per check in lista
if (invitati.includes(nuovoInvitato)) {
    console.log("Sei nella lista, Benvenuto!");
} else {
    console.log("Non sei in lista, non puoi entrare, mi dispiace");
}