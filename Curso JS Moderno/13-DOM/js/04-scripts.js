// querySelector

const card = document.querySelector('.card'); //solo retorna el 1ro que encuentra
console.log(card)

// Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// permite tambien seleccionar IDs con la misma sintaxis de CSS ej:#
// Seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);