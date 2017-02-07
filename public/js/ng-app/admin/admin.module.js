(function () {
    'use strict';

    var eventsAdminApp = angular.module('events.admin', []);

    eventsAdminApp.config(function($stateProvider) {
       $stateProvider
           .state('addEvent', {
                url: '/events/admin/add',
                templateUrl: 'partials/admin/add-event/add-an-event-home.html',
                controller: ['StateAuth', '$state', function (StateAuth, $state) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
               }]
           })
           .state('addEvent.details', {
               url: '/:eventId/:eventName',
               templateUrl: 'partials/admin/add-event/add-event-details-home.html',
               controller: ['StateAuth', '$state', '$scope', '$stateParams', function(StateAuth, $state, $scope, $stateParams) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
                    $scope.eventId = $stateParams.eventId;
                    $scope.eventName = $stateParams.eventName;
               }]
           })
           .state('addEvent.linkSubEvents', {
               url: '/link/:eventId/:eventName',
               templateUrl: 'partials/admin/add-event/add-event-linksubevent-home.html',
               controller: ['StateAuth', '$state', '$scope', '$stateParams', function(StateAuth, $state, $scope, $stateParams) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
                   $scope.eventId = $stateParams.eventId;
                   $scope.eventName = $stateParams.eventName;
               }]
           })
           .state('activeEvents', {
               url: '/events/active',
               templateUrl: 'partials/admin/events-list/active.html',
               controller: ['StateAuth', '$state', '$scope', '$http', function (StateAuth, $state, $scope, $http) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
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
               templateUrl: 'partials/admin/edit-event/edit-an-event-home.html',
               controller: ['StateAuth', '$state', '$scope', '$stateParams', function (StateAuth, $state, $scope, $stateParams) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
                   $scope.eventId = $stateParams.eventId;
               }]
           })
           .state('editEventDetails', {
               url: '/events/admin/edit-details/:eventId',
               templateUrl: 'partials/admin/edit-event/edit-event-details-home.html',
               controller: ['StateAuth', '$state', '$scope', '$stateParams', function (StateAuth, $state, $scope, $stateParams) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
                   $scope.eventId = $stateParams.eventId;
               }]
           })
           .state('editEvent.linkSubEvents', {
               url: '/:eventName',
               templateUrl: 'partials/admin/edit-event/edit-event-linksubevent-home.html',
               controller: ['StateAuth', '$state', '$scope', '$stateParams', function (StateAuth, $state, $scope, $stateParams) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
                   $scope.eventId = $stateParams.eventId;
                   $scope.eventName = $stateParams.eventName;
               }]
           })
           .state('manageEvent', {
               url: '/events/admin/manage-events',
               templateUrl: 'partials/admin/manage-event/manage-an-event-home.html',
               controller: ['StateAuth', '$state', function (StateAuth, $state) {
                   if (!StateAuth.isAdmin) {
                       $state.go('error');
                   }
               }]
           })
           .state('manageUsers', {
                url: '/users/admin',
                templateUrl: 'partials/admin/user-management/home.html',
                controller: ['StateAuth', '$state', function (StateAuth, $state) {
                    if (!StateAuth.isAdmin) {
                        $state.go('error');
                    }
                }]
           })
           .state('manageUsers.editUser', {
                url: '/:userId',
                templateUrl: 'partials/admin/user-management/edit-user-profile-home.html',
                controller: ['StateAuth', '$state', '$scope', '$stateParams', function (StateAuth, $state, $scope, $stateParams) {
                    if (!StateAuth.isAdmin) {
                        $state.go('error');
                    }
                    $scope.userId = $stateParams.userId;
                }]
           });
    });
})();
