
export const configurarBoton = (botonID, textoMostrar, mensajeConsola, elementoTexto) =>{
    const boton = document.getElementById(botonID);

    if (botonID) {
        boton.addEventListener("click", () => {
            elementoTexto.textContent = textoMostrar;
            console.log(mensajeConsola);
        });
    } else {
        console.error(`No se encontró el botón con ID: ${botonId}`);
}
}