console.log("Vinculando...");
let resultado
 function IdentificarMayorDeEdad()
{
    let edad = prompt("Ingrese su edad : ");
    if (edad>=18){
        resultado=`Es mayor de edad - tienes : <h2>${edad}</h2>`
    }else{
        resultado=`Es menor edad - tienes : <h2> ${edad}</h2>`
    }
    document.getElementById(`lista`).innerHTML = resultado;
}

