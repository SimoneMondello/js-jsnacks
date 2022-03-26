/*
let x = parseInt(prompt('inserisci'));

console.log(x);


let esponenziale = numeroEsponenziale(x);
console.log(esponenziale);

function numeroEsponenziale(x)
{

    return Math.pow(x,3)
}


*/

let x = parseInt(prompt('inserisci'));

console.log(x);

let esponenziale = numeroEsponenziale(x);


function numeroEsponenziale(x)
{
    let cubo=0;

    for (let i=0; i < x; i++) 
    {
        cubo = Math.pow(i,3)
        console.log(cubo)
    }

    return (cubo);
}




