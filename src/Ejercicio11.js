const ConsumoCombustible = () =>{
    let Kilometros = parseInt(prompt("Ingresar la cantidad de kilometros recorridos"));
    let Combustible = parseInt(prompt("Ingresar la cantidad de combustible utilizado en litros"));

    let Resultado = Kilometros/Combustible;

    console.log("La cantidad de combustible requerido por KM es: "+ Resultado.toFixed(2)+" Litros");
}
ConsumoCombustible();
