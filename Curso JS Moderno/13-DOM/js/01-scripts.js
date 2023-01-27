// Acceder a elementos del HTML con document

let elemento;

elemento = document;
elemento = document.all; // todo el documento
elemento = document.head; // head del html
elemento = document.body; // body del html
elemento = document.domain; // direccion

elemento = document.forms; //formularios
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links; // todos los enlaces
elemento = document.links[4]; //enlace posicion 4
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;



console.log(elemento)

/*
Todo hace referencia al contenido html y se puede hacer referencia a elementos del html,
imagenes, scripts, etc..
*/