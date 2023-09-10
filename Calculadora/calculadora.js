//conectar la hoja de JS asignando constantes a diferentes elementos, esto es por medio de ID asignados, y se conecta al documento HTML

const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular) //esto es para que al boton de la pagina se le escuche el sonido "click" y ejecute la funcion llamada "calcular"

function calcular() {
    const operador = txtOperador.value //se define una nueva constante para darle valor al operador
    const op1 = parseFloat(txtOp1.value)  //se le agrega la parte de parsefloat para convertilos a numeros, ya que tenian valor string por defecto
    const op2 = parseFloat(txtOp2.value)


    if ((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2)) {  //abre if
        let resultado;  //se declara variable a donde ira el resultado de la operacion
        switch (operador) {  //se indica que hara cada operacion
            case "+":
                resultado = op1 + op2
                break; //se pone break a cada punto para evitar bucles infinitos y que se haga la operacion correspondiente 
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }

        pResultado.innerText = "= " + resultado //se hace uso del parrafo vacio creado en html para mostrar el texto impreso dentro de los parentesis en la pag
    } else {
        pResultado.innerText = "Cálculo imposible"
    } //cierra else 
} //cierra calcular