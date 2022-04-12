
import { Rest } from '../servicios/rest.js'

/**
 *Clase que gestiona los datos de la entidad usuario
 *
 * @export
 * @class Usuarios
 */
export class Usuarios {
    constructor(titulo, descripcion) {
        this.titulo = titulo
        this.descripcion = descripcion
    }
    crear() {
        return Rest.post('pelicula', this)
    }
}