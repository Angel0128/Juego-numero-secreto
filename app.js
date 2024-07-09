let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.');
    } else {
        //si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //recursividad
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return(numeroGenerado);
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto actualizado');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el nuumero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();

