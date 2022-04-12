'use strict'

import {VistaPrincipal} from './vistas/vistaprincipal.js'
/**
 *Controlador principal de la aplicación
 *
 * @class App
 */
class App{
  constructor(){
    window.onload = this.iniciar.bind(this)
  }
  iniciar(){
    this.vistaPrincipal = new VistaPrincipal(this, document.body)
  }
  

}

new App()