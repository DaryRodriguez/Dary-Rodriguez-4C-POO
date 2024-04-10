console.log("Vinculando...");
let resultado
 function IdentificarMayor()
{
    let num1 = prompt("Ingrese un numero : ");
    let num2 = prompt("Ingrese otro numero : ");
    if (num1>num2){
        resultado=`el numero mayor es : <h2>${num1}</h2>`
    }else{
        resultado=`el numero mayor es : <h2> ${num2}</h2>`
    }
    document.getElementById(`lista`).innerHTML = resultado;
}