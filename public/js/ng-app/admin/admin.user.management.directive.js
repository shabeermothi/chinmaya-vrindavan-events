(function () {
    'use strict';

    angular.module('events.admin')
        .directive('manageUsers', userMgmtDirective)
        .factory('ManageUserService', ManageUserService);

    ManageUserService.$inject = ['$http', '$log'];

    function userMgmtDirective () {
        UserMgmtDirectiveCtrl.$inject = ['$scope', '$log', 'ManageUserService'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/user-management/user-management.html',
            controller: UserMgmtDirectiveCtrl,
            controllerAs: 'vm'
        };

        function UserMgmtDirectiveCtrl ($scope, $log, ManageUserService) {
            var vm = this;

            getUsers();

            vm.deleteUser = function (userId) {
                ManageUserService.deleteUser(userId).then(function () {
                    getUsers();
                });
            };

            function getUsers () {
                ManageUserService.getUsers().then(function (response) {
                    vm.users = response;
                });
            }
        }
    }

    function ManageUserService ($http, $log) {
        return {
            getUsers: getUsers,
            deleteUser: deleteUser
        };
        
        function getUsers () {
            return $http({
                method: 'GET',
                url: '/users'
            }).then(function (response) {
                return response.data;
            });
        }
        
        function deleteUser (userId) {
            return $http({
                method: 'DELETE',
                url: '/users/' + userId
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();