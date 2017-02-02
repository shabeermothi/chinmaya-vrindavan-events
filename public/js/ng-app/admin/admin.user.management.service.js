(function () {
    'use strict';

    angular.module('events.admin')
        .factory('ManageUserService', ManageUserService);

    ManageUserService.$inject = ['$http', '$log', '$window'];

    function ManageUserService ($http, $log, $window) {
        return {
            getUsers: getUsers,
            deleteUser: deleteUser,
            updateUserDetails: updateUserDetails,
            getUserSubscriptions: getUserSubscriptions,
            unsubscribe: unsubscribe
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

        function getUserSubscriptions (userId) {
            return $http({
                method: 'GET',
                url: '/user-events/' + userId + '/' + $window.sessionStorage.token
            }).then(function (response) {
                return response.data;
            });
        }

        function unsubscribe (event) {
            return $http({
                method: 'DELETE',
                url: '/user-events/' + event.eventId + '/' + event.userId + '/' + event.childId
            });
        }
    }
}());