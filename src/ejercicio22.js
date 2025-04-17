const ingresoTexto = document.getElementById('ingresoTexto');
const salidaTexto = document.getElementById('salidaTexto');

ingresoTexto.addEventListener('input', function () {
    salidaTexto.textContent = ingresoTexto.value;

    if (ingresoTexto.value.length > 20) {
        salidaTexto.classList.add('cambiar-fondo');
    } else {
        salidaTexto.classList.remove('cambiar-fondo');
    }
});