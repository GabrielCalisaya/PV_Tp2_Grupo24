function inicializarEjercicio22() {
    const ingresoTexto = document.getElementById('ingresoTexto');
    const salidaTexto = document.getElementById('salidaTexto');

    function actualizarTexto() {
        salidaTexto.textContent = ingresoTexto.value;
        if (ingresoTexto.value.length > 20) {
            salidaTexto.classList.add('cambiar-fondo');
        } else {
            salidaTexto.classList.remove('cambiar-fondo');
        }
    }

    ingresoTexto.addEventListener('input', actualizarTexto);
}

export { inicializarEjercicio22 };