<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HomeController
 *
 * @author root
 */

//require_once '../model/ConectionFactory.php';
class HomeController {
    
    public function __construct() {
        
    }
    public function callLogin() {
        header("location:http://localhost/dozero/view/Login.php");
    }

}
