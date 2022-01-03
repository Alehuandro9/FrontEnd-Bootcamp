function isPrime(number) {

    for (let i = 2, raiz = Math.sqrt(number); i <= raiz; i++)
        if (number % i === 0) return false;
    return number > 1;
}

let numerosGenerados = 0;
let arrayPrimos = [];

function primeNumberGenerator(numerosDeseados) {
    let numeroInicial = 2
    while (numerosGenerados < numerosDeseados) {
        if (isPrime(numeroInicial) == true) {
            arrayPrimos.push(numeroInicial);
            numerosGenerados++;
        }
        numeroInicial++;
    }
    console.log(arrayPrimos);
}

primeNumberGenerator(20);


