let boton = document.getElementById("btn");
let obtBody = document.body;
let colores = ["red", "purple", "blue", "lightblue", "yellow", "orange", "whitesmoke", "green", "lightgreen"];
let indiceColor = 0;
let contador = 0;

boton.addEventListener("click", () => {
    obtBody.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
    contador = contador + 1
    console.log("COLOR CAMBIADO")
    console.log ("NRO DE CAMBIOS: " + contador)
})

