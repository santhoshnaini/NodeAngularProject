
(function () {


    angular.module('nodeApp').controller("loginController", loginController);
    loginController.$inject = ["$http", "$scope", "appSetting"];
    function loginController($http, $scope, appSetting) {
        $scope.login="loginPage";
        $scope.login_details = function (data) {

        };
    };

})();


