alert("¡Bienvenido a la tienda de Panambí!")
class producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.vendido = false;
    };
    precioLista() {
        if (this.nombre == "S") {
            this.precio = 450
        } else if (this.nombre == "M") {
            this.precio = 650
        } else if (this.nombre == "L") {
            this.precio = 800
        } else {
            this.precio = 1000
        } 
    };
    sumarIva() {
        this.precio = this.precio * 1.21;
    };
    vender() {
        this.vendido = true;
    };
};
const producto1 = new producto (prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños S, M, L y XL").toUpperCase());
producto1.precioLista();
console.log(producto1.nombre);
console.log(producto1.precio);
producto1.sumarIva();
console.log(producto1.precio);



/*
var sizePot;
function size() {
    var sizePot = prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños S, M, L y XL").toUpperCase();
    while (sizePot != "S" && sizePot != "M" && sizePot != "L" && sizePot != "XL") {
    sizePot = prompt("Por favor, elige en uno de los tamaños disponibles: S, M, L o XL");
    return cosole.log (sizePot)
    
}
}
/*function precioLista() {
    if (sizePot == "S") {
        precio = 450
    } else if (sizePot == "M") {
        precio = 650
    } else if (sizePot == "L") {
        precio = 800
    } else {
        precio = 1000
    } 
}
size()
//precioLista()
console.log("El tamaño es " + sizePot)
//console.log(precio)*/

/*console.log(maceta)
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
}*/
