// * Conceptos básicos de javascript

// * Variables
var name = "Jefferson";
let lastname = "Cando";

// *Constantes

const PI = 3.1416;
const fullname = "Jefferson Cando"

name = "Stalin"

// console.log(name, lastname, PI, fullname)

//*Tipos de datos.

// * Primitivas

const string = "Hola mundo";
var num = 100;
var boolean = true;
let nullValue = null;
// let undefinedValue= undefined; // No se debe hacer esto 


//*Metodos de los tipos de datos.

//console.log(string.toUpperCase())
//console.log(num.toFixed(5))
//console.log(boolean.valueOf())


//*Lenguaje de tipado dinámico
// let newVariable = "Saludos";
// newVariable = 100;
// console.log(newVariable)
// newVariable = true
// console.log(newVariable)

//Aqui notamos como cambia de tipos de datos, es decir comienza como un string
//luego pasamos a numero y finalmente a boolean y no saltara errores



//* Funciones

function suma(a, b) {
    return a + b
}

const arrowResta = (a, b) =>{
    return a-b;
}

console.log(suma(7, 3))
console.log(arrowResta(7,3))
 //*Arrays

const array = [1,5,9,85]
console.log(array)
console.log(array[2])

//*Objetos

const object = {
    name1 : "Jeff",
    age : 23,
    isStudent : false,
    grades : [10,9,8],
    observation : {
        message : "Good Job",
        succes: {
            status: true,
        }
    }


}

//*Condicionales
if (num<200){
    console.log("Es menor a 200")
}else{
    console.log("Es mayor a 200")
}


