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
                                                'credit-cards',
                                                'angular-loading-bar', 'ngCsv']);

    eventsApp.provider('StateAuth', function () {
        var isAdmin;
        return {
            setUserType: function (value) {
                isAdmin = value;
            },
            $get: function () {
                return {
                    isAdmin: isAdmin
                };
            }
        }
    });
    eventsApp.factory('EventsInterceptor', EventsInterceptor);

    EventsInterceptor.$inject = ['$window', '$injector', '$rootScope', '$q'];

    function EventsInterceptor ($window, $injector, $rootScope, $q) {
        return {
            request: function (config) {
                config.headers['x-access-token'] = $window.sessionStorage.token;
                return config;
            },
            requestError: function(config) {
                return config;
            },
            response: function(res) {
                return res;
            },
            responseError: function(res) {
                if (res.status === 403) {
                    $window.sessionStorage.clear();
                    $rootScope.$broadcast('home.logout');
                    $injector.get('$state').go('error');
                } else if (res.status === 401) {
                    $window.sessionStorage.clear();
                    $rootScope.$broadcast('home.logout');
                    $injector.get('$state').go('inactiveSession');
                }

                return $q.reject(res);
            }
        }
    }

    eventsApp.config(function($stateProvider, $urlRouterProvider, easyFormSteWayConfigProvider, $httpProvider, StateAuthProvider) {
        easyFormSteWayConfigProvider.showPreviewPanel(false);
        //show/hide models in preview panel => default is true
        easyFormSteWayConfigProvider.showPreviewModels(false);

        $httpProvider.interceptors.push('EventsInterceptor');

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('error', {
                url: '/error/unauthorized',
                templateUrl: 'partials/error-unauthorized.html'
            })
            .state('inactiveSession', {
                url: '/inactive-session',
                templateUrl: 'partials/inactive-session.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: ['$scope', function ($scope) {
                    $scope.test = true;

                    $scope.callFn = function () {
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
                                StateAuthProvider.setUserType(response.data.data[0].isAdmin);
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
                                StateAuthProvider.setUserType(false);
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
                controller: ['$window', '$scope', '$http', '$state', '$filter', function ($window, $scope, $http, $state, $filter) {
                    $http({
                        method: 'GET',
                        url: '/events'
                    }).then(function (response) {
                        $scope.events = $filter('eventsFilter')(response.data, 'active');

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
                controller: ['$scope', '$stateParams', '$window', function ($scope, $stateParams, $window) {
                    $scope.eventId = $stateParams.eventId;
                    $window.localStorage.clear();
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
                controller: ['$window', '$uibModal', '$scope', '$http', '$state', 'SubscribeEventService', function ($window, $uibModal, $scope, $http, $state, SubscribeEventService) {
                    $http({
                        method: 'GET',
                        url: '/events'
                    }).then(function (response) {

                        var events = [];

                        $http({
                            method: 'GET',
                            url: '/users/' + $window.sessionStorage.userId
                        }).then(function (userDetails) {
                            $http({
                                method: 'GET',
                                url: '/user-events/' + $window.sessionStorage.userId + '/' + $window.sessionStorage.token
                            }).then(function (userEventsReponse) {

                                for (const y in userEventsReponse.data) {
                                    for (const x in response.data) {
                                        if (response.data[x]._id === userEventsReponse.data[y].eventId) {
                                            var userEventObj = {};
                                            userEventObj = angular.copy(response.data[x]);
                                            userEventObj.familySubscriptionDetails = angular.copy(userEventsReponse.data[y]);

                                            for (const z in userDetails.data.familyDetails) {
                                                if (userDetails.data.familyDetails[z].id === userEventsReponse.data[y].childId) {
                                                    userEventObj.familySubscriptionDetails.childName = userDetails.data.familyDetails[z].name;
                                                }
                                            }

                                            for (const n in events) {
                                                if (events[n].familySubscriptionDetails.childId === userEventsReponse.data[y].childId) {
                                                    events.splice(n, 1);
                                                }
                                            }

                                            events.push(userEventObj);

                                        }
                                    }
                                }

                                $scope.events = events;
                            });
                        });
                    });

                    $scope.showDetails = function (size, event) {
                        $uibModal.open({
                            animation: true,
                            ariaLabelledBy: 'modal-title',
                            ariaDescribedBy: 'modal-body',
                            templateUrl: 'partials/events/subscribe/view-subscription-details.html',
                            controller: 'SubscriptionPricesCtrl',
                            controllerAs: 'subscriptionPricesCtrl',
                            size: size,
                            resolve: {
                                subscriptionPriceDetails: function () {
                                    return SubscribeEventService.getSubscriptionPrice(event._id, event.familySubscriptionDetails.childId).then(function (response) {
                                        return response;
                                    });
                                },
                                subscriptionDetails: function () {
                                    return event;
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

                        $scope.date = new Date();
                        $scope.childArr = [];

                    $http({
                        method: 'GET',
                        url: '/users/' + $window.sessionStorage.userId
                    }).then(function (response) {

                        $http({
                            url: '/events',
                            method: 'GET'
                        }).then(function (events) {

                            $http({
                                url: '/user-events/' + $window.sessionStorage.userId + '/' + $window.sessionStorage.token,
                                method: 'GET'
                            }).then(function (userEvents) {
                                var activeEvents = events.data.filter(function (ele) {
                                    return (new Date(ele.eventDate) > new Date());
                                });

                                for (var a of activeEvents) {
                                    for (var b of userEvents.data) {
                                        if (a._id === b.eventId) {
                                            $scope.childArr.push(b.childId);
                                        }
                                    }
                                }
                            })
                        });

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
                                url: '/user-profile/upload/health-docs/' + $window.sessionStorage.userId,
                                data: {file: file}
                            }).then(function (resp) {
                            }, function (resp) {
                                // error
                                console.log("Error occurred ", resp);
                            }, function (evt) {
                                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                if (progressPercentage === 100) {
                                    $scope.userDetails.healthDocRef = $window.sessionStorage.userId + '-' + file.name;
                                    $scope.updateProfile();
                                }
                            });
                        };

                        $scope.removeHealthDoc = function (fileName) {
                            $http({
                                url: '/user-profile/remove/health-doc/' + fileName + '/' + $window.sessionStorage.userId,
                                method: 'GET'
                            });
                            $window.location.reload();
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
                    $window.location.reload();
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
