alert("¡Bienvenido a la tienda de Panambí!")
//var precio = 0
var sizePot = prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños 10, 12, 14 y 16")
var maceta = parseInt(sizePot, 10)
while (maceta != 10 && maceta != 12 && maceta != 14 && maceta != 16) {
    maceta = prompt("Por favor, elige en uno de los tamaños disponibles: 10, 12, 14 o 16")
} 
function precioLista(maceta) {
    if (maceta == 10) {
        precio = 450
    } else if (maceta == 12) {
        precio = 650
    } else if (maceta == 14) {
        precio = 800
    } else {
        precio = 1000
    } 
}
console.log(maceta)
precioLista(maceta)
console.log(precio)
const iva = x => x * 0.21;
const suma = (a, b) => a + b;
const desc = (a) => a - (a * 0.15)
let subTotal = suma(precio, iva(precio))
console.log (subTotal)
let promo = prompt("¿Tienes código de descuento?").toLowerCase()
if (promo == "si") {
    let precioFinal = desc(subTotal)
    alert("El total a pagar es de $ " + precioFinal)
} else {
    alert("El total a pagar es de $ " + subTotal)
}
