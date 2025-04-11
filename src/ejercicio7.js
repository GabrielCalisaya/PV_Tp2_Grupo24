let nombres = ["Gabriel", "Juanse", "Fernando", "Juan", "Natalia", "Tomas", "Esperanza"];
let nombreLargo = "";

 for (let i = 0; i < nombres.length;i++){
    if (nombres[i].length > nombreLargo.length){
        nombreLargo = nombres[i];
    }
 }
console.log(nombreLargo);