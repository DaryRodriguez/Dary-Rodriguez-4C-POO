function comprobarPares(){
    let numero = parseInt(prompt(`Ingrese un número : `));
    let numerosPares=[];       

    for (let i = 2; numerosPares.length < numero; i+=2) {
           numerosPares.push(i)
    }
        

    document.getElementById("lista").innerHTML=`Dentro de : ${numero} numeros <br> hay estos pares : ${numerosPares}`

}