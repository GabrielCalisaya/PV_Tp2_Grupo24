import { cambiarColorFondo } from "./funcionesEjercicio24.js";

let boton = document.getElementById("btn");
let obtBody = document.body;


boton.addEventListener("click", () => {
    cambiarColorFondo(obtBody);
})

