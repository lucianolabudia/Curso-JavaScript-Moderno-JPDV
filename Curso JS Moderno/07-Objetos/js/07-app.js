// ========= El problema con los objetos =========

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

producto.disponible = false;

console.log(producto);

// Una variable aunque este declarada como const al estar en un objeto sus 
// propiedades si se puede re escribir o eliminar