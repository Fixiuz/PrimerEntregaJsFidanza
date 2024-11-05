// Funcion para mostrar productos y precios
function mostrarProductos() {
    console.log('Productos disponibles:');
    console.log(' ' + producto1 + ' - Precio: $' + precioProducto1);
    console.log(' ' + producto2 + ' - Precio: $' + precioProducto2);
    console.log(' ' + producto3 + ' - Precio: $' + precioProducto3);
}

// Funcion para calcular el precio final con IVA y envio
function calcularPrecioFinal(precio, costoEnvio) {
    const IVA = 0.21;
    return precio * (1 + IVA) + costoEnvio;
}

// Función para validar la selección del producto
function seleccionValidaProducto(seleccionMenu) {
    while (isNaN(seleccionMenu) || seleccionMenu < 1 || seleccionMenu > 3) {
        alert('Opción inválida');
        seleccionMenu = parseInt(prompt('Seleccione un producto:\n' + opcionesMenuProducto));
    }
    return seleccionMenu;
}

// Función para validar la selección de envío
function seleccionValidaEnvio(seleccionMenu) {
    while (isNaN(seleccionMenu) || seleccionMenu < 1 || seleccionMenu > 4) {
        alert('Opción inválida');
        seleccionMenu = parseInt(prompt('Seleccione un lugar de envío:\n' + opcionesMenuEnvio));
    }
    return seleccionMenu;
}

// Funcion para seleccionar el producto y asignar su precio
function seleccionarProducto(seleccion) {
    seleccion = seleccionValidaProducto(seleccion);
    switch (seleccion) {
        case 1:
            return precioProducto1;
        case 2:
            return precioProducto2;
        case 3:
            return precioProducto3;
    }
}

// Funcion para seleccionar el destino y asignar su precio
function seleccionarEnvio(seleccionDestino) {
    seleccionDestino = seleccionValidaEnvio(seleccionDestino);
    switch (seleccionDestino) {
        case 1:
            return 200; // Buenos Aires
        case 2:
            return 500; // Córdoba
        case 3:
            return 600; // Mendoza
        case 4:
            return 800; // Neuquén
    }
}

// Inicio del programa --------------------------------------------------------------------------------------------

const producto1 = 'Aceite Esencial de Eucalipto';
const producto2 = 'Aceite Esencial de Manzanilla';
const producto3 = 'Aceite Esencial de Romero';
const precioProducto1 = 500;
const precioProducto2 = 780;
const precioProducto3 = 350;
const opcionesMenuProducto = '1 - Aceite Esencial de Eucalipto, 2 - Aceite Esencial de Manzanilla, 3 - Aceite Esencial de Romero';
const opcionesMenuEnvio = '1 - Buenos Aires, 2 - Córdoba, 3 - Mendoza, 4 - Neuquén';

alert('Bienvenido al simulador de costos y envíos. Recuerda que de momento solo hacemos envíos a: Buenos Aires, Córdoba, Mendoza y Neuquén');
mostrarProductos();

let seleccion = parseInt(prompt('Seleccione un producto:\n' + opcionesMenuProducto));
let precio = seleccionarProducto(seleccion);
console.log('el precio del producto sin iva es : ' + precio )

let seleccionDestino = parseInt(prompt('Seleccione un lugar de envío para su producto' + opcionesMenuEnvio));
let costoEnvio = seleccionarEnvio(seleccionDestino);
let precioFinal = calcularPrecioFinal(precio, costoEnvio);
alert('El costo final de su producto, incluyendo IVA y envío, es de: $' + precioFinal + ' siendo $ '+ costoEnvio + ' de costo de enviío '   );
