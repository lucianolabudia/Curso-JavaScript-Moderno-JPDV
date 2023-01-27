// Traversing de DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); //1er elemento de navegacion
console.log(navegacion.lastElementChild); //ultimo elemento de navegacion
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); 

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// ===================================================

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

// ===============================================
// ========= Traversing de Hijo al Padre =========
// ===============================================

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSibling); //va al siguiente elemento
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);