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
    tarjetas += "<button id= 'boton"+ producto.id +"' type='button' class='btn btn-success m-3'>Agregar al pedido</button>";
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


// onclick =asignarCantidad()
$(()=> {
    function asignarCantidadS() {
        let cantidadS = $("#selector1").val();
        console.log("la cantidad es " + cantidadS);
        // console.log(typeof + cantidadS)
    };
    $("#boton1").click(function() {
        asignarCantidadS()
        console.log("Es boton1")
    });
    function asignarCantidadM() {
        let cantidadM = $("#selector2").val();
        console.log("la cantidad es " + cantidadM);
    };
    $("#boton2").click(function() {
        asignarCantidadM()
        console.log("Es boton2")
    });
    function asignarCantidadL() {
        let cantidadL = $("#selector3").val();
        console.log("la cantidad es " + cantidadL);
    };
    $("#boton3").click(function() {
        asignarCantidadL()
        console.log("Es boton3")
    });
    function asignarCantidadXL() {
        let cantidadXL = $("#selector4").val();
        console.log("la cantidad es " + cantidadXL);
    };
    $("#boton4").click(function() {
        asignarCantidadXL()
        console.log("Es boton4")
    });
    });
    

// Class para armar consulta
class consulta {
    constructor (nombre, email, prodElegido, precioElegido) {
        this.nombre = nombre;
        this.email = email;
        this.prodElegido = prodElegido;
        this.precioElegido = precioElegido;
    }
}
// Array de Consultas
var consultas = [];

function enviarConsulta() {
    // Se levantan los valores de la consulta
    var producto_elegido = $("#producto_seleccionado").val();
    var precio_elegido = $("#precio_seleccionado").val();
    var nombre = $("#nombre_cliente").val();
    var email = $("#email_cliente").val();
    // Se comprueba que los campos estén completos
    if (producto_elegido == "") {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, no elegiste ningún producto!</p>");
        return false;
    }
    if ((precio_elegido == "") || (parseFloat(precio_elegido) <= 100)) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, ese no es el precio correcto!</p>)");
        return false;
    }
    if ((nombre == "") || (nombre.length < 3)) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu nombre!</p>");
        return false;
    }
    if ((email == "") || (!email.includes("@"))) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu mail!</p>"); 
        return false;
    }

    // Se crea un objeto con los datos de la consulta, se pushea a un array y se guarda en local storage
    const nuconsulta = new consulta (nombre, email, producto_elegido, precio_elegido);
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
