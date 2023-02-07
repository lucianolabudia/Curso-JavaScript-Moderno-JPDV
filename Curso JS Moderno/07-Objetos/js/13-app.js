// ========= Object .keys, .values y .entries =========

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(Object.keys(producto)); // retorna array con los keys del objeto

console.log(Object.values(producto)); // retorna array con los valores del objeto

console.log(Object.entries(producto)); // retorna todo en pares