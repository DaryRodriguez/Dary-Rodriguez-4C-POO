function calificaciones(){

    let suma=0;

    for(let i = 0; i <= 5; i++){
        let calificación = parseFloat(prompt(`Ingrese una calificación ${i}:`))
        suma+=calificaciones
    }

    let promedio=suma / 5;
    

    document.getElementById("lista").innerHTML=`El promedo final es : ${promedio.toFixed(2)} `

}