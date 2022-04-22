'use strict'

//import {VistaPrincipal} from './vistas/vistaprincipal.js'
/**
 *Controlador principal de la aplicación
 *
 * @class App
 */
class App {
    constructor() {
        window.onload = this.iniciar.bind(this)

    }

    iniciar() {
        //this.vistaPrincipal = new VistaPrincipal(this, document.body)

        console.log("entre dentro")
    }


}
new App();
 function loginUsuario() {
    let u = $('#correo').val();
    let p = $('#clave').val();
    console.log(u,p);
    let urlserver = 'localhost';
    if (u !== "" && p != "") {
        $.ajax(
            {
                url:  "http://05.2daw.esvirgua.com/myCloset/src/php/controlador/controladorBackend.php",
                type: "POST",
                data:
                    {
                        user: u,
                        password: p
                    },
                dataType: 'json',
                success: function (response) {
                    //alert(response.success);
                    if (response.success == true) {
                        localStorage.setItem('sesion', u);// SE GUARDA DE SESION DEL USUARIO
                        localStorage.setItem('us_nombre', response.us_nombre);// SE GUARDA DE SESION NOMBRE DE

                        localStorage.setItem('us_id', response.us_id);
                        //$(location).attr('href', "inicio.html");
                        document.getElementById('divLogin').style.display = 'none'
                        document.getElementById('divMenuPrincipal').style.display = 'block'
                        
                        mensaje("nsj_1login", "texto_login", "BIENVENIDO" + response.us_nombre, "success")
                    } else {
                        mensaje("msj_login", "texto_login", response.mensaje, "danger");
                    }
                }
            });
    }
}
