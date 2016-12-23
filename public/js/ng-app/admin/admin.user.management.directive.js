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
            vm.currentPage = 0;
            vm.pageSize = 5;
            vm.numberOfPages = function () {
                return 1;
            };

            getUsers();

            vm.deleteUser = function (userId) {
                ManageUserService.deleteUser(userId).then(function () {
                    getUsers();
                });
            };

            function getUsers () {
                ManageUserService.getUsers().then(function (response) {
                    vm.users = response;

                    vm.currentPage = 0;
                    vm.pageSize = 5;
                    vm.numberOfPages=function(){
                        return Math.ceil(vm.users.length/vm.pageSize);
                    };
                });
            }

            vm.toggleAdmin = function (userId) {
                ManageUserService.updateUserDetails(userId).then(function () {
                    getUsers();
                });
            };
        }
    }

    function ManageUserService ($http, $log) {
        return {
            getUsers: getUsers,
            deleteUser: deleteUser,
            updateUserDetails: updateUserDetails
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

        function updateUserDetails (userId) {
            return $http({
                method: 'GET',
                url: '/users/' + userId
            }).then(function (response) {
                var userDetails = response.data;
                userDetails.isAdmin = !userDetails.isAdmin;

                return $http({
                    method: 'PUT',
                    url: '/users/' + userId,
                    data: userDetails
                }).then(function (response) {
                    return response.data;
                });
            });
        }
    }
})();
