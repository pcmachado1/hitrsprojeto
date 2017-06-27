<?php

    include '../model/Queryes.php';
    include '../model/ConectionFactory.php';

    $post = $_POST['usuario']['login'];
    //var_dump($_POST['usuario']);
    //var_dump($_FILES['file']);


    move_uploaded_file($_FILES['file']['tmp_name'],"../images/".$_POST['usuario']['login']."".date("dmyHi").".jpg");
    $_SESSION['userSession']['image'] = "".$_POST['usuario']['login']."".date("dmyHi").".jpg" ;
    echo $_SESSION['userSession']['image'];
    //var_dump($_SESSION['userSession']);
    
    $usuario = new Usuario();
    
    $usuario->setImage($_SESSION['userSession']['image']);
    $usuario->setId($_POST['usuario']['id']);
    
    $queryes = new Queryes();
    
    $conection = new ConectionFactory();
    
    $conection->getConection()->query($queryes->atualizarImagem($usuario));
    