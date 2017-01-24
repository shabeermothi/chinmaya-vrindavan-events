(function () {
    'use strict';

    var eventsApp = angular.module("eventsApp", ['ui.bootstrap',
                                                'ui.router',
                                                'uuid',
                                                'growlNotifications',
                                                'events.admin',
                                                'formly',
                                                'formlyBootstrap',
                                                'eda.easyformGen.stepway',
                                                'eda.easyFormViewer',
                                                'angular-zipcode-filter',
                                                'events',
                                                'ngMessages',
                                                'ngFileUpload',
                                                'forgot.password',
                                                'events.payments',
                                                'credit-cards']);

    eventsApp.config(function($stateProvider, $urlRouterProvider, easyFormSteWayConfigProvider) {
        easyFormSteWayConfigProvider.showPreviewPanel(false);
        //show/hide models in preview panel => default is true
        easyFormSteWayConfigProvider.showPreviewModels(false);

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
            .state('resetPassword', {
                url: '/recover-account/reset-password/:userId/:passwordHash',
                templateUrl: 'partials/util/recover-password-home.html',
                controller: ['$state', '$scope', '$http', '$stateParams', function ($state, $scope, $http, $stateParams) {
                    $scope.resetPassword = function (reqPassword) {
                        $http({
                            method: 'POST',
                            url: '/recover-account/' + $stateParams.userId + "/" + $stateParams.passwordHash,
                            data: {newPassword: reqPassword}
                        }).then(function () {
                            $state.go('login');
                        });
                    }
                }]
            })
            .state('forgotPassword', {
                url: '/forgot-password',
                templateUrl: 'partials/util/forgot-password-home.html'
            })
            .state('forgotPassword.success', {
                url: '/success',
                templateUrl: 'partials/util/forgot-password-success.html'
            })
            .state('forgotPassword.failure', {
                url: '/failure',
                templateUrl: 'partials/util/forgot-password-failure.html'
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
                                $window.sessionStorage.userEmail = response.data.data[0].email;
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

                        $scope.currentPage = 0;
                        $scope.pageSize = 5;
                        $scope.numberOfPages=function(){
                            return Math.ceil($scope.events.length/$scope.pageSize);
                        };

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
                params: {
                    price: 0
                },
                templateUrl: 'partials/events/subscribe/success.html',
                controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                    $scope.eventName = $stateParams.eventName;
                    $scope.price = $stateParams.price;
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
                controller: ['$window', '$scope', '$http', '$state', 'uuid', 'Upload',
                    function ($window, $scope, $http, $state, uuid, Upload) {
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

                        $scope.upload = function (file) {
                            $scope.fileName = file.name;
                            Upload.upload({
                                url: '/user-profile/upload/health-docs',
                                data: {file: file}
                            }).then(function (resp) {
                            }, function (resp) {
                                // error
                                console.log("Error occurred ", resp);
                            }, function (evt) {
                                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                if (progressPercentage === 100) {
                                    $scope.userDetails.healthDocRef = file.name;
                                    $scope.updateProfile();
                                }
                            });
                        };

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
                        console.log("Update profile called ", $scope.userDetails);
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

    eventsApp.directive('confirmClick', ['$q', 'dialogModal', function($q, dialogModal) {
        return {
            link: function (scope, element, attrs) {
                var ngClick = attrs.ngClick.replace('confirmClick()', 'true')
                    .replace('confirmClick(', 'confirmClick(true,');

                scope.confirmClick = function(msg) {
                    if (msg===true) {
                        return true;
                    }
                    msg = msg || attrs.confirmClick || 'Are you sure you want to delete?';
                    dialogModal(msg).result.then(function() {
                        scope.$eval(ngClick);
                    });
                    return false;
                };
            }
        }
    }])
    .service('dialogModal', ['$uibModal', function($modal) {
            return function (message, title, okButton, cancelButton) {
                okButton = okButton===false ? false : (okButton || 'Delete');
                cancelButton = cancelButton===false ? false : (cancelButton || 'Cancel');

                var ModalInstanceCtrl = function ($scope, $uibModalInstance, settings) {
                    angular.extend($scope, settings);
                    $scope.ok = function () {
                        $uibModalInstance.close(true);
                    };
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

                var modalInstance = $modal.open({
                    template: '<div class="dialog-modal"> \
                <div class="modal-header" ng-show="modalTitle"> \
                    <h3 class="modal-title">{{modalTitle}}</h3> \
                </div> \
                <div class="modal-body">{{modalBody}}</div> \
                <div class="modal-footer"> \
                    <button class="btn btn-primary" ng-click="ok()" ng-show="okButton">{{okButton}}</button> \
                    <button class="btn btn-warning" ng-click="cancel()" ng-show="cancelButton">{{cancelButton}}</button> \
                </div> \
            </div>',
                    controller: ModalInstanceCtrl,
                    resolve: {
                        settings: function() {
                            return {
                                modalTitle: title,
                                modalBody: message,
                                okButton: okButton,
                                cancelButton: cancelButton
                            };
                        }
                    }
                });

                return modalInstance;
            }
        }]);

    eventsApp.filter('startFrom', function() {
        return function(input, start) {
            start = +start;
            if (input) return input.slice(start);
        }
    });
})();
