let contador = 0;
let indiceColor = 0;

export const cambiarColorFondo = (elementoBody) =>{ 
    let colores = ["red", "purple", "blue", "lightblue", "yellow", "orange", "whitesmoke", "green", "lightgreen"];
    
    
    

    elementoBody.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
    contador = contador + 1;
    console.log(  "\nCOLOR CAMBIADO \nNRO DE CAMBIOS: " + contador);  
    
    
};

