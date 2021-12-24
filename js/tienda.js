//Class para armar productos
class producto {
    constructor(id, nombre, imagen, descripcion, precio, cantidad, precioTotal) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.precioTotal = precioTotal
    };
    sumarIva() {
        this.precio = this.precio * 1.21;
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
    tarjetas += '<select id="selector'+ producto.id +'" class="form-select w-100" aria-label="Default select example"> <option selected>Elige la cantidad</option><option value="1">Uno</option><option value="2">Dos</option><option value="3">Tres</option><option value="4">Cuatro</option><option value="5">Cinco</option><option value="6">Seis</option><option value="7">Siete</option><option value="8">Ocho</option><option value="9">Nueve</option><option value="10">Diez</option></select>'
    tarjetas += "<button id= 'boton"+ producto.id +"' type='button' class='btn btn-success m-3 botoncito' >Agregar al pedido</button>";
    tarjetas += "</div>";
    tarjetas += "</div>";
    i++;

}


$("#muestraMacetas").append(tarjetas);





// Acá es donde se asignan las cantidades de los productos elegídos, sospecho que se puede hacer más corto.

function asignarCantidad(selector, producto, kart) {
    cantidad = selector.val();
    producto.cantidad = cantidad;
    console.log(producto);
    producto.precioCantidad();
    (kart).slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${producto.cantidad} macetas ${producto.nombre}</h3> <col> <p> Con un precio total de $${producto.precioTotal}</p>`).css("backgroundColor", "#3e8f13").css ("fontSize", "2rem");
};

$("#boton1").click(function(){
    asignarCantidad($("#selector1"), producto1, $("#carrito1"))
});
$("#boton2").click(function(){
    asignarCantidad($("#selector2"), producto2, $("#carrito2"))
})
$("#boton3").click(function(){
    asignarCantidad($("#selector3"), producto3, $("#carrito3"))
})
$("#boton4").click(function(){
    asignarCantidad($("#selector4"), producto4, $("#carrito4"))
})

// Class para armar consulta
class consulta {
    constructor (nombre, email, pedido, precioFinal) {
        this.nombre = nombre;
        this.email = email;
        this.pedido = pedido;
        this.precioFinal = precioFinal;
    }
}
// Array de Consultas
var consultas = [];
pedido = [];

function enviarConsulta() {
    // Se levantan los valores de la consulta
    var nombre = $("#nombre_cliente").val();
    var email = $("#email_cliente").val();    
    pedido.push(producto1.cantidad ,producto1.nombre, producto1.precioTotal, producto2.cantidad, producto2.nombre, producto2.precioTotal, producto3.cantidad, producto3.nombre, producto3.precioTotal, producto4.cantidad, producto4.nombre, producto4.precioTotal);
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
    if ((producto1.cantidad > 0) && (producto2.cantidad > 0) && (producto3.cantidad > 0) && (producto4.cantidad > 0)) {
        var precioFinal = producto1.precioTotal + producto2.precioTotal + producto3.precioTotal + producto4.precioTotal;
        console.log(precioFinal)
        $("#carritoTotal").slideUp(2000).slideDown(2000).html(`<h4>El precio total de tu pedido es de $${precioFinal}`) 
    }

    // Se crea un objeto con los datos de la consulta, se pushea a un array y se guarda en local storage
    const nuconsulta = new consulta (nombre, email, pedido, precioFinal);
    console.log(nuconsulta);
    consultas.push(nuconsulta);
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
    $("#nombre_cliente").val(ultConsul.nombre);
    $("#email_cliente").val(ultConsul.email);
    $("#respuesta").html("<p class= 'bg-info p-3 m-3 fs-5'> ¡Se cargó la última consulta!</p>");
    $("#carrito1").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${ultConsul.pedido[0]} macetas ${producto1.nombre}</h3> <col> <p> Con un precio total de $${ultConsul.pedido[2]}</p>`).css("backgroundColor", "#3e8f13").css ("fontSize", "2rem");
    $("#carrito2").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${ultConsul.pedido[3]} macetas ${producto2.nombre}</h3> <col> <p> Con un precio total de $${ultConsul.pedido[5]}</p>`).css("backgroundColor", "#3e8f13").css ("fontSize", "2rem");
    $("#carrito3").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${ultConsul.pedido[6]} macetas ${producto3.nombre}</h3> <col> <p> Con un precio total de $${ultConsul.pedido[8]}</p>`).css("backgroundColor", "#3e8f13").css ("fontSize", "2rem");
    $("#carrito4").slideUp(2000).slideDown(2000).html(`<h3> Estás llevando ${ultConsul.pedido[9]} macetas ${producto4.nombre}</h3> <col> <p> Con un precio total de $${ultConsul.pedido[11]}</p>`).css("backgroundColor", "#3e8f13").css ("fontSize", "2rem");
    $("#carritoTotal").slideUp(2000).slideDown(2000).html(`<h4>El precio total de tu pedido es de $${ultConsul.precioFinal}`);
    
}

$("#cargar_datos").click(function () {
    cargarInfo();
});

// Se borra la local storage
function borrarDatos() {
    $("#nombre_cliente").val(" ");
    $("#email_cliente").val(" ");
    localStorage.clear();
    $("#respuesta").html("<p class= 'bg-warning p-3 m-3 fs-5'> ¡Se borraron todos los datos!</p>");
}

$("#borrar_datos").click(function() {
    borrarDatos();
});

// Muestra que hay en la Local Storage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
};
