
angular.module('app.cliente',['ngNewRouter'])
    .controller('ClienteController', function($scope, $http){

    $scope.clientes = {};//Lista de clientes que estão vinculados a tela
    $scope.cliente = {};//Objeto de cliente vinculado a tela
    $scope.estados= [];//Objeto de lista de estado vinculado a tela
    $scope.estado= [];//Objeto de estado vinculado ao cliente




   $scope.listar = function(){
       $http.get("ws/cliente/lista").success(function(dados){
           $scope.clientes = dados;
       });
   };

    //metodo salvar cliente
    $scope.salvar = function(){
        $scope.cliente.estado= $scope.estado;
       $http.post("ws/cliente/salvar", $scope.cliente).success(function(dados){
           window.alert("salvo com sucesso");
           $scope.cliente= {};
           $scope.listar();
       });

    };

    $scope.listar();

    $scope.excluir =  function (id){$http.delete("ws/cliente/excluir/"+ id).success(function (){ $scope.listar(); });};


    $scope.editar = function(cliente){

        $scope.cliente = cliente;

    }

    $scope.listarEstados = function(){
        $http.get('./ws/estado/listar').success(function (dados){
            $scope.estados = dados;
        });
    };

        $scope.listarEstados();

});
