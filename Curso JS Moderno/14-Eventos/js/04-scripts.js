// =========  Evento Submit a un formulario =========

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    console.log('Buscando...');

    console.log(e.target.method);
}