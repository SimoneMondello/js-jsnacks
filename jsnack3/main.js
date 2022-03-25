    let listaNumeri = [];

    for (let i = 0; i < 10; i++) 
    {
        numerocliente= parseInt(prompt('Inserisci un numero'));
        console.log(numerocliente);
        listaNumeri.push(numerocliente)
    }
    console.log(listaNumeri);

    let sommaNumeri = 0;

    for (let i=0; i < listaNumeri.length; i++)
    {
        sommaNumeri=sommaNumeri + listaNumeri[i++]
    }
     console.log(sommaNumeri);















    
    
