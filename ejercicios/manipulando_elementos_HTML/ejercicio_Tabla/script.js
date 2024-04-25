function traerTablas(){
   let num = parseInt(document.getElementById("inputText").value);
   alert(num);     
 for (let i = 1; i <= 10; i++) {
    resultado= num*i
    lista.innerHTML = <ol>${num} x ${i} = ${resultado}
                  </ol>
  }
}