import { mostrarTexto, newText } from './funcion18.js';

const textoDiv = document.getElementById('textoDiv');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    mostrarTexto(textoDiv, newText);
});