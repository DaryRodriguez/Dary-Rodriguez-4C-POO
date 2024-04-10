console.log("Vinculando...");

function IdentificarTemperatura(){
    let resultado = "";
    let tem = prompt("Ingrese la temperatura : ");
    
    if (tem<0){
        resultado=`Hace frio`
    }
    else if (tem > 0, tem <= 25){
        resultado=`La temperatura es estable`
    }
    else if (tem>25){
        resultado=`Hace calor`
    }
    document.getElementById(`lista`).innerHTML = resultado;
}