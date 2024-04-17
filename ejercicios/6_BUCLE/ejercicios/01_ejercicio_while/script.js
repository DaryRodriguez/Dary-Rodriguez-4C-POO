function contarWhile(){
    let contador=0;
    let array=[];
    while (contador <=100){
        array.push(contador);
        contador +=5;
    }
    document.getElementById("lista").innerHTML=`Numeros del 0 al 100 con While: \n ${array}`
}