// ========= Funciones en Objetos y acceder a sus valores =========

const nombre= "Hola";
const precio = 20;

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    },
}

/*
La palabra this se refiere a los valores que existen en el mismo objeto.
Es una forma de referirse al objeto en si mismo.
*/

producto.mostrarInfo();0.