
import { Rest } from '../servicios/rest.js'

/**
 *Clase que gestiona los datos de la entidad outfit
 *
 * @export
 * @class Prendas
 */
export class Prendas {
    constructor(titulo, descripcion) {
        this.titulo = titulo
        this.descripcion = descripcion
    }
    crear() {
        return Rest.post('pelicula', this)
    }
}