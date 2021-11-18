//Class para armar productos
class producto {
    constructor(id, nombre, imagen, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.vendido = false;
    };
    sumarIva() {
        this.precio = this.precio * 1.21;
    };
    vender() {
        this.vendido = true;
    };
};
//Productos definidos y sumados a un array
const producto1 = new producto (1, "S", "Lfante_Lobelia.jpg","Es nuestro formato mas pequeño, ideal para germinar, plantas chicas o plántulas.", 450);
const producto2 = new producto (2, "M", "MacetaN12Gatitos.jpg", "Este tamaño se recomienda para plantas pequeñas a medianas pensando siempre en hacer un transplante en la siguiente estación o cuando la planta lo requiera.", 650);
const producto3 = new producto (3, "L", "soln14.jpg", "Tamaño recomiendado para plantas medianas que se quieran mantener en ese tamaño, o bien en transición de medianas a grandes.", 800);
const producto4 = new producto (4, "XL", "zorro_boreal.jpg", "Perfecta para plantas medianas o grandes en crecimiento, dependiendo del desarrollo de las mismas puede transplantarse a tamaños más grandes o pasarse a tierra.", 1000);

let arrayProductos = [producto1, producto2, producto3, producto4]

console.table(arrayProductos)

var tarjetas = "";
var i = 1

for (let producto of arrayProductos) {
    producto.sumarIva()
    tarjetas += "<div class='card productos__card col-lg-3 col-md-5 col-sm-12'>";
    tarjetas += "<img src='imagenes/"+ producto.imagen + "' class='card-img-top' alt='" + producto.nombre +"'>";
    tarjetas += "<div class='card-body'>";
    tarjetas += "<h3 class= 'card-title productos__subtitl--card'>Maceta " + producto.nombre + "</h3>";
    tarjetas += "<col><p class='card-text productos__descrip--card'>" + producto.descripcion +"</p></col>";
    tarjetas += "<col class= 'text-end'><strong class='productos__descrip--card'>Precio: $" + producto.precio + "</strong></col>";
    tarjetas += "<form>";
    tarjetas += "<select class='form-select' id='cantidad_maceta"+ i +"' aria-label='Default select example'>";
    tarjetas += "<option selected>Selecciona la cantidad deseada</option>";
    tarjetas += "<option value='1'>Uno</option>";
    tarjetas += "<option value='2'>Dos</option>";
    tarjetas += "<option value='3'>Tres</option>";
    tarjetas += "<option value='4'>Cuatro</option>";
    tarjetas += "<option value='5'>Cinco</option>";
    tarjetas += "<option value='6'>Seis</option>";
    tarjetas += "<option value='7'>Siete</option>";
    tarjetas += "<option value='8'>Ocho</option>";
    tarjetas += "<option value='9'>Nueve</option>";
    tarjetas += "<option value='10'>Diez</option>";
    tarjetas += "</select>";
    tarjetas += "<button id='agregar"+ i +"' class='btn btn-primary btn-lg' type='button'>Sumar al pedido</button>";
    tarjetas += "</form>";
    tarjetas += "</div>";
    tarjetas += "</div>";
    i++;
}

var tarj_prod = document.getElementById("muestraMacetas");
tarj_prod.innerHTML = tarjetas;


//Acá comienza el carrito
let pedido = [];
let productosOfrecidos = "En este momento contamos con: ";

/*
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
        compra.innerHTML = `<h3> Maceta: ${producto.nombre}</h3> <h4>$${producto.precio}</h3>`
        carrito.appendChild(compra)
        precioPedido += producto.precio;
    }; 
    let compraTotal =document.createElement("div")
    compraTotal.innerHTML = `<h3> El Total de tu pedido es de: ${precioPedido}</h3>`
    carrito.appendChild(compraTotal)
}
*/
/*
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
};*/