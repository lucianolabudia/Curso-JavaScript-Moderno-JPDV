// =========  Eventos sobre los Inputs =========

const busqueda = document.querySelector('.busqueda');

// se ejecuta cuando presiones una letra
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo..');
});

// se ejecita el evento cuando presionas pero sueltas la tecla
busqueda.addEventListener('keyup', () => {
    console.log('escribiendo..');
});

// entra al input y sale
busqueda.addEventListener('blur', () => {
    console.log('escribiendo..');
});

// selecciona y se copia
busqueda.addEventListener('copy', () => {
    console.log('escribiendo..');
});

// se pega
busqueda.addEventListener('paste', () => {
    console.log('escribiendo..');
});

// se corta
busqueda.addEventListener('cut', () => {
    console.log('escribiendo..');
});

// se ejecuta con cualquiera de los eventos
busqueda.addEventListener('input', () => {
    console.log('escribiendo..');
});


busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('fallo la validacion');
    }    
});
