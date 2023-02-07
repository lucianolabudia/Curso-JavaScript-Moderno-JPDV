// ========= Sellar un Objeto =========
'use strict';

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal( producto ); //No agrega ni eliminar propiedades pero si modificar lo q existe

producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);

console.log(Object.isSealed(producto));