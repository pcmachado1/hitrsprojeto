(function() {

  'use strict';

  angular
    .module('app')
    .controller('UiController', UiController);

  UiController.$inject = ['$scope','$http'];
  
  

  function UiController($scope,$http) {
    var vm = this;

    vm.sides = {
      all: [],
      current: 0
    };
    
    
    //
       function listarUsuarios(){
            var request = $http({
                                     method:'POST',
                                     url:'../controller/ListarUsuariosController.php'
                                 });
            request.then(
                           function(response)
                           {
                            console.log(response.data);
                            $scope.usuario = response.data;
                            
                            for (var i = 0; i < $scope.usuario.length; i++) {
                                vm.sides.all.push({
                                  image: '/images/'+$scope.usuario[i].image,
                                  title: 'Side' + (i + 1),
                                  listItems: [''+$scope.usuario[i].nome+'', ''+$scope.usuario[i].sobrenome+'', 'Attribute 3']
                                });
                              }
                            //$scope.gridOptions.data = response.data;
                           },
                           function(error)
                           {

                           }
                         );
    };
    //
    listarUsuarios();
   
    

    vm.controls = {
      increase: increase,
      decrease: decrease
    };
    
    
    $scope.$watch('vm.sides.current', function() {
      console.log('Current Index:', vm.sides.current);
      
      console.log($scope.usuario);
    });

    function increase() {
      vm.sides.all.push({
        image: 'img/guest.png',
        title: 'Side' + (vm.sides.all.length + 1),
        listItems: ['Attribute 1', 'Attribute 2', 'Attribute 3']
      });
    }

    function decrease() {
      vm.sides.all.splice(vm.sides.all.length - 1, 1);
    }
  }

})();
