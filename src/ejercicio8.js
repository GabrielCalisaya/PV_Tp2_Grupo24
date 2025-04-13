function calcularMayor(num1, num2){
    if (num1 > num2){
        alert (`El numero ${num1} es mayor que ${num2}`);
    } else if (num1 < num2){
        alert (`El numero ${num2} es mayor que ${num1}`);
    } else {
        alert("Los numeros son iguales");
    }
}
calcularMayor (5, 5);
calcularMayor (10, 20);
calcularMayor (5, 15);