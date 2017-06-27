<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include '../model/Queryes.php';
include '../model/ConectionFactory.php';
//echo json_encode($_POST);
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);
//echo "teste";
//var_dump($request);



//echo $request->senha;

$usuario = new Usuario();

$usuario->setLogin($request->usuario);
$usuario->setSenha($request->senha);


$query = new Queryes();



$conection = new ConectionFactory();

if($conection->getConection()->query($query->efetuarLogin($usuario))->fetchAll()){

    echo "true";
    session_start();
    $result = $conection->getConection()->query($query->efetuarLogin($usuario))->fetchAll();
    foreach ($result as $row) {
        $_SESSION['userSession'] = $row;
    }
    
    //echo json_encode($_SESSION['userSession']);
    
    
    
}else{
    echo "false";
}