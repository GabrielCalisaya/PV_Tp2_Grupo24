// 6. Crear un array denominado edades con al menos 8 edades distintas. 
// Recorrer el array y obtener el promedio de las edades del array.

let edades = [21, 4, 25, 65, 43, 40, 60, 54]; 
let suma = 0; 
let cantidad = edades.length; // cantidad de edades en el array

// recorrido y suma de edades
for (let i = 0; i < cantidad; i++) {
    suma += edades[i];
}
//promedio de edades
let promedio = suma / cantidad;

// mostrar el promedio 
console.log("El promedio de las edades es: " + promedio);

