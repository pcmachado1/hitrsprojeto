<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Queryes
 *
 * @author root
 */
include '../model/Usuario.php';
class Queryes {
    private $query;
    
    function __construct() {
        
    }
    
    
    //select * from usuario join usuarioperfil on usuario.id = usuarioperfil.fk_usuario JOIN perfil on perfil.id = usuarioperfil.fk_perfil WHERE usuario.login='pcmachado' and usuario.senha='12345678';
    public function efetuarLogin(Usuario $usuario) {
        $this->query = "select * from usuario join usuarioperfil on usuario.id = usuarioperfil.fk_usuario JOIN perfil on perfil.id = usuarioperfil.fk_perfil WHERE usuario.login = '".$usuario->getLogin().
                "' and usuario.senha='".$usuario->getSenha()."'";
        return $this->query;
    }
    public function atualizarPerfil(Usuario $usuario) {
        $this->query = "UPDATE usuario set nome = '".$usuario->getNome().
                        "' , sobrenome = '".$usuario->getSobrenome().
                        "' , email = '".$usuario->getEmail().
                        "' , login = '".$usuario->getLogin().
                        "' , senha = '".$usuario->getSenha().
                        "' where id = ".$usuario->getId()." ";
        return $this->query;
    }
    public function atualizarImagem(Usuario $usuario) {
        $this->query = "UPDATE usuario set image = '".$usuario->getImage().
                        "' where id = ".$usuario->getId()." ";
        return $this->query;
                           
    }
    public function listarUsuarios() {
       $this->query = "SELECT usuario.*,perfil.perfilnome FROM usuario JOIN usuarioperfil ON usuario.id = usuarioperfil.fk_usuario JOIN perfil ON perfil.id = usuarioperfil.fk_perfil";
       
       return $this->query;
    }
    public function desativarUsuario(Usuario $usuario) {
        $this->query = "UPDATE usuario set status = '".$usuario->getStatus()."' where id = ".$usuario->getId()."" ;
        
        return $this->query;
    }

}
