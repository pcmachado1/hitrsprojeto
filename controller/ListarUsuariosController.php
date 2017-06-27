<?php
    include '../model/Queryes.php';
    include '../model/ConectionFactory.php';
    
    $query = new Queryes();
    
    $conection = new ConectionFactory();
    
    $result = $conection->getConection()->query($query->listarUsuarios())->fetchAll();
    
    echo json_encode($result);
?>