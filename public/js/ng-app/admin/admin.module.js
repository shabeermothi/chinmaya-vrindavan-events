(function () {
    'use strict';

    var eventsAdminApp = angular.module('events.admin', []);

    eventsAdminApp.config(function($stateProvider) {
       $stateProvider
           .state('addEvent', {
                url: '/events/admin/add',
                templateUrl: 'partials/admin/add-event/add-an-event-home.html'
           })
           .state('addEvent.details', {
               url: '/:eventId/:eventName',
               templateUrl: 'partials/admin/add-event/add-event-details-home.html',
               controller: ['$scope', '$stateParams', function($scope, $stateParams) {
                    $scope.eventId = $stateParams.eventId;
                    $scope.eventName = $stateParams.eventName;
               }]
           })
           .state('activeEvents', {
               url: '/events/active',
               templateUrl: 'partials/admin/events-list/active.html',
               controller: ['$scope', '$http', function ($scope, $http) {
                   $http({
                       method: 'GET',
                       url: '/events'
                   }).then(function (response) {
                        $scope.events = response.data;
                   });
               }]
           })
           .state('editEvent', {
               url: '/events/admin/edit/:eventId',
               templateUrl: 'partials/admin/edit-event/edit-an-event-home.html'
           })
           .state('manageEvent', {
               url: '/events/admin/manage-events',
               templateUrl: 'partials/admin/manage-event/manage-an-event-home.html'
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
