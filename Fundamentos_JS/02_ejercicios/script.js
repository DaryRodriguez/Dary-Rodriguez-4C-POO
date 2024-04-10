console.log("Vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function calcularEdad() {
    let ahora =2024
    let fecha_nac=2006
    resultado_edad=2024-2006
  alert(`Mi edad es : ${resultado_edad}`);

    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'
    function asignarValores() {
     // Tu código aquí
     let var1=2
     let var2=var1

     alert(`El valor de var 2 es : ${var2}`);
    
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1' y 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {    
    // Tu código aquí
    let num1=4
    let num2=5
    let num3=6
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;

    alert(`La suma es : ${suma} \n la resta es : ${resta} \n la multiplicacion es : ${multiplicacion} \n la division es ${division} `);


   }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.(.length)
    function manipularCadenas() {
        let direccion = "San Simon , Gran Av";
        let n_casa = 502;
        let mensaje = `Mi direccion es: ${direccion} ${n_casa}`;
        let longitud = mensaje.length;
        alert(`La longitud del mensaje es:${mensaje.length()} \nCaracter antepenultimo : ${mensale[mensaje.length-3]}`); 
        
      }
       // Ejercicio 5: Suma de indices -->
    function Sumar_indices(){
      valor =[1,2,3,4,5,6,7];
      ultiValor=valor[valor.length -1];
      penultiValor=valor[valor.length -2];
      primerValor=valor[0];
       suma= ultiValor + penultiValor + primerValor;
        alert(`El resultado es : ${suma}`); 
}
