(function () {
    'use strict';

    angular.module('events.admin')
        .directive('manageUsers', userMgmtDirective);

    function userMgmtDirective () {
        UserMgmtDirectiveCtrl.$inject = ['$scope', '$log', 'ManageUserService', '$uibModal', 'SubscribeEventService'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/user-management/user-management.html',
            controller: UserMgmtDirectiveCtrl,
            controllerAs: 'vm'
        };

        function UserMgmtDirectiveCtrl ($scope, $log, ManageUserService, $uibModal, SubscribeEventService) {
            var vm = this;
            vm.currentPage = 0;
            vm.pageSize = 5;
            vm.numberOfPages = function () {
                return 1;
            };

            getUsers();

            vm.viewSubscriptions = function (size, userObj) {
                $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'partials/admin/user-management/subscription-details.html',
                    controller: 'SubscriptionCtrl',
                    controllerAs: 'subscriptionCtrl',
                    size: size,
                    resolve: {
                        userObj: function () {
                            return userObj
                        }
                    }
                });
            };

            vm.removeHealthDoc = function (fileName) {
                ManageUserService.removeHealthDoc(fileName);
            };

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
})();
