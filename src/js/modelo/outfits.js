
import { Rest } from '../servicios/rest.js'

/**
 *Clase que gestiona los datos de la entidad outfit
 *
 * @export
 * @class Outfits
 */
export class Outfits {
    constructor(titulo, descripcion) {
        this.titulo = titulo
        this.descripcion = descripcion
    }
    crear() {
        return Rest.post('pelicula', this)
    }
}