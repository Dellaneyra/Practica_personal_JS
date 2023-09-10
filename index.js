var miVariable = 26;

// se puede imprimir de la siguiente manera console.log("mi edad es " + miVariable);

miVariable = 12;
// otra impresion: console.log("Le cambie el valor a miVariable y ahora es: " + miVariable);

const miConstante = 3;
//console.log("el valor de mi constante es " + miConstante)

//OPERACION ARITMETICA CON VARIABLES
var op1 = 2
var op2 = 3
var resultado = op1 + op2;
//console.log("resultado vale: " + resultado);

//CONDICIONALES
let miNumero = 6
let miNombre = "Della"

//let resultadoPregunta = miNumero == 6; //darle un valor a una variable preguntando por el valor de otra variable
//console.log(resultadoPregunta); //devuelve boolean

/*if (miNumero == 6) {
    console.log("Si, mi numero vale 6")
} else {
    console.log("No, mi numero no vale 6")
}*/

let miNumero2 = .2
if (miNumero2 > 0) {
    console.log("Mi numero es positivo");
} else if (miNumero2 === 0) {
    console.log("Mi numeto es zero");
} else {
    console.log("Mi numero es negativo")
}

//BUCLES

//let contador = 0
//while (contador < 5) {
//    console.log(contador);
//    contador = contador + 1;
//}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*for (let i = 10000; i >= 0; i--) {
    console.log(i);
}*/

//FUNCIONES 

/*function saludar() {    //entre parentesis se pone el valor, como no tiene alguno se dejo en blanco
    console.log("hola");  //se le indica que imprimir al llamada a la funcion
}
saludar(); //se llama a la funcion saludar, sin necesidad de un console.log*/


function saludar(nombre) {    //entre parentesis se pone el valor
    console.log("hola, mi nombre es: " + nombre);  //se le indica que imprimir al llamada a la funcion
}
saludar("Chencho"); //se llama a la funcion saludar, sin necesidad de un console.log, sustituyendo nombre por otro valor



function saludar(nombre, edad) {    //entre parentesis se pone el valor, puede ser mas de uno
    console.log("hola, mi nombre es: " + nombre);  //se le indica que imprimir al llamada a la funcion
    console.log("y mi edad es: " + edad); //impresion de segundo Valor
}
saludar("Pistachito", 1); //se llama a la funcion saludar, sin necesidad de un console.log, sustituyendo nombre por otro valor


//FUNCIONES CON RETURN
function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return resultado;   //las funciones con return no se ven en pantalla, solo se almacenan
}

let recibir = multiplicar(2, 5); //se le asigna una variable al resulado de num1*num2 y se le da valor a los numeros
console.log(recibir); //llama al resultado de la funcion completa 
//console.log(multiplicar(2,5));  //esta es otra manera de ver el resultado


//ARREGLOS O ARRAYS (listas que contienen muchas cosas)
let miArreglo = ["David", "Fernando", "Kevin", "Carla"] //sus valores comienzan en 0 y pueden tener distintos tipos de datos (string, boolean, etc)
//console.log(miArreglo);   //esta es una manera sencilla de imprimir el arreglo
for (let i = 0; i < 4; i++) {
    console.log("Accediendo al indice: " + i) //para mostrar donde va el contador
    let mostrar = miArreglo[i]; //lo que esta dentro de los corchetes es para indicar el donde acceder al lista
    console.log(mostrar);
};


//OBJETOS
/*let miObjeto = {   //los objetos utilizan llaves y valores
    miLlave : "mi valor",  // el nombre y el valor
}*/ // se pueden mezclar los tipos de objetos

let persona1 = {
    nombre: "Della",
    edad: 26,
    femenino: true
};

//persona1.comidaFavorita = "Sushi" //cundo se le pone un punto despues de de una variable es para agregar un nuevo elemento a la lista
//console.log(persona1.nombre); //Esta opcion se utiliza para solo imprimir un objeto de la lista
//persona1.nombre = "Dellaneyra";  //Esta opcion es para cambiar un valor del objeto


let persona2 = {
    nombre: "Raul",
    edad: 24,
    femenino: false
};

//console.log(persona1, persona2)    //para imprimir en un solo renglon 
console.log(persona1)
console.log(persona2)



//SE PUEDE CREAR UN ARRAY CON OBJETOS
let arregloDeObjetos = [persona1, persona2]
console.log(arregloDeObjetos)




