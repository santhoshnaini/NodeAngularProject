(function () {
    angular.module('nodeApp').controller("mainController", mainController);
    mainController.$inject = ["$http", "$scope","appSetting"];
    function mainController($http, $scope,appSetting) {
        $scope.santhosh = "FromMainController";
        $scope.login_details = function (data) {

        };
    };

})();