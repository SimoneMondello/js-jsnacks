let lista = [];


for (i=0; i<6; i++){
    let numero = parseInt(prompt('inserisci numero'));
    if (numero % 2 != 0) {
        lista.push(numero);
    }
}

console.log(lista);