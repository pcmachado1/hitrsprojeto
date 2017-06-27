angular.module('app', ['ngMaterial','ngMessages','lfNgMdFileInput','ngFileUpload','ngMask','ngMap'])
        .run(function(){
        console.log('Funcionando!')
        
      
    }).controller('teste',function($scope,Upload,$http,$window,$timeout,NgMap){
        
    	 $scope.login = {
                        usuario: '',
                        senha:''
                        
                        };
         $scope.cep = "";
         $scope.email = "";
         $scope.enderecoCompleto = '';
         $scope.rua = '';
         $scope.bairro = '';
         $scope.cidade = '';
         $scope.estado = '';
         $scope.pais = '';
         
         //console.log($window);
        
    	
        $scope.uploadFiles = function(file,errFiles){
            //console.log(file);
            file.upload = Upload.upload({
                url:"../controller/UploadController.php",
                data:{file:file}
            });
            file.upload.then(function(response){
                $timeout(function(){
                    console.log(response.data);
                    file.result = response.data;
                });
            });
        };
        $scope.testeGoogle= function()
                              {
                                  console.log("teste");
                                 var request = $http({
                                     method:'POST',
                                     url:'https://maps.googleapis.com/maps/api/geocode/json?address='+$scope.endereco+'&key=AIzaSyDx7He-zm8s1LfBWoQ_uu-Xum0LPB1yPVE'
                                     
                                 });
                                 request.then(
                                                function(response)
                                                {
                                                 console.log(response.data.results[0].geometry.location);  
                                                 //console.log(response.data.results[0].formatted_address);
                                                 $scope.enderecoCompleto = response.data.results[0].formatted_address;
                                                 $scope.location = response.data.results[0].geometry.location;
                                                 $scope.rua = response.data.results[0].address_components[1].long_name;
                                                 $scope.bairro = response.data.results[0].address_components[2].long_name;
                                                 $scope.cidade = response.data.results[0].address_components[3].long_name;
                                                 $scope.estado = response.data.results[0].address_components[4].long_name;
                                                 $scope.pais = response.data.results[0].address_components[5].long_name;
                                                },
                                                function(error)
                                                {

                                                }
                                              );
                              };
        var vm = this;
        
        
        NgMap.getMap().then(function(map) {
          vm.showCustomMarker= function(evt) {
            map.customMarkers.foo.setVisible(true);
            map.customMarkers.foo.setPosition(this.getPosition());
          };
          vm.closeCustomMarker= function(evt) {
            this.style.display = 'none';
          };
        });

    }).controller('MyCtrl', function($scope,NgMap){
        $scope.endereco='';
        var vm = this;
        
        
        NgMap.getMap().then(function(map) {
          vm.showCustomMarker= function(evt) {
            map.customMarkers.foo.setVisible(true);
            map.customMarkers.foo.setPosition(this.getPosition());
          };
          vm.closeCustomMarker= function(evt) {
            this.style.display = 'none';
          };
        });
      });
    
    
    
    