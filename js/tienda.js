alert("¡Bienvenido a la tienda de Panambí!")
var sizePot = prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños 10, 12, 14 y 16")
var maceta = parseInt(sizePot, 10)
while (maceta != 10 && maceta != 12 && maceta != 14 && maceta != 16) {
    maceta = prompt("Por favor, elige en uno de los tamaños disponibles: 10, 12, 14 o 16")
}
console.log(maceta)
var precio = 0
if (maceta == 10) {
    precio = 450
} else if (maceta == 12) {
    precio = 650
} else if (maceta == 14) {
    precio = 800
} else {
    precio = 1000
}
console.log(precio)
const iva = x => x * 0.21;
const suma = (a, b) => a + b;
let precioFinal = suma(precio, iva(precio))
console.log (precioFinal)