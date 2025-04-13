const MostrarArreglo = () =>{
    const array = [];
    for(let i = 0; i< 3; i++ ){
        let entrada = parseInt(prompt("Ingresa números para el arreglo: "));
        if (!isNaN(entrada))
            array.push(entrada);
        else{
            alert("valor no valido")
            i--;
        }
        }
        console.log(array);
    for (let i = 0; i < array.length; i++){
        console.log("Posicion: "+ i + " " + array[i]);
}
}
MostrarArreglo();