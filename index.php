<?php

session_start();
 
// Pega a página principal vinda pela URL configurada no .htaccess
    
    header("Cache-Control: no-cache, must-revalidate");
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
    //echo $_GET['page'];
	switch ($_GET['page']) 
	{
                // Home indica a página principal
		case 'teste':
                    //echo "page teste";
                    //var_dump($_SESSION['userSession']);
			include 'view/tst.html';
		break;
                 // Home indica a página principal
		case 'layout':
                    echo "page layout";
                    //var_dump($_SESSION['userSession']);
			include 'view/layout.html';
		break;
                // Home indica a página principal
		case '':
                    header("Cache-Control: no-cache, must-revalidate");
                    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
                    //echo "page vazio";
                    //var_dump($_SESSION['userSession']);
			include 'view/teste.html';
		break; 
            
		
		// Login ¬¬ 
		case 'login':
                        header("Cache-Control: no-cache, must-revalidate");
                        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
			if(isset($_SESSION['userSession']))
			{
				header('location:http://hirts.com.br/login');
			}
			else 
			{   
                            var_dump($_SESSION['userSession']);
                                //echo "page login";
                                //var_dump($_SESSION['userSession']);
				include 'view/teste.html';
			}
		break;
                // Login ¬¬ 
		case 'welcome':
                    var_dump($_SESSION['userSession']['status']);
                        header("Cache-Control: no-cache, must-revalidate");
                        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
                        if($_SESSION['userSession'] == NULL){
                                include 'view/teste.html';
                        }else{

                                switch ($_SESSION['userSession']['perfilnome']) {
                                    case 'administrador':
                                        switch ($_SESSION['userSession']['status']) {
                                            case 'Ativo':
                                                //echo 'administrador'; 
                                                include '../hirts/view/menuAdmin.html';
                                                include '../hirts/view/welcome.html';

                                                break;
                                            case 'Inativo':
                                                echo "Inativo";

                                                break;
                                            default:
                                                break;
                                        }
                                        

                                        break;
                                    case 'comum':
                                        switch ($_SESSION['userSession']['status']) {
                                            case 'Ativo':
                                                //echo 'administrador'; 
                                                include 'view/menu.html';
                                                include 'view/welcome.html';

                                                break;
                                            case 'Inativo':
                                                echo "Inativo";

                                                break;
                                            default:
                                                break;
                                        }
                                        
                                        
                                        break;
                                    default:
                                        break;
                                }
                                //echo "page welcome";
                                //var_dump($_SESSION['userSession']);
                                //echo $_SESSION['userSession'];

                        }
                    break;
                //usuarios
                case 'usuarios':
                        header("Cache-Control: no-cache, must-revalidate");
                        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
                        if($_SESSION['userSession'] == NULL){
                                header('location:http://hirts.com.br/login');
                        }else{
                                switch ($_SESSION['userSession']['perfilnome']) {
                                    case 'administrador':
                                        //echo 'administrador'; 
                                        include 'view/menuAdmin.html';
                                        include 'view/listarUsuarios.html';

                                        break;
                                    case 'comum':
                                        include 'view/menu.html';
                                        include 'view/listarUsuarios.html';
                                        break;
                                    default:
                                        break;
                                }
                                //echo "page welcome";
                                //var_dump($_SESSION['userSession']);


                        }
                    break;
        }
        

?>
