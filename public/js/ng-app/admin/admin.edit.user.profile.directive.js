(function () {
    'use strict';

    angular.module('events.admin')
        .directive('editUserProfile', editUserProfileDirective);

    function editUserProfileDirective () {
        EditUserProfileDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'EditUserService', 'uuid'];

        return {
            restrict: 'A',
            scope: {
                userId: '='
            },
            templateUrl: 'partials/admin/user-management/edit-user.html',
            controller: EditUserProfileDirectiveCtrl,
            controllerAs: 'vm'
        };

        function EditUserProfileDirectiveCtrl($scope, $log, $timeout, EditUserService, uuid) {
            var vm = this;

            EditUserService.getUserDetails($scope.userId).then(function (response) {
                vm.userDetails = response;
            });

            vm.updateProfile = function () {
                EditUserService.updateUserProfile(vm.userDetails).then(function () {
                    EditUserService.navigateToManageUsers();
                });
            };

            vm.addNewChoice = function () {
                if (vm.userDetails.familyDetails) {
                    vm.userDetails.familyDetails.push({
                        id: uuid.new(),
                        name: "",
                        role: "",
                        grade: ""
                    });
                } else {
                    vm.userDetails.familyDetails = [];
                    vm.userDetails.familyDetails.push({
                        id: uuid.new(),
                        name: "",
                        role: "",
                        grade: ""
                    });
                }

            };

            vm.removeChoice = function (familyDetails) {
                for (var i=0; i< vm.userDetails.familyDetails.length; i++) {
                    if (vm.userDetails.familyDetails[i].id === familyDetails.id) {
                        vm.userDetails.familyDetails.splice(i, 1);
                    }
                }
            };
        }
    }

})();
