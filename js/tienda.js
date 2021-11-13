//Class para armar productos
class producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.vendido = false;
    };
    sumarIva() {
        this.precio = this.precio * 1.21;
    };
    vender() {
        this.vendido = true;
    };
    restaStock() {
        this.stock -= 1;
    }
};
//Productos definidos y sumados a un array
const producto1 = new producto (1, "S", 450, 70);
const producto2 = new producto (2, "M", 650, 60);
const producto3 = new producto (3, "L", 800, 50);
const producto4 = new producto (4, "XL", 1000, 40);

let arrayProductos = [producto1, producto2, producto3, producto4]

console.table(arrayProductos)
//Acá comienza el carrito
let pedido = [];
let productosOfrecidos = "En este momento contamos con: ";

function sumarPedido() {
    for (item of arrayProductos){
        item.sumarIva();
        productosOfrecidos += `\n ${item.id} - ${item.nombre} a $${item.precio} cada uno.`
    }

    productosOfrecidos += `\n Ingresá el numero de Item que querés sumar a tu pedido. Para salir ingresa 0`;

    let accionUsuario = parseInt(prompt(productosOfrecidos))

    while (isNaN(accionUsuario)) {
        alert("Por favor, ingresá solo números")
        accionUsuario = parseInt(prompt(productosOfrecidos))
    };
    while (accionUsuario != 0) {
        switch (accionUsuario) {
            case 1:
                pedido.push(arrayProductos[0])
                alert(`Agregamos a tu pedido un maceta ${arrayProductos[0].nombre}`)
                arrayProductos[0].restaStock()
                break;
            case 2:
                pedido.push(arrayProductos[1])
                alert(`Agregamos a tu pedido un maceta ${arrayProductos[1].nombre}`)
                arrayProductos[1].restaStock()
                break;
            case 3:
                pedido.push(arrayProductos[2])
                alert(`Agregamos a tu pedido un maceta ${arrayProductos[2].nombre}`)
                arrayProductos[2].restaStock()
                break;
            case 4:
                pedido.push(arrayProductos[3])
                alert(`Agregamos a tu pedido un maceta ${arrayProductos[3].nombre}`)
                arrayProductos[3].restaStock()
                break;
        
            default:
                alert("No contamos con el producto elegido")
                break;
        }
        accionUsuario = parseInt(prompt(productosOfrecidos))
    }
};

let productosPedido = "Elegiste: "
let precioPedido = 0 
let carrito = document.getElementById("carrito");

function mostrarPedido() {
    pedido.sort(function(a, b) {
        if (a.precio > b.bprecio){
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    for (const producto of pedido) {
        let compra = document.createElement("div")
        compra.innerHTML = `<h3> Maceta: ${producto.nombre}</h3> <h4>$${producto.precio}</h4>`
        carrito.appendChild(compra)
        precioPedido += producto.precio;
    }; 
    let compraTotal =document.createElement("div")
    compraTotal.innerHTML = `<h3> El Total de tu pedido es de: ${precioPedido}`
    carrito.appendChild(compraTotal)
}


alert("¡Bienvenido a la tienda de Panambí!")
sumarPedido()
console.log("Cerramos tu pedido")
console.table(pedido);
mostrarPedido()

//Acá se confirma la venta (proximamente con un evento)
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