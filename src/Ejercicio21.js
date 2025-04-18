const ingresoTexto = document.getElementById('textoIngresado');
const salidaTexto = document.getElementById('textoDiv');

ingresoTexto.addEventListener('input', function () {
    salidaTexto.textContent = ingresoTexto.value;
})