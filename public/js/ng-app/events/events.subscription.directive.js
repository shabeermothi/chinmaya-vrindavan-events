(function () {
    'use strict';

    angular.module('eventsApp')
        .directive('subscribeEvent', subscribeEventDirective)
        .directive('userEventSubscription', userEventSubscriptionDirective)
        .factory('SubscribeEventService', SubscribeEventService);

    SubscribeEventService.$inject = ['$http', '$log', '$window'];

    function subscribeEventDirective () {
        SubscribeEventDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService', '$window', '$state'];

        return {
            restrict: 'A',
            scope: {
                eventId: '=',
                childId: '='
            },
            templateUrl: 'partials/events/subscribe/subscribe-to-an-event.html',
            controller: SubscribeEventDirectiveCtrl,
            controllerAs: 'vm'
        };

        function SubscribeEventDirectiveCtrl ($scope, $log, SubscribeEventService, $window, $state) {
            var vm = this;

            vm.eventDataModel = {};

            SubscribeEventService.getEventDetails($scope.eventId).then(function (response) {
                vm.eventName = response.eventName;
                vm.eventId = response._id;
                vm.eventDetails = response.eventDetails.edaFieldsModel;
                vm.submitButtonText = response.eventDetails.btnSubmitText;
                vm.cancelButtonText = response.eventDetails.btnCancelText;
            });

            vm.subscribeToEvent = function (eventUserDataModel) {
                console.log('Event Payment Requested ', eventUserDataModel);

                var userEventObj = {
                    "eventId": $scope.eventId,
                    "userId": $window.sessionStorage.userId,
                    "childId": $scope.childId,
                    "eventDetails": eventUserDataModel
                };

                SubscribeEventService.createUserEvent(userEventObj).then(function (response) {
                    $state.go('events.subscription.success', {'eventName': vm.eventName});
                });
            };

            vm.cancelSubscription = function () {
                console.log('Subscription cancellation requested!');
            };
        }
    }
    
    function SubscribeEventService ($http, $log, $window) {
        return {
            getEventDetails: getEventDetails,
            subscribeEvent: subscribeEvent,
            getChildDetails: getChildDetails,
            createUserEvent: createUserEvent
        };

        function getEventDetails (eventId) {
            return $http({
                method: 'GET',
                url: '/events/' + eventId
            }).then(function (response) {
                return response.data;
            });
        }

        function subscribeEvent () {

        }

        function getChildDetails (userId) {
            return $http({
                method: 'GET',
                url: '/user-details/child-details/' + userId
            }).then(function (response) {
                return response.data;
            });
        }

        function createUserEvent (userEventDetails) {
            return $http({
                method: 'POST',
                url: '/user-events/' + $window.sessionStorage.token,
                data: userEventDetails
            });
        }
    }
    
    function userEventSubscriptionDirective () {
        UserEventSubscriptionDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService', '$window', '$state'];

        return {
            restrict: 'A',
            scope: {
                eventId: '='
            },
            templateUrl: 'partials/events/subscribe/subscribe-event-for.html',
            controller: UserEventSubscriptionDirectiveCtrl,
            controllerAs: 'userSubscription'
        };
        
        function UserEventSubscriptionDirectiveCtrl ($scope, $log, SubscribeEventService, $window, $state) {
            var userSubscription = this;

            userSubscription.eventDataModel = {};

            SubscribeEventService.getChildDetails($window.sessionStorage.userId).then(function (response) {
                 var childNames = [];
                 for (var i=0; i<response.length; i++) {
                     childNames.push({
                        name: response[i].name,
                        value: response[i].id
                     });
                 }

                userSubscription.childNameForm =  [
                        {
                            "line" : -1,
                            "activeColumn" : 1,
                            "columns" : [
                                {
                                    "numColumn" : 1,
                                    "exist" : true,
                                    "control" : {
                                        "type" : "basicSelect",
                                        "key" : "basicSelect-1481148532361",
                                        "selectedControl" : "BasicSelect",
                                        "subtype" : "",
                                        "templateOptions" : {
                                            "label" : "Choose Child",
                                            "required" : false,
                                            "description" : "",
                                            "placeholder" : "",
                                            "options" : childNames
                                        },
                                        "formlyExpressionProperties" : {},
                                        "formlyValidators" : {},
                                        "formlyValidation" : {
                                            "messages" : {}
                                        },
                                        "edited" : true
                                    }
                                }
                            ]
                        }
                    ];
             });

            SubscribeEventService.getEventDetails($scope.eventId).then(function (response) {
                userSubscription.eventName = response.eventName;
                userSubscription.eventId = response._id;
                //userSubscription.eventDetails = response.eventDetails.edaFieldsModel;
                userSubscription.submitButtonText = "Proceed to Event Details";
                userSubscription.cancelButtonText = "Cancel";
            });

            userSubscription.subscribeEventForUser = function (eventUserDataModel) {
                var userEventObj = {
                    "eventId": $scope.eventId,
                    "userId": $window.sessionStorage.userId,
                    "childId": eventUserDataModel["basicSelect-1481148532361"].value,
                    "eventUserDataModel": eventUserDataModel,
                    "eventDetails": []
                };

                $state.go('events.details', {'eventId': $scope.eventId, 'childId': eventUserDataModel["basicSelect-1481148532361"].value});

            };

            userSubscription.cancelUserSubscription = function () {
                console.log('Subscription cancellation requested!');
            };
        }
    }
})();