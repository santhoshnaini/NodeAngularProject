//this is for route config
(function () {
    angular.module('nodeApp').config(routes);
    routes.$inject = ["$stateProvider", "$urlRouterProvider"];
    function routes($stateProvider, $urlRouterProvider) {


        $stateProvider.state("login", {
            url: '/',
            templateUrl: 'templates/login/login.html',
            controller: 'loginController'
        })
            .state("home", {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
        $urlRouterProvider.otherwise("/");

    };
})();

