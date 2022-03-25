const sceltagiocatore1 = prompt("Inserisci parola 1");
const sceltagiocatore2 = prompt("Inserisci parola 2");

//sceltagiocatore1 = sceltagiocatore1.length;
//sceltagiocatore2 = sceltagiocatore2.length;

if (sceltagiocatore1.length > sceltagiocatore2.length ){
    console.log("la parole più corta è:" + sceltagiocatore2);
    console.log("la parole più corta è:" + sceltagiocatore1);
} else {
    console.log("la parole più corta è:" + sceltagiocatore1);
    console.log("la parole più corta è:" + sceltagiocatore2);
}