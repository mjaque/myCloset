
import { Rest } from '../servicios/rest.js'

/**
 *Clase que gestiona los datos de la entidad subcategorias
 *
 * @export
 * @class Subcategorias
 */
export class Subcategorias {
    constructor(titulo, descripcion) {
        this.titulo = titulo
        this.descripcion = descripcion
    }
    crear() {
        return Rest.post('pelicula', this)
    }
}