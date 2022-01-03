function getRandomArbitrary(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let numero = getRandomArbitrary(100, 0);
let numeroPrueba = document.getElementById("num").value;
let boton = document.getElementById("boton");
let numIntentos = 10;

function isTheSameNumber(numeroPrueba, numero) {
  if (numIntentos <= 10) {
    if (numeroPrueba == numero) {
      alert("Has acertado el numero!")
    } else if(numeroPrueba<numero){
        alert("Numero incorrecto, el numero secreto es mayor. Intentos restantes: " + numIntentos)
      numIntentos--;
    }else{
      alert("Numero incorrecto, el numero secreto es menor. Intentos restantes: " + numIntentos)
      numIntentos--;
    }
  }
}

boton.addEventListener("click", function(){isTheSameNumber(numeroPrueba, numero), console.log(numeroPrueba)})
console.log(numero)