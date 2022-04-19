<?php
require "metodos.php";


$usuario = $_POST['user'];
$password = $_POST['password'];
sesion($usuario,$password);
function sesion($usuario, $password){
    $metodo = new Metodos();
    $response = array('success'=> false, 'mensaje'=>"", 'nombre'=>"",'us_id' => "");

    //$metodo->iniciarSesion($usuario, $password);
    if ($metodo->iniciarSesion($usuario, $password) == true){
        $response['success']=true;
        $response['mensaje']='Todo es correcto';
        $response['usuario']=$usuario;

    }else{
        $response['success']=false;
        $response['mensaje']="Correo o contraseña incorrecta";
    }
    echo json_encode($response);
}

