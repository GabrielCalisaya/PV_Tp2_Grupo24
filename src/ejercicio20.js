//ejercicio 20 js

// Importamos los paises del modulo que creadoo
import { paisesCapitales } from './PaisesEj20.js';

// Función que se ejecuta cuando el DOM ya cargó.
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos referencias a los elementos select del DOM
    const selectPaises = document.getElementById('paises');
    const selectCapitales = document.getElementById('capitales');
    
    // Agregamos un listener para el evento 'change' en la lista de países
    selectPaises.addEventListener('change', (event) => {
        // Obtenemos el país seleccionado
        const paisSeleccionado = event.target.value;
        
        
        if (paisSeleccionado) {
            // Obtenemos la capital correspondiente usando el objeto paisesCapitales
            const capitalCorrespondiente = paisesCapitales[paisSeleccionado];
            
            // Establecemos el valor seleccionado en la lista de capitales
            selectCapitales.value = capitalCorrespondiente;
            
            // mENsajito por consola
            console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capitalCorrespondiente}`);
        } else {
            // Si nose selecciono nada
            selectCapitales.value = '';
            console.log('No seleccionaste nada, volve a intentarlo señor/a');
        }
    });
    
    
    // permite la selección de capitales
    selectCapitales.addEventListener('change', (event) => {
        const capitalSeleccionada = event.target.value;
        
        // Si seleccionaste una capital, buscamos su pais.
        if (capitalSeleccionada) {
            // almacenamos la variable paisCorrespondiente
            let paisCorrespondiente = '';
            
            // Recorremos para encontrar la capital
            for (const pais in paisesCapitales) {
                if (paisesCapitales[pais] === capitalSeleccionada) {
                    paisCorrespondiente = pais;
                    break;  // Salimos del bucle una vez encontrado
                }
            }
            
            // Si encontramos un país correspondiente
            if (paisCorrespondiente) {
                // Actualizamos el select de países
                selectPaises.value = paisCorrespondiente;
                console.log(`Capital seleccionada: ${capitalSeleccionada}, País: ${paisCorrespondiente}`);
            } else {
                console.log(`Capital seleccionada: ${capitalSeleccionada}, no se encontró país correspondiente`);
            }
        } else {
            console.log('No seleccionaste ninguna capial, intentalo otra vez por favor estimado/a usuario/a');
        }
    });
});

