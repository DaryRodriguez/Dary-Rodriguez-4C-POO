function paresWhile(){
    let contador=0;
    let array=[];
    while (contador <=20 ){
        array.push(contador);
        contador+=2;
    }
    document.getElementById("lista").innerHTML=`Primeros pares con While: \n ${array}`
}

