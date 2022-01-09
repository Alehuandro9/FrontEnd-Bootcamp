let memoria = [];
let iterador = 0;
let nuevo = true;
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
            if (memoria[iterador - 1] == "+" || memoria[iterador - 1] == "-" || memoria[iterador - 1] == "/" || memoria[iterador - 1] == "*") {
                memoria[iterador - 1] = "" + valor;
                pintarValores(memoria[iterador], true);
                break;
            } else if (memoria[iterador] != "" && memoria[iterador] != undefined) {
                iterador++;
                memoria[iterador] = "" + valor;
                iterador++;
                memoria[iterador] = memoria[iterador - 2]
                nuevo = false;
                pintarValores(memoria[iterador], true);
                break;
            } break;
        case "borrar":
            if (memoria[iterador] != "" && memoria[iterador] != undefined) {
                memoria[iterador] = memoria[iterador].substring(0, memoria[iterador].length - 1);
                pintarValores(memoria[iterador], false);
            }
            break;
        case "signo":
            while (memoria[iterador] != "" && memoria[iterador] != undefined) {
                if (memoria[iterador][0] == "-") {
                    memoria[iterador] = memoria[iterador].substring(1);
                    pintarValores(memoria[iterador], false);
                    break;
                } else {
                    memoria[iterador] = "-" + memoria[iterador];
                    pintarValores(memoria[iterador], false);
                    break;
                }
            }
            break;
        default:
            if (memoria[iterador] == undefined || nuevo == false) {
                memoria[iterador] = valor;
                nuevo = true;
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
    pintarValores(resultado);
    memoria.length = 0
    iterador = 0;
}

for (var i = 0; i < botonesFuncionales.length; i++) {
    botonesFuncionales[i].addEventListener('click', function () { pulsarBoton(this.value) });
}

botonIgual.addEventListener('click', function () { if (memoria.length > 2) { Calcular() } else (pintarValores("0", false)) });