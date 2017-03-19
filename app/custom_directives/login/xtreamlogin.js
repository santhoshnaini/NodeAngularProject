(function(){
 angular.module('xtream',[]).directive('xtreamLogin', function () {
    return {
      restrict: 'A', 
      scope: {
         fromDirectiveFn: '=login',
      },
      replace: true,
      templateUrl: 'customDirectives/templates/xtream-login-template.html',
      link: function (scope, elem, attrs) {          
          
            }
      }
 });



})();  