let memoria = [];
let iterador = 0;
let botonesFuncionales = document.getElementsByClassName("botonNumero");
let botonIgual = document.getElementById("resultado");
let pantallaPrincipal = document.getElementById("principal");
let pantallaSecundaria = document.getElementById("enMemoria");

function pulsarBoton(valor) {
    switch (valor) {

        case "C":
            memoria.length = 0
            iterador = 0;
            pintarValores("0", false);
            break;
        case "CE":
            memoria.splice(iterador, 1);
            pintarValores("0", true);
            break;
        case "/":
        case "*":
        case "-":
        case "+":
            iterador++;
            memoria[iterador] = "" + valor;
            iterador++;
            pintarValores("0", true);
            break;
        case "borrar":
            if (memoria[iterador] == "") {
                memoria[iterator] = memoria[iterator].substring(0, memoria[iterator].length - 1);
                pintarValores(memoria[iterador], false);
            }

            break;
        default:
            if (memoria[iterador] == undefined) {
                memoria[iterador] = valor;
            } else {
                memoria[iterador] = '' + memoria[iterador] + valor;
            }
            pintarValores(memoria[iterador], false);
            break;
    }
}

function pintarValores(valorPintar, operador) {
    pantallaPrincipal.innerHTML = valorPintar;

    let total = "";
    if (operador == false) {
        for (var i = 0; i < memoria.length - 1; i++) {
            total = total + " " + memoria[i];
        }
    } else if (operador == true) {
        for (var i = 0; i < memoria.length; i++) {
            total = total + " " + memoria[i];
        }
    }
    pantallaSecundaria.innerHTML = total;
}

function Calcular() {
    let resultado = parseFloat(memoria[0]);
    for (var i = 1; i < memoria.length; i = i + 2) {
        switch (memoria[i]) {
            case "/":
                resultado = resultado / parseFloat(memoria[i + 1]);
                break;
            case "*":
                resultado = resultado * parseFloat(memoria[i + 1]);
                break;
            case "-":
                resultado = resultado - parseFloat(memoria[i + 1]);
                break;
            case "+":
                resultado = resultado + parseFloat(memoria[i + 1]);
                break;
        }
    }
    console.log(resultado);
    pintarValores(resultado);
    memoria.length = 0
    iterador = 0;
}

for (var i = 0; i < botonesFuncionales.length; i++) {
    botonesFuncionales[i].addEventListener('click', function () { pulsarBoton(this.value) });
}

botonIgual.addEventListener('click', function () { if(memoria.length>2){Calcular()}else(pintarValores("0", false)) });