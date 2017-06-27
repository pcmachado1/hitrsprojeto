angular.module('welcomeApp', ['dataGrid', 'pagination','ngMaterial','ngMessages','ngFileUpload'])
        .run(function(){
        console.log('Funcionando!')
        
      
    }).controller('welcomeCtrl',function($scope,$http,$window,$mdDialog,Upload,$timeout){
    	$scope.login = {
                        usuario: '',
                        senha:''
                        
                        };
        $scope.sessao = {
            
                        };
           
        
        
    	$scope.metodoSession= function(teste)
                              {
                                  
                                 var request = $http({
                                     method:'POST',
                                     url:'../controller/WelcomeController.php',
                                     data:teste
                                 });
                                 request.then(
                                                function(response)
                                                {
                                                   
                                                 console.log(response.data);
                                                 $scope.sessao = response.data;
                                                },
                                                function(error)
                                                {

                                                }
                                              );
                              };
        $scope.uploadFilesPerfil = function(file,errFiles){
            //console.log(file);
            file.upload = Upload.upload({
                url:"../controller/UploadController.php",
                data:{file:file}
            });
            file.upload.then(function(response){
                $timeout(function(){
                    //console.log(response.data);
                    $scope.ctrl.items.image = response.data;
                    //console.log($scope);
                    //$scope.sessao.image = response.data;
                });
            });
        };  
        $scope.uploadFilesUsuario = function(file,errFiles){
            //console.log(file);
            file.upload = Upload.upload({
                url:"../controller/UploadUsuarioController.php",
                data:{file:file,usuario:$scope.ctrlEditUser.items}
            });
            file.upload.then(function(response){
                $timeout(function(){
                    console.log(response.data);
                    $scope.ctrlEditUser.items.image = response.data;
                    console.log($scope);
                    //$scope.sessao.image = response.data;
                });
            });
        }; 
       $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
            };
    //modals 
       
       $scope.atualizarPerfilModal = function ($event) {
            
    var parentEl = angular.element(document.querySelector('md-content'));
    alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      template:
        '<md-dialog-actions layout="row " layout-gt-md aria-label="Sample Dialog">' +
       
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Nome</label>'+
        '       <input name="txtUsuario" required ng-model="ctrl.items.nome" md-no-asterisk />'+
        '    <div ng-messages="loginForm.txtUsuario.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '   </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Sobrenome</label>'+
        '       <input name="txtUsuario" required ng-model="ctrl.items.sobrenome" md-no-asterisk />'+
        '    <div ng-messages="loginForm.txtUsuario.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '   </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Email</label>'+
        '       <input name="txtUsuario" required ng-model="ctrl.items.email" md-no-asterisk />'+
        '    <div ng-messages="loginForm.txtUsuario.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '   </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Login</label>'+
        '        <input name="txtSenha" required ng-model="ctrl.items.login" md-no-asterisk />'+
        '   <div ng-messages="loginForm.txtSenha.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '    <div>{{msg}}</div>'+
        '    </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Senha</label>'+
        '        <input name="txtSenha" required ng-model="ctrl.items.senha" md-no-asterisk />'+
        '   <div ng-messages="loginForm.txtSenha.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '    <div>{{msg}}</div>'+
        '    </md-input-container>'+
        '   <md-input-container md-no-float md-is-error="false" class="md-block flex-gt-xs flex-xs">'+
        '<md-button class="md-raised md-primary" type="file" ng-model="ctrl.items.image" ngf-select="uploadFilesPerfil($file,$invalidFiles)" accept="image/*">Atualizar Imagem</md-button>'+
        '   <div ng-messages="loginForm.txtImage.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '    <div>{{msg}}</div>'+
        '    </md-input-container>'+
        '    <div layout="row">'+
        '    <md-button ng-click="ctrl.closeDialog()">' +
        '      Fecha' +
        '    </md-button>' +
        '   <md-button ng-click="ctrl.atualizarPerfilData()">' +
        '      Confirma' +
        '    </md-button>' +
        '    </div>'+
        '</md-dialog-actions>',
        locals: {
          items: $scope.sessao,
          closeDialog: $scope.closeDialog,
          atualizarPerfilData: $scope.atualizarPerfilData
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'welcomeCtrl'
    });
      
    //console.log(alert._options.locals.items);
    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  
                };
    $scope.atualizarUsuario = function ($event,item) {
     //console.log(item);  
     
     var parentEl = angular.element(document.querySelector('body'));
     //console.log(parentEl);
     
     //console.log($scope.usuario);
     alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      template:
        '<md-dialog-actions layout="column " layout-gt-md aria-label="Sample Dialog">' +
       
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Nome</label>'+
        '       <input name="txtUsuario" required ng-model="ctrlEditUser.items.nome" md-no-asterisk />'+
        '    <div ng-messages="loginForm.txtUsuario.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '   </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Sobrenome</label>'+
        '       <input name="txtUsuario" required ng-model="ctrlEditUser.items.sobrenome" md-no-asterisk />'+
        '    <div ng-messages="loginForm.txtUsuario.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '   </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Email</label>'+
        '       <input name="txtUsuario" required ng-model="ctrlEditUser.items.email" md-no-asterisk />'+
        '    <div ng-messages="loginForm.txtUsuario.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '   </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Login</label>'+
        '        <input name="txtSenha" required ng-model="ctrlEditUser.items.login" md-no-asterisk />'+
        '   <div ng-messages="loginForm.txtSenha.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '    <div>{{msg}}</div>'+
        '    </md-input-container>'+
        '   <md-input-container class="md-block" flex-gt-sm>'+
        '        <label>Senha</label>'+
        '        <input name="txtSenha" required ng-model="ctrlEditUser.items.senha" md-no-asterisk />'+
        '   <div ng-messages="listarUsuarios.txtSenha.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '    <div>{{msg}}</div>'+
        '    </md-input-container>'+
        '   <md-input-container md-no-float md-is-error="false" class="md-block flex-gt-xs flex-xs">'+
        '<md-button class="md-raised md-primary" type="file" ng-model="ctrl.items.image" ngf-select="uploadFilesUsuario($file,$invalidFiles)" accept="image/*">Atualizar Imagem</md-button>'+
        '   <div ng-messages="loginForm.txtImage.$error" style="color:maroon" role="alert">'+
        '      <div ng-message="required">Preencha o campo</div>'+
        '    </div>'+
        '    <div>{{msg}}</div>'+
        '    </md-input-container>'+
        '    <div layout="row">'+
        '    <md-button ng-click="ctrlEditUser.closeDialog()">' +
        '      Fecha' +
        '    </md-button>' +
        '   <md-button ng-click="ctrlEditUser.atualizarUsuarioData(ctrlEditUser.items)">' +
        '      Confirma' +
        '    </md-button>' +
        '    </div>'+
        '</md-dialog-actions>',
        locals: {
          items: item,
          closeDialog: $scope.closeDialog,
          atualizarUsuarioData: $scope.atualizarUsuarioData
        },
        bindToController: true,
        controllerAs: 'ctrlEditUser',
        controller: 'welcomeCtrl'
    });
    
    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  
                }; 
    $scope.excluirUsuarioModal = function($event,item){
         var parentEl = angular.element(document.querySelector('body'));
     //console.log(parentEl);
     
     //console.log($scope.usuario);
     alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      template:
        '<md-dialog-actions layout="column " layout-gt-md aria-label="Sample Dialog">' +
        '    <label>Deseja Realmente modificar o status do usuario ?'+
        '    <div layout="row">'+
        '    <md-button ng-click="ctrlDeleteUser.closeDialog()">' +
        '      Não' +
        '    </md-button>' +
        '   <md-button ng-click="ctrlDeleteUser.excluirUsuarioData(ctrlDeleteUser.items)">' +
        '      Sim' +
        '    </md-button>' +
        '    </div>'+
        '</md-dialog-actions>',
        locals: {
          items: item,
          closeDialog: $scope.closeDialog,
          excluirUsuarioData: $scope.excluirUsuarioData
        },
        bindToController: true,
        controllerAs: 'ctrlDeleteUser',
        controller: 'welcomeCtrl'
    });
    
    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  
    };
    //end modals            
    $scope.closeDialog = function() {
            $mdDialog.hide();
            };
    $scope.excluirUsuarioData = function(item){
            console.log(item);
            var request = $http({
                                     method:'POST',
                                     url:'../controller/ExcluirUsuarioController.php',
                                     data:item
                                 });
                                 request.then(
                                                function(response)
                                                {
                                                 console.log(response.data);
                                                 //item.status = "Inativo";
                                                 
                                                 //$window.location.href = 'usuarios';
                                                 //$scope.sessao = response.data;
                                                 $scope.closeDialog();
                                                },
                                                function(error)
                                                {

                                                }
                                              );
    };        
    $scope.atualizarUsuarioData = function(item){
            console.log(item);
            var request = $http({
                                     method:'POST',
                                     url:'../controller/AtualizarUsuarioController.php',
                                     data:item
                                 });
                                 request.then(
                                                function(response)
                                                {
                                                 console.log(response.data);
                                                 //$scope.sessao = response.data;
                                                 $scope.closeDialog();
                                                },
                                                function(error)
                                                {

                                                }
                                              );
    };    
    $scope.atualizarPerfilData = function(){
            console.log(angular.element(document.querySelector('.txtImage')));
            var request = $http({
                                     method:'POST',
                                     url:'../controller/AtualizarPerfilController.php',
                                     data:$scope.sessao
                                 });
                                 request.then(
                                                function(response)
                                                {
                                                 console.log(response.data);
                                                 //$scope.sessao = response.data;
                                                 $scope.closeDialog();
                                                },
                                                function(error)
                                                {

                                                }
                                              );
    };
    $scope.logout = function(teste){
            var request = $http({
                                     method:'POST',
                                     url:'../controller/LogoutController.php',
                                     data:teste
                                 });
                                 request.then(
                                                function(response)
                                                {
                                                 console.log(response.data);
                                                 $scope.sessao = response.data;
                                                 $window.location.href = 'http://hirts.com.br';
                                                },
                                                function(error)
                                                {

                                                }
                                              );
    };
    $scope.listarUsuarios = function(){
            console.log("testeUsuarios");
            $window.location.href = 'usuarios';	
    };
    $scope.home = function(){
            $window.location.href = 'welcome';	
    };
    $scope.gridOptions = {
            data: [],
            urlSync: true
    };
    $scope.lista = function(){
            var request = $http({
                                     method:'POST',
                                     url:'../controller/ListarUsuariosController.php'
                                 });
            request.then(
                           function(response)
                           {
                            console.log(response.data);
                            $scope.usuario = response.data;
                            $scope.gridOptions.data = response.data;
                           },
                           function(error)
                           {

                           }
                         );
    };
}).config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': '#839ccf',
        '100': '#718dc8',
        '200': '#5f7ec1',
        '300': '#4c70ba',
        '400': '#4264aa',
        '500': '#3b5998',
        '600': '#344e86',
        '700': '#2d4373',
        '800': '#263961',
        '900': '#1e2e4f',
        'A100': '#96abd6',
        'A200': '#a8b9dd',
        'A400': '#bbc8e4',
        'A700': '#17233c',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50','100','200','300','400','600','700','800','900','A100',
                            'A200','A400','A700'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName')
    .accentPalette('blue')
    .warnPalette('red')
    ;
    //.backgroundPalette('amazingPaletteName')
});