(function () {
    'use strict';

    var eventsAdminApp = angular.module('events.admin', []);

    eventsAdminApp.config(function($stateProvider) {
       $stateProvider
           .state('addEvent', {
                url: '/events/admin/add',
                templateUrl: 'partials/admin/add-event/add-an-event-home.html'
           })
           .state('manageUsers', {
                url: '/users/admin',
                templateUrl: 'partials/admin/user-management/home.html'
           })
           .state('manageUsers.editUser', {
                url: '/:userId',
                templateUrl: 'partials/admin/user-management/edit-user.html',
                controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                    $scope.userId = $stateParams.userId;
                }]
           });
    });
})();