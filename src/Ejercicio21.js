import { mostrarTexto } from './funcion21.js';
const ingresoTexto = document.getElementById('textoIngresado');
const salidaTexto = document.getElementById('textoDiv');

ingresoTexto.addEventListener('input', () => {
    //salidaTexto.textContent = ingresoTexto.value;
    mostrarTexto(salidaTexto,ingresoTexto);
})