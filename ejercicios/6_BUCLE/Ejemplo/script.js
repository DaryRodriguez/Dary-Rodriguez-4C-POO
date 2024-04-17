function contarWhile(){
    let contador=20;
    let array=[];
    while (contador >=10){
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML=`Numeros del 20 al 10 con While: \n ${array}`
}

function contarFor(){
    let array=[];

    for(let i = 20; i >=10; i--){
        array.push(i)

    }
    document.getElementById("lista").innerHTML=`Numeros del 20 al 10 con For: \n ${array}`
}
