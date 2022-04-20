
/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, 
ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:


Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

const pizzas = [
    {
        id: 1,
        nombre: "Muzza1",
        ingredientes: ["salsa", "queso muzzarela"],
        precio: 500
    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["Jamon", "queso muzzarela, morrones"],
        precio: 580
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["salsa", "queso muzzarela","tomates"],
        precio: 700
    },
    {
        id: 4,
        nombre: "4 quesos",
        ingredientes: ["salsa", "queso muzzarela","queso azul", "parmesano", "provolone"],
        precio: 900
    },
    {
        id: 5,
        nombre: "hawaiana",
        ingredientes: ["salsa", "queso muzzarela", "jamon", "anana"],
        precio: 1100
    },
    {
        id: 6,
        nombre: "Huevo y Panceta",
        ingredientes: ["salsa", "queso muzzarela", "huevo", "panceta"],
        precio: 600
    },
]


/* a) Las pizzas que tengan un id impar.*/

function pizzaImpar(pizzas) {
    for (let index = 0; index < pizzas.length; index++) {
        if ((pizzas[index].id) % 2 !== 0  ) {
            console.log("Yo la pizza "+pizzas[index].nombre+" tengo id impar");
        }
    }
} 
/* pizzaImpar(pizzas); */
/* b) ¿Hay alguna pizza que valga menos de $600? */

function pizzaBarat(pizzas) {
    for (let index = 0; index < pizzas.length; index++) {
        if (pizzas[index].precio < 600) {
            console.log("Yo la pizza "+pizzas[index].nombre+" valgo menos de 600$");
        }
    }
}
/* pizzaBarat(pizzas); */

/* c) Los nombres de todos las pizzas. */

function nombreDeTodasLasPizzas(pizzas) {
    for (let index = 0; index < pizzas.length; index++) {
        console.log("Yo soy la pizza "+pizzas[index].nombre)
    }
}
/* nombreDeTodasLasPizzas(pizzas) */

/* d) Los precios de las pizzas. */

function listaDePrecios(pizzas) {
    for (let index = 0; index < pizzas.length; index++) {
        console.log("id: "+pizzas[index].id+ ", precio: "+pizzas[index].precio+"$")
    }
}
listaDePrecios(pizzas)

/* e) El nombre de cada pizza con su respectivo precio. */
function nombreDeTodasLasPizzasConPrecio(pizzas) {
    for (let index = 0; index < pizzas.length; index++) {
        console.log("Yo soy la pizza "+pizzas[index].nombre+" y valgo "+pizzas[index].precio+"$")
    }
}
/* nombreDeTodasLasPizzasConPrecio(pizzas) */