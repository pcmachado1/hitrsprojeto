<?php

include '../model/ConectionFactory.php';

$conection = new ConectionFactory();

$query = "select * from usuario";

$result = $conection->getConection()->query($query);

var_dump($result->fetchAll());

//var_dump($conection->getConection()->query($query));





