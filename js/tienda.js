alert("¡Bienvenido a la tienda de Panambí!")
var sizePot = prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños 10, 12, 14 y 16")
while (sizePot != "10" && sizePot != "12" && sizePot != "14" && sizePot != "16") {
    sizePot = prompt("Por favor, elige en uno de los tamaños disponibles: 10, 12, 14 o 16")
}
var maceta = parseInt(sizePot, 10)
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
    alert("El total a pagar es de $" + precioFinal.toFixed(2))
} else {
    alert("El total a pagar es de $" + subTotal)
}
