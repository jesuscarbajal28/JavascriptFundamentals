let edad = 25;          //usar si el valor puede cambiar
const nombre = "Jesús"; //usar siempre que sea posible
var ciudad = "Méxco";   //var ya casi no se usa, lo vigente actualmente es usar let

// TIPOS DE DATOS
let nombre1 = "Nasya";  //string
let edad1 = 30;         //numero
let vivo = true;        //boolean
let nada = null;        //null
let indefinido;         //undefined

//Operadores
10 + 5 //15
10 - 5 //5
10 * 5 //50
10 / 2 //5
10 % 3 //1 (residuo de una división)
2 ** 3 //8 (potencia)

//Comparación
5 == "5"    // true (compara solo valor)
5 === "5"   // false (compara valor y tipo)
10 != "10"  // false
10 !== "10" // true
7 > 5       // true
7 <= 7      // true

//Lógicos
true && false // false (AND)
true || false // true  (OR)
!true         // false (NOT)

//Estructuras de control
//if/else
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//else/if
let hora = 15;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

//switch
let dia = "lunes";
switch(dia) {
  case "lunes":
    console.log("Ánimo, inicio de semana");
    break;
  case "viernes":
    console.log("Ya casi es fin de semana");
    break;
  default:
    console.log("Día normal");
}

//bucles
//for
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}

//while
let i = 0;
while (i < 3) {
  console.log("Hola", i);
  i++;
}

//do while --- Se ejecuta al menos una vez
let j = 0;
do {
  console.log("Se ejecuta al menos una vez", j);
  j++;
} while (j < 2);

//Funciones
//Declaración
function saludar(nombre) {
  return "Hola " + nombre;
}
console.log(saludar("Jesús"));

//función flecha
const saludar1 = (nombre) => {
  return `Hola ${nombre}`;
};
console.log(saludar1("Nasya"));

//Valores por defecto
function sumar(a = 0, b = 0) {
  return a + b;
}
console.log(sumar(5, 2)); // 7

//Alcance
let global = "Estoy fuera";

function prueba() {
  let local = "Estoy dentro";
  console.log(global); // ok
  console.log(local);  // ok
}

console.log(global); // ok
//console.log(local);  // ❌ error
