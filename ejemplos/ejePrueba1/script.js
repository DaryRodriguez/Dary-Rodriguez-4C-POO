/*Recibir un arreglo numerico con numeros negativos y positivos.
 Todos los valores negativos reemplazarlos por 0 */ 
function noNegativo(){
let array=[];
let n=parseInt(prompt("Ingrese la canidad de números a trabajar: "))
  for (let i=0;i<n;i++){
    let num = parseInt(prompt("Ingrese numero positivo o negativo: "))
    array.push(num)
  }
  let original=[...array];
  for (let i=0 ; i<n;i++){
  if (array[i]<0){
    array[i]=0;
  }
}

document.getElementById("elementos").innerHTML=`Array original ${original.join(",")} <br>La array modificada es ${arr}<br>`
};
