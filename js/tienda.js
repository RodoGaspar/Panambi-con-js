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
let tamano;
function size() {
    tamano = prompt("Por favor elige el tipo de maceta que deseas adquirir. Por el momento contamos con tamaños S, M, L y XL").toUpperCase();
    while (tamano != "S" && tamano != "M" && tamano != "L" && tamano != "XL") {
        tamano = prompt("Por favor, elige en uno de los tamaños disponibles: S, M, L o XL").toUpperCase();
    
};
return tamano
};

const pedido = [];
//Producto 1
const producto1 = new producto (nombre = size());
producto1.precioLista();
producto1.sumarIva();
pedido.push (producto1);
//Producto 2
const producto2 = new producto (nombre = size());
producto2.precioLista();
producto2.sumarIva()
pedido.push (producto2);
//Producto 3
const producto3 = new producto (nombre = size());
producto3.precioLista();
producto3.sumarIva();
pedido.push (producto3);
//Producto 4
const producto4 = new producto (nombre = size());
producto4.precioLista();
producto4.sumarIva(); 
pedido.push (producto4);
console.log(producto1.nombre + producto2.nombre + producto3.nombre + producto4.nombre);
pedido.sort(function(a, b) {
    if (a.precio > b.bprecio){
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0
})
console.log(pedido);
let carrito = document.getElementById("carrito");
console.log(carrito)
for (const producto of pedido) {
    //alert("Elegiste los siguientes items: maceta " + producto.nombre + " a $" + producto.precio)
    let compra = document.createElement("div")
    compra.innerHTML = `<h4> Producto: ${producto.nombre}</h4> $${producto.precio}`
    carrito.appendChild(compra)
};
var venta = prompt("¿Deseas continuar con la compra?").toLowerCase();
if (venta == "si") { 
    for (sale of pedido) {
        sale.vender();
    }
    console.log(pedido)
    alert("¡Gracias por tu compra")
} else {
    alert("Esperamos tu regreso")
};