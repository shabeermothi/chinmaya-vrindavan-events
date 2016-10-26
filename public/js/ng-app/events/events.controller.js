(function () {
    'use strict';

    var eventsApp = angular.module("eventsApp");

    eventsApp.controller('HomeController', ['$rootScope', '$scope', '$window', function ($rootScope, $scope, $window){
        if ($window.sessionStorage.token) {
            $scope.showLogin = true;
            $scope.userDetails = {name: $window.sessionStorage.userDetails};
        }

        $rootScope.$on('home.login', function (event, args) {
            $scope.showLogin = true;
            $scope.userDetails = args[0];
        });

        $rootScope.$on('home.logout', function (event, args) {
            $scope.showLogin = false;
        });
    }]);

})();
