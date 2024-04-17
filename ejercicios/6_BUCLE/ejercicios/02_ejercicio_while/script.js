function SumarWhile(){
    let contador = 1;
    let suma = 0;
    let array = [];

    while (contador <= 10){
        suma += contador;
        array.push(contador);
        contador++;
        
        
        
    }
    document.getElementById("lista").innerHTML=`Los elementos son : <br> ${array.join("+")}<br> La suma total es: ${suma}`
}


