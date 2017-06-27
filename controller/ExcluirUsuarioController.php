<?php
    include '../model/Queryes.php';
    include '../model/ConectionFactory.php';
    
    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);
    
    var_dump($request);
    
    $usuario = new Usuario();
    
    $usuario->setId($request->id);
    $usuario->setStatus($request->status);
    
    $queryes = new Queryes();
    $teste = $queryes->desativarUsuario($usuario);
    echo $teste;
    $conection = new ConectionFactory();
    
    $conection->getConection()->query($queryes->desativarUsuario($usuario));
