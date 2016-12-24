(function () {
    'use strict';

    angular.module('events.admin')
        .factory('EditUserService', editUserService);

    editUserService.$inject = ['$http', '$log', '$filter', '$state'];

    function editUserService ($http, $log, $filter, $state) {
        return {
            getUserDetails: getUserDetails,
            updateUserProfile: updateUserProfile,
            navigateToManageUsers: navigateToManageUsers
        };

        function getUserDetails (userId) {
            return $http({
                method: 'GET',
                url: '/users/' + userId
            }).then(function (response) {
                return response.data;
            });
        }

        function updateUserProfile (userDetails) {
            return $http({
                method: 'PUT',
                url: '/users/' + userDetails._id,
                data: userDetails
            });
        }

        function navigateToManageUsers () {
            $state.go('manageUsers');
        }
    }
})();
