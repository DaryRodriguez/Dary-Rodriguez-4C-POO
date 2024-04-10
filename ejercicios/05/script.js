function identificarPuntaje(){
    let puntuacion= parseInt(prompt("Ingrese su puntuacion: "))
    let resultado=""

   if (puntuacion>=90){
     resultado=`Excelente`
   }
   else if(puntuacion >=70 && puntuacion<=89){
     resultado=`Buen trabajo`
   }
   else if(puntuacion<70){
    resultado=`Necesitas mejorar`
   }
   document.getElementById("lista").innerHTML = resultado;
}