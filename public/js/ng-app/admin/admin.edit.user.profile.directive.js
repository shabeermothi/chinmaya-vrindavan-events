(function () {
    'use strict';

    angular.module('events.admin')
        .directive('editUserProfile', editUserProfileDirective);

    function editUserProfileDirective () {
        EditUserProfileDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'EditUserService'];

        return {
            restrict: 'A',
            scope: {
                userId: '='
            },
            templateUrl: 'partials/admin/user-management/edit-user.html',
            controller: EditUserProfileDirectiveCtrl,
            controllerAs: 'vm'
        };

        function EditUserProfileDirectiveCtrl($scope, $log, $timeout, EditUserService) {
            var vm = this;

            EditUserService.getUserDetails($scope.userId).then(function (response) {
                vm.userDetails = response;
            });

            vm.updateProfile = function () {
                EditUserService.updateUserProfile(vm.userDetails).then(function () {
                    EditUserService.navigateToManageUsers();
                });
            };
        }
    }

})();
