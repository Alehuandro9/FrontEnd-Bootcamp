let memoriaSeleccion = [""];
let memoriaIterator = 0;
let botonesFuncionales = document.getElementsByClassName("botonNumero");
let botonIgual = document.getElementById("resultado");

function pulsarBoton(valor) {
    switch (valor) {

        case "C":
            memoriaSeleccion.length=0
            memoriaSeleccion = [""]
            break;
        case "CE":
        
            break;

        case "division":
        case "multip":
        case "resta":
        case "suma":
            memoriaIterator++;
            memoriaSeleccion[memoriaIterator] = ""+valor;
            memoriaIterator++;
            memoriaSeleccion[memoriaIterator] = ""
            break;
        default:
            memoriaSeleccion[memoriaIterator] = ""+memoriaSeleccion[memoriaIterator] + valor;
            console.log(memoriaSeleccion)
            break;
    }
}

function Calcular(memoriaSeleccion) {
    console.log(memoriaSeleccion[0])
}

for (var i = 0; i < botonesFuncionales.length; i++) {
    botonesFuncionales[i].addEventListener('click', function () { pulsarBoton(this.value) });
}

botonIgual.addEventListener('click', function (){console.log(memoriaSeleccion) });