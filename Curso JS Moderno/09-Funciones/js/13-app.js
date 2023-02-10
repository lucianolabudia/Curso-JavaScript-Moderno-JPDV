// ========= Arrow Functions en el Reproductor de Música =========

const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Techno');

