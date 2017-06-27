angular.module('app', ['ngMaterial','ngMessages','ngFileUpload'])
        .run(function(){
        console.log('Funcionando!')
        
      
    }).controller('teste',function($scope,$http,$window,$timeout,Upload){
    	 $scope.login = {
                        usuario: '',
                        senha:''
                        
                        };
                    
    	$scope.metodoTeste = function(object)
        {
                
                
               var request = $http({
                    method:'POST',
                    url:'../hirts/controller/teste.php',
                    data:object
                });
                
                //console.log(request);
                request.then(
                        function(response)
                            {
                                //console.log(response)
                                if(response.data == 'true')
                                { $window.location.href = '?page=welcome';}
                                else
                                { 
                                    $scope.msg = "Não foi possivel logar !";
                                    $timeout(function () {
                                             $scope.esconderMensagem = true;
                                             $scope.msg = "";
                                            },
                                            1000);
                                    }
                            },
                        function(error)
                            {
                                console.log(error);
                            }
                        );
        };
        $scope.metodoTeste1 = function(teste){
                
               var request = $http({
                    method:'POST',
                    url:'../hirts/controller/teste.php',
                    data:teste
                });
                request.success(function(data, status, headers, config) {
                    console.log(data);
                });
                
              
    		
    	};
        $scope.metodoTeste2 = function(teste){
            var request = $http.post('../hirts/controller/teste.php',{data:teste});
            console.log();
            request.success(function(data, status, headers, config) {
                    console.log(headers);
                });
            
    	};
        $scope.metodoTeste3 = function(teste){
            //console.log(file);
            teste.upload = Upload.upload({
                url:"../hirts/controller/teste.php",
                data:{file:teste}
            });
            teste.upload.then(function(response){
                $timeout(function(){
                    console.log(response.data);
                    //$scope.ctrl.items.image = response.data;
                    //console.log($scope);
                    //$scope.sessao.image = response.data;
                });
            });
        };  

    });