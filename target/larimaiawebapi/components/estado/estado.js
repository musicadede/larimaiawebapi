/**
 * Created by andré on 07/12/2015.
 */



angular.module('app.estado',['ngMaterial'])
    .controller('estadoController', function ($scope, $http) {

        $scope.listaEstado= []; //Lista de estado vinculadas a tela
        $scope.estado= {}; // Objeto estado Vinculado a tela (Form)
        $scope.estado= {}; // Objeto estado Vinculado a tela (Form)


        $scope.listar = function () {

            $http.get('./ws/estado/listar').success(function (dados) {
                $scope.listaEstado = dados;
            });
        };

        $scope.salvar = function (){

            $http.post('./ws/estado/salvar', $scope.estado).success(function (dados){

                window.alert("Sucesso ao salvar!");
                $scope.estado= {};
                $scope.listar();
            });

        };

        $scope.excluir =  function (idC){
            $http.delete('./ws/estado/excluir/'+ idC,{}).success(function (){
                window.alert("Sucesso ao excluir!");
                $scope.estado= {};
                $scope.listar();
            });

        };

        $scope.editar = function (estado){
            $scope.estado = estado;
        }

        $scope.limpar = function () {
            $scope.estado = {};
        }

        $scope.listar(); //carregando inicialmente


    });
