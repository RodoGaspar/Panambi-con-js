//Class para armar productos
class producto {
    constructor(id, nombre, imagen, descripcion, precio, cantidad, precioTotal) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.precioTotal = precioTotal
    };
    sumarIva() {
        this.precio = this.precio * 1.21;
    };
    vender() {
        this.vendido = true;
    };
    precioCantidad() {
        this.precioTotal = this.precio * this.cantidad;
    }
};

//Productos definidos y sumados a un array
const producto1 = new producto (1, "S", "Lfante_Lobelia.jpg","Es nuestro formato mas pequeño, ideal para germinar, plantas chicas o plántulas.", 450);
const producto2 = new producto (2, "M", "MacetaN12Gatitos.jpg", "Este tamaño se recomienda para plantas pequeñas a medianas pensando siempre en hacer un transplante en la siguiente estación o cuando la planta lo requiera.", 650);
const producto3 = new producto (3, "L", "soln14.jpg", "Tamaño recomiendado para plantas medianas que se quieran mantener en ese tamaño, o bien en transición de medianas a grandes.", 800);
const producto4 = new producto (4, "XL", "zorro_boreal.jpg", "Perfecta para plantas medianas o grandes en crecimiento, dependiendo del desarrollo de las mismas puede transplantarse a tamaños más grandes o pasarse a tierra.", 1000);

let arrayProductos = [producto1, producto2, producto3, producto4]
localStorage.setItem("productos_ofrecidos,", JSON.stringify(arrayProductos));
console.table(arrayProductos)
//Esta sección arma el html de los productos
var tarjetas = "";
var i = 1;
for (let producto of arrayProductos) {
    producto.sumarIva()
    tarjetas += "<div class='card productos__card col-lg-3 col-md-5 col-sm-12'>";
    tarjetas += "<img id='prodImg"+ i +"' src='imagenes/"+ producto.imagen + "' class='card-img-top' alt='" + producto.nombre +"' onclick=infoProd('prodNombre"+ i +"')>";
    tarjetas += "<div class='card-body'>";
    tarjetas += "<h3 id='prodNombre"+ i +"' class= 'card-title productos__subtitl--card'>Maceta " + producto.nombre + "</h3>";
    tarjetas += "<col><p class='card-text productos__descrip--card'>" + producto.descripcion +"</p></col>";
    tarjetas += "<col class= 'text-end'><strong id='prodPrecio"+ i +"' class='productos__descrip--card'>Precio: $" + producto.precio + "</strong></col>";
    tarjetas += '<select id="selector'+ producto.id +'" class="form-select w-100" aria-label="Default select example"> <option selected>Open this select menu</option><option value="1">Uno</option><option value="2">Dos</option><option value="3">Tres</option><option value="4">Cuatro</option><option value="5">Cinco</option><option value="6">Seis</option><option value="7">Siete</option><option value="8">Ocho</option><option value="9">Nueve</option><option value="10">Diez</option></select>'
    tarjetas += "<button id= 'boton"+ producto.id +"' type='button' class='btn btn-success m-3 botoncito' >Agregar al pedido</button>";
    tarjetas += "</div>";
    tarjetas += "</div>";
    i++;

}


$("#muestraMacetas").append(tarjetas);


function infoProd(producto) {
    console.log( "es" + producto)
    if (producto == "prodNombre1") {
        $("#producto_seleccionado").val(arrayProductos[0].nombre);
        $("#precio_seleccionado").val(arrayProductos[0].precio);
    } else if (producto == "prodNombre2") {
        $("#producto_seleccionado").val(arrayProductos[1].nombre);
        $("#precio_seleccionado").val(arrayProductos[1].precio);
    } else if (producto == "prodNombre3") {
        $("#producto_seleccionado").val(arrayProductos[2].nombre);
        $("#precio_seleccionado").val(arrayProductos[2].precio);
    } else if (producto == "prodNombre4") {
        $("#producto_seleccionado").val(arrayProductos[3].nombre);
        $("#precio_seleccionado").val(arrayProductos[3].precio);
    }
}


// Acá es donde se asignan las cantidades de los productos elegídos, sospecho que se puede hacer más corto.
function asignarCantidad(boton) {
    if (boton == "boton1") {
        cantidad = $("#selector1").val();
        producto1.cantidad = cantidad;
        console.log(producto1);
        producto1.precioCantidad();
        $("#carritoS").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${producto1.cantidad} macetas ${producto1.nombre}</h3> <col> Con un precio total de $${producto1.precioTotal}`).css("backgroundColor", "#3e8f13");

    } else if (boton == "boton2") {
        cantidad = $("#selector2").val();
        producto2.cantidad = cantidad;
        console.log(producto2);
        producto2.precioCantidad();
        $("#carritoM").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${producto2.cantidad} macetas ${producto2.nombre}</h3> <col> Con un precio total de $${producto2.precioTotal}`).css("backgroundColor", "#3e8f13");

    } else if (boton == "boton3") {
        cantidad = $("#selector3").val();
        producto3.cantidad = cantidad;
        console.log(producto3);
        producto3.precioCantidad();
        $("#carritoL").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${producto3.cantidad} macetas ${producto3.nombre}</h3> <col> Con un precio total de $${producto3.precioTotal}`).css("backgroundColor", "#3e8f13");

    } else if (boton == "boton4") {
        cantidad = $("#selector4").val();
        producto4.cantidad = cantidad;
        console.log(producto4);
        producto4.precioCantidad();
        $("#carritoXL").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${producto4.cantidad} macetas ${producto4.nombre}</h3> <col> Con un precio total de $${producto4.precioTotal}`).css("backgroundColor", "#3e8f13");
    }

}

/* for ( i = 0; i < 5; i++){
$(".botoncito").click(function(){
    asignarCantidad("boton"+i)
})
} */
/* var arrButt = $(".botoncito");
console.log(arrButt);
i=1
for (butt of arrButt) {
    butt.click(function() {
        asignarCantidad();
    })
    i++
}
 */
/* for ( i = 0; i < 5; i++) {
    $(("#boton")+i).click(function() {
        asignarCantidad("boton" + i);
    })
} */

$("#boton1").click(function(){
    asignarCantidad("boton1")
});
$("#boton2").click(function(){
    asignarCantidad("boton2")
});
$("#boton3").click(function(){
    asignarCantidad("boton3")
});
$("#boton4").click(function(){
    asignarCantidad("boton4")
});


    

// Class para armar consulta
class consulta {
    constructor (nombre, email, pedido) {
        this.nombre = nombre;
        this.email = email;
        this.pedido = pedido;
    }
}
// Array de Consultas
var consultas = [];

function enviarConsulta() {
    // Se levantan los valores de la consulta
    var nombre = $("#nombre_cliente").val();
    var email = $("#email_cliente").val();
    var pedido = [];
    consultas.push(nombre, email, producto1.cantidad ,producto1.nombre, producto2.cantidad, producto2.nombre, producto3.cantidad, producto3.nombre, producto4.cantidad, producto4.nombre);
    console.log(pedido);
    // Se comprueba que los campos estén completos
    if ((nombre == "") || (nombre.length < 3)) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu nombre!</p>");
        return false;
    }
    if ((email == "") || (!email.includes("@"))) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu mail!</p>"); 
        return false;
    }

    // Se crea un objeto con los datos de la consulta, se pushea a un array y se guarda en local storage
    /* const nuconsulta = new consulta (nombre, email, producto_elegido, precio_elegido);
    console.log(nuconsulta);
    consultas.push(nuconsulta); */
    console.log(consultas)
    localStorage.setItem("datos_formulario", JSON.stringify(consultas));
    var respuesta = "<p class= 'text-white bg-success p-3 m-3'> Recibimos tu consulta! ;)</p>"
    $("#respuesta").html(respuesta);
}

$("#enviar_datos").click(function () {
    enviarConsulta();
});


// Se carga la info de la última consulta
function cargarInfo() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    var ultConsul = datos.at(-1);
    console.log(ultConsul);
    $("#producto_seleccionado").val(ultConsul.prodElegido);
    $("#precio_seleccionado").val(ultConsul.precioElegido);
    $("#nombre_cliente").val(ultConsul.nombre);
    $("#email_cliente").val(ultConsul.email);
    $("#respuesta").html("<p class= 'bg-info p-3 m-3 fs-5'> ¡Se cargó la última consulta!</p>");
}

$("#cargar_datos").click(function () {
    cargarInfo();
});


function borrarDatos() {
    $("#producto_seleccionado").val(" ");
    $("#precio_seleccionado").val(" ");
    $("#nombre_cliente").val(" ");
    $("#email_cliente").val(" ");
    localStorage.clear();
    $("#respuesta").html("<p class= 'bg-warning p-3 m-3 fs-5'> ¡Se borraron todos los datos!</p>");
}

$("#borrar_datos").click(function() {
    borrarDatos();
});


for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
};
