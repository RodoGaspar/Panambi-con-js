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
    tarjetas += "<img id='prodImg"+ i +"' src='imagenes/"+ producto.imagen + "' class='card-img-top' alt='" + producto.nombre +"' onclick=infoProd('prodNombre"+ i +"')>";
    tarjetas += "<div class='card-body'>";
    tarjetas += "<h3 id='prodNombre"+ i +"' class= 'card-title productos__subtitl--card'>Maceta " + producto.nombre + "</h3>";
    tarjetas += "<col><p class='card-text productos__descrip--card'>" + producto.descripcion +"</p></col>";
    tarjetas += "<col class= 'text-end'><strong id='prodPrecio"+ i +"' class='productos__descrip--card'>Precio: $" + producto.precio + "</strong></col>";
    tarjetas += "</div>";
    tarjetas += "</div>";
    i++;
    var prodImagen = document.getElementById("prodNombre"+ i)
}

var tarj_prod = document.getElementById("muestraMacetas");
tarj_prod.innerHTML = tarjetas;

function infoProd(producto) {
    var producto_elegido = document.getElementById("producto_seleccionado");
    var precio_elegido = document.getElementById("precio_seleccionado");
    console.log( "es" + producto)
    if (producto == "prodNombre1") {
        producto_elegido.value  = arrayProductos[0].nombre;
        precio_elegido.value = arrayProductos[0].precio;
    } else if (producto == "prodNombre2") {
        producto_elegido.value = arrayProductos[1].nombre;
        precio_elegido.value = arrayProductos[1].precio;
    } else if (producto == "prodNombre3") {
        producto_elegido.value = arrayProductos[2].nombre;
        precio_elegido.value = arrayProductos[2].precio;
    } else if (producto == "prodNombre4") {
        producto_elegido.value = arrayProductos[3].nombre;
        precio_elegido.value = arrayProductos[3].precio;
    }
}

function enviarConsulta() {
    var producto_elegido = document.getElementById("producto_seleccionado").value;
    var precio_elegido = document.getElementById("precio_seleccionado").value;
    var nombre = document.getElementById("nombre_cliente").value;
    var email = document.getElementById("email_cliente").value;
    
    localStorage.setItem("datos_formulario", JSON.stringify([producto_elegido, precio_elegido, nombre, email]));
    var respuesta = "<p class= 'text-white bg-success p-3'> Recibimos tu consulta! ;)</p>"
    document.getElementById("respuesta").innerHTML = respuesta;
}

var enviar_datos = document.getElementById("enviar_datos");
enviar_datos.addEventListener("click", enviarConsulta);
//console.log(datos_formulario)

function cargarInfo() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("producto_seleccionado").value = datos[0];
    document.getElementById("precio_seleccionado").value = datos[1];
    document.getElementById("nombre_cliente").value = datos[2];
    document.getElementById("email_cliente").value = datos[3];
}

cargarInfo();