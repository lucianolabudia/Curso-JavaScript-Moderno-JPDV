// ========= Variables =========
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


// ========= Funciones =========
function agregarCurso(e) {
    e.preventDefault(); //prevenimos la accion por default, q vaya a ese id y q se quede fija la pantalla
    
    if ( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        
        leerDatosCurso(cursoSeleccionado);
    }
}


// Vaciar todo el carrito
function vaciarCarrito() {
    articulosCarrito = []; // reseteamos el array

    limpiarHTML(); // Eliminamos todo el HTML
}


// Elimina un curso del carrito
function eliminarCurso(e) {    
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')
        
        // Elimina del arrayde articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => {
            if (curso.id === cursoId) {
                curso.cantidad--;
                if (curso.cantidad < 1) {
                    delete curso;
                } else {
                    return curso;
                }
            } else {
                return curso;
            }
        } );
             
    }

    carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
}


// Lee el contenido del HTML al que le dimos click y extrae la info del curso
function leerDatosCurso(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al array de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }    

    console.log(articulosCarrito);

    carritoHTML();
}


// Muestra el Carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}