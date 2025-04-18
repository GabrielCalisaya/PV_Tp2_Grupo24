const textoDiv = document.getElementById('textoDiv');
const buton = document.getElementById('boton');
const newText = "Una tarde tranquila, mientras el viento jugaba con las hojas de los árboles, un niño descubrió una pequeña caja enterrada en el jardín de su abuela. Al abrirla, encontró cartas antiguas, fotografías descoloridas y un reloj de bolsillo que aún funcionaba. No sabía quiénes eran esas personas, pero sintió una extraña conexión con ellas, como si el pasado quisiera contarle una historia olvidada. Desde ese día, comenzó a visitar el jardín con más frecuencia, esperando encontrar más pistas sobre aquel misterioso tesoro familiar.";

buton.addEventListener('click', function(){
    textoDiv.textContent = newText;
});