let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let cajaTexto = document.getElementById("texto")

btn1.addEventListener("click", () => {
    cajaTexto.textContent = "JavaScript"
    console.log("Ud seleccionó: JavaScript")
})

btn2.addEventListener("click", () => {
    cajaTexto.textContent = "Python"
    console.log("Ud seleccionó: Python");
})

btn3.addEventListener("click", () => {
    cajaTexto.textContent = "C++"
    console.log("Ud seleccionó: C++");
})