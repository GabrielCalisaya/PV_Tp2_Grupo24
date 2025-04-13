const CalcularPromedio = () => {
// Solicitar al usuario tres números
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

// Calcular el promedio
let promedio = (num1 + num2 + num3) / 3;

// Mostrar el resultado
console.log("El promedio de los tres números es: " + promedio);
}

CalcularPromedio();
