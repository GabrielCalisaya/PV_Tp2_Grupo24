export const mostrarDatos = () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector("#libreta").value;
    alert(`los datos ingresados son:\nNombre: ${nombre} \nApellido: ${apellido} \nLibreta Universitaria: ${libreta}`);
    //console.log ("los datos ingresados son: \n"+"Nombre: "+nombre+"\n"+"Apellido: "+apellido+"\n"+"Libreta Universitari: "+libreta+"" );

    }