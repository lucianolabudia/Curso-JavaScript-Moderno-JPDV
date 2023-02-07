// ========= Eventos con el Mouse =========

const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
});

// cuando colocas con el mouse sobre el objeto
nav.addEventListener('mouseenter', () => {
    console.log('sobre la navegacion');

    nav.style.backgroundColor = 'white';
});

// cuando salis con el mouse sobre el objeto
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

// cuando presionas con el mouse sobre el objeto
nav.addEventListener('mousedown', () => {
    console.log('saliendo de la navegacion');
});


nav.addEventListener('mouseup', () => {
    console.log('saliendo de la navegacion');
});

// doble click con el mouse
nav.addEventListener('dblclick', () => {
    console.log('doble click de la navegacion');
});

// mousedown - similar al click
// click
// dblclick = doble click
// mouseup - cuando sueltas el mouse
