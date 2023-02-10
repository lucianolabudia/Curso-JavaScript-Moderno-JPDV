// ========= Parametros por default =========

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Luciano', 'Labudia');
saludar('Luciano');
saludar();