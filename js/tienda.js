//alert("¡Bienvenido a la tienda de Panambí!")
var sizePot = prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños 10, 12, 16 y 18")
var maceta = parseInt(sizePot, 10)
console.log(maceta)
var precio = 0
if (maceta == 10) {
    precio + 450
} else if (maceta == 12) {
    precio + 650
} else if (maceta == 14) {
    precio + 800
} else {
    precio + 1000
}
console.log(precio)