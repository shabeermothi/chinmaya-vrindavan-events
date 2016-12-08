(function () {
    'use strict';

    var eventsApp = angular.module("eventsApp", ['ui.bootstrap', 'ui.router', 'uuid', 'growlNotifications', 'events.admin', 'formly', 'formlyBootstrap', 'eda.easyformGen.stepway', 'eda.easyFormViewer']);

    eventsApp.config(function($stateProvider, $urlRouterProvider, easyFormSteWayConfigProvider) {
        easyFormSteWayConfigProvider.showPreviewPanel(true);
        //show/hide models in preview panel => default is true
        easyFormSteWayConfigProvider.showPreviewModels(true);

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: ['$scope', function ($scope) {
                    $scope.test = true;

                    $scope.callFn = function () {
                        alert("called");
                        $scope.test = false;
                    };
                }]
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: ['$rootScope', '$scope', '$http', '$window', '$state', function ($rootScope, $scope, $http, $window, $state) {
                    $scope.register = false;
                    $scope.toggleRegister = function () {
                        $scope.register = !$scope.register;
                    };

                    $scope.loginUser = function (email, password) {
                        var userData = {
                            "email": email,
                            "password": password
                        };

                        $http({
                            method: 'POST',
                            url: '/login',
                            data: userData
                        }).then(function (response) {
                            if (response.data.token) {
                                $scope.invalidUserLogin = false;
                                $window.sessionStorage.token = response.data.token;
                                $window.sessionStorage.userDetails = response.data.data[0].name;
                                $window.sessionStorage.isAdmin = response.data.data[0].isAdmin;
                                $window.sessionStorage.userId = response.data.data[0]._id;
                                $rootScope.$broadcast('home.login', response.data.data);
                                $state.go('home');
                            } else {
                                console.warn("User not authenticated to login!");
                                $scope.invalidUserLogin = true;
                            }
                        }, function error (error) {
                            console.warn("User not authenticated to login!");
                            $scope.invalidUserLogin = true;
                        });
                    };

                    $scope.registerUser = function (user) {
                        user.isAdmin = false;

                        $http({
                            method: 'POST',
                            url: '/users',
                            data: user
                        }).then(function (response) {
                            if (response.data.token) {
                                $window.sessionStorage.token = response.data.token;
                                $window.sessionStorage.userDetails = response.data.data[0].name;
                                $window.sessionStorage.userId = response.data.data[0]._id;
                                $rootScope.$broadcast('home.login', response.data.data);
                                $state.go('home');
                            } else {
                                console.warn("Registration of User failed!");
                                $scope.invalidRegisterLogin = true;
                            }
                        }, function error (error) {
                            console.warn("User exists!");
                            $scope.invalidRegisterLogin = true;
                        });
                    };
                }]
            })
            .state('events', {
                url: '/events',
                templateUrl: 'partials/events-list.html',
                controller: ['$window', '$scope', '$http', '$state', function ($window, $scope, $http, $state) {
                    $http({
                        method: 'GET',
                        url: '/events'
                    }).then(function (response) {
                        $scope.events = response.data;

                        if ($window.sessionStorage.token) {
                            $scope.canSubscribe = true;
                        }

                        $scope.subscribeEvent = function (event) {
                            event.cannotSubscribe = true;
                            var userEvent = {
                                eventId: event._id,
                                userId: $window.sessionStorage.userId
                            };

                            $http({
                                method: 'POST',
                                url: '/user-events' + '/' + $window.sessionStorage.token,
                                data: userEvent
                            }).then(function () {
                                $state.go('userSubscriptions');
                            });
                        };
                    });
                }]
            })
            .state('events.subscription', {
                url: '/:eventId',
                templateUrl: 'partials/events/subscribe/home.html',
                controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                    $scope.eventId = $stateParams.eventId;
                }]
            })
            .state('events.details', {
                url: '/details/:eventId/:childId',
                templateUrl: 'partials/events/subscribe/event-details-home.html',
                controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                    $scope.eventId = $stateParams.eventId;
                    $scope.childId = $stateParams.childId;
                }]
            })
            .state('events.subscription.success', {
                url: '/details/:eventName',
                templateUrl: 'partials/events/subscribe/success.html',
                controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                    $scope.eventName = $stateParams.eventName;
                }]
            })
            .state('userSubscriptions', {
                url: '/user-events',
                templateUrl: 'partials/user-events-list.html',
                controller: ['$window', '$scope', '$http', '$state', function ($window, $scope, $http, $state) {
                    $http({
                        method: 'GET',
                        url: '/events'
                    }).then(function (response) {

                        var events = [];

                        $http({
                            method: 'GET',
                            url: '/user-events/' + $window.sessionStorage.userId + '/' + $window.sessionStorage.token
                        }).then(function (userEventsReponse) {
                            for (var x in response.data) {
                                for (var y in userEventsReponse.data) {
                                    if (response.data[x]._id === userEventsReponse.data[y].eventId) {
                                        events.push(response.data[x]);
                                    }
                                }
                            }

                            $scope.events = events;
                        });
                    });

                    $scope.unsubscribeEvent = function (event) {
                        $http({
                            method: 'DELETE',
                            url: '/user-events/' + event._id + '/' + $window.sessionStorage.userId + '/' + $window.sessionStorage.token
                        }).then(function () {
                            for (var i=0; i<$scope.events.length; i++) {
                                if ($scope.events[i]._id === event._id) {
                                    $scope.events.splice(i, 1);
                                }
                            }
                        });
                    };
                }]
            })
            .state('updateProfile', {
                url: '/user/profile',
                templateUrl: 'partials/user-profile.html',
                controller: ['$window', '$scope', '$http', '$state', 'uuid', function ($window, $scope, $http, $state, uuid) {
                    $http({
                        method: 'GET',
                        url: '/users/' + $window.sessionStorage.userId
                    }).then(function (response) {
                        $scope.userDetails = response.data;
                        if (!$scope.userDetails.familyDetails) {
                            $scope.userDetails.familyDetails = [];
                            $scope.userDetails.familyDetails.push({
                                id: uuid.new(),
                                name: "",
                                role: "",
                                grade: ""
                            });
                        }
                    });

                    $scope.addNewChoice = function () {
                        $scope.userDetails.familyDetails.push({
                            id: uuid.new(),
                            name: "",
                            role: "",
                            grade: ""
                        });
                    };

                    $scope.removeChoice = function (familyDetails) {
                        for (var i=0; i< $scope.userDetails.familyDetails.length; i++) {
                            if ($scope.userDetails.familyDetails[i].id === familyDetails.id) {
                                $scope.userDetails.familyDetails.splice(i, 1);
                            }
                        }
                    };

                    $scope.updateProfile = function () {
                        $http({
                            method: 'PUT',
                            url: '/users/' + $window.sessionStorage.userId,
                            data: $scope.userDetails
                        }).then(function (response) {
                            $scope.profileUpdated = true;
                        }, function error (error) {
                            $scope.profileUpdated = false;
                            growl.error("Error occurred while updating profile. Try again later!");
                        });
                    };
                }]
            })
            .state('logout', {
                url: '/logout',
                controller: ['$rootScope', '$scope', '$window', '$state', function ($rootScope, $scope, $window, $state) {
                    $window.sessionStorage.clear();
                    $rootScope.$broadcast('home.logout');
                    $state.go('home');
                }]
            })
            .state('newEvent', {
                url: '/events/new',
                templateUrl: 'partials/events-new.html',
                controller: ['$scope', '$http', function ($scope, $http) {
                    $scope.saveEvent = function (user) {
                        $http({
                            method: 'POST',
                            url: '/events',
                            data: user
                        }).then(function () {
                            $scope.eventCreated = true;
                        });
                    };
                }]
            })
            .state('eventDetails', {
                url: '/events/:id',
                templateUrl: 'partials/event-details.html',
                controller: ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {
                    $http({
                        method: 'GET',
                        url: '/events/' + $stateParams.id
                    }).then(function (response) {
                        $scope.event = response.data;
                    });

                    $scope.deleteEvent = function () {
                        $http({
                            method: 'DELETE',
                            url: '/events/' + $stateParams.id
                        }).then(function () {
                            $state.go('events');
                        });
                    }
                }]
            })
            .state('admin', {
                url: '/events/admin/login',
                templateUrl: 'partials/admin/login.html'
            });
    });

})();
