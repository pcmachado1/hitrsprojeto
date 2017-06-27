<?php
    include '../model/Queryes.php';
    include '../model/ConectionFactory.php';
    
    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);
    
   $usuario = new Usuario();
    
    $usuario->setId($request->id);
    $usuario->setNome($request->nome);
    $usuario->setSobrenome($request->sobrenome);
    $usuario->setEmail($request->email);
    $usuario->setLogin($request->login);
    $usuario->setSenha($request->senha);
    
    //var_dump($request->id);
    
    $queryes = new Queryes();
    
    //echo $queryes->atualizarPerfil($usuario);
    
    $conection = new ConectionFactory();
    
    $conection->getConection()->query($queryes->atualizarPerfil($usuario));

?>