class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProductos(producto, cantidad) {
        const productoExistente = this.productos.find(item => item.producto.nombre === producto.nombre);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            this.productos.push({ producto, cantidad });
        }
        alert(`${cantidad} unidad(es) de ${producto.nombre} ha(n) sido agregadas al carrito.`);
    }

    mostrarDetalles() {
        if (this.productos.length === 0) {
            alert('¡No hay productos en el carrito de compra!');
        } else {
            let mensaje = 'Detalles de la Compra:\n\n';
            this.productos.forEach((item) => {
                mensaje += `${item.producto.nombre} - $${item.producto.precio.toFixed(2)} x ${item.cantidad} unidad(es) = $${(item.producto.precio * item.cantidad).toFixed(2)}\n`;
            });
            alert(mensaje);
        }
    }

    calcularTotal() {
        const total = this.productos.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);
        alert(`Total de la compra: $${total.toFixed(2)}`);
        return total;
    }
}

const productos = [
    new Producto("Block Bocetos", 2990),
    new Producto("Grafitos 12un", 4990),
    new Producto("Tiralíneas 7un", 11990),
    new Producto("Tinta Deleter", 6990),
    new Producto("Goma de Borrar Maleable", 3990)
]

const miCarrito = new Carrito();

function seleccionarProducto(opcion) {
    if (opcion >= 1 && opcion <= 5) {
        const productoSeleccionado = productos[opcion - 1];
        const cantidad = parseInt(prompt('Ingrese la cantidad de unidades que desea agregar:'));

        if (!isNaN(cantidad) && cantidad > 0) {
            miCarrito.agregarProductos(productoSeleccionado, cantidad);
        } else {
            alert('Cantidad inválida. Inténtelo de nuevo.');
        }
    } else {
        alert('Opción inválida. Por favor seleccione un número entre 1 y 5.');
    }
}

let continuar = true;
while (continuar) {
    let opcion = parseInt(prompt("Seleccione un producto para agregar al carrito (1 a 5) o 0 para salir.\n1.-Block Bocetos $2990\n2.-Grafitos 12un $4990\n3.-Tiralíneas 7un $11990\n4.-Tinta Deleter $6990\n5.-Goma de Borrar Maleable $3990\n0.-Salir"));

    if (opcion === 0) {
        continuar = false;
    } else {
        seleccionarProducto(opcion);
        continuar = confirm("¿Desea agregar otro producto?");
    }
}

miCarrito.mostrarDetalles();
miCarrito.calcularTotal();
