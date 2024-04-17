function comprobarMayor(){

        let array=[];
    
        for(let i = 0; i < 5; i++){
            let numero = parseInt(prompt(`Ingrese un número :${i + 1}`))
            array.push(numero);
        }

        let mayor = array[0]

        for (let i = 1; i < array.length; i++) {
            if (array[i] > mayor) {
                mayor = array[i];
            }
        }

        document.getElementById("lista").innerHTML=`Número mayor: ${mayor} <br> Lista de números: ${array}`

}