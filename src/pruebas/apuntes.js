'use strict'

/* 
Metodo de pruebas POST
*/
function enviar() {
    const opciones = {
        method: 'POST',
        body: JSON.stringify({usuario : "gbfg", al:'kljlkj'})
    }
    fetch('prueba.php', opciones)
        /* 
        //Se obtiene texto plano
        .then(respuesta => respuesta.text())
        .then(datos => console.log(datos)) */
        /* 
        //Se obtiene un json
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos.al)) */
}