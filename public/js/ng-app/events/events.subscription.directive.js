(function () {
    'use strict';

    angular.module('eventsApp')
        .directive('subscribeEvent', subscribeEventDirective)
        .directive('userEventSubscription', userEventSubscriptionDirective);

    function subscribeEventDirective () {
        SubscribeEventDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService', '$window', '$state', '$q', '$uibModal'];

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

        function SubscribeEventDirectiveCtrl ($scope, $log, SubscribeEventService, $window, $state, $q, $uibModal) {
            var vm = this;

            vm.eventDataModel = {};

            vm.viewFieldPrices = function (size, eventFieldPrices) {
                $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'partials/events/view-event-field-prices.html',
                    controller: 'EventFieldPricesCtrl',
                    controllerAs: 'viewEventFieldPrices',
                    size: size,
                    resolve: {
                        eventFieldPrice: function () {
                            return SubscribeEventService.resolveFields(eventFieldPrices).then(function (response) {
                                return response;
                            });
                        }
                    }
                });
            };

            SubscribeEventService.getEventDetails($scope.eventId).then(function (response) {
                vm.eventName = response.eventName;
                vm.eventId = response._id;
                vm.eventDetails = response.eventDetails.edaFieldsModel;
                vm.submitButtonText = response.eventDetails.btnSubmitText;
                vm.cancelButtonText = response.eventDetails.btnCancelText;

                calculatePrice().then(function (price) {
                    vm.eventPrice = price;
                });
            });

            vm.subscribeToEvent = function (eventUserDataModel) {
                var userEventObj = {
                    "eventId": $scope.eventId,
                    "userId": $window.sessionStorage.userId,
                    "childId": $scope.childId,
                    "eventDetails": eventUserDataModel
                };

                calculatePrice(eventUserDataModel).then(function (price) {
                    $state.go('events.details.cardDetails', {'eventFieldPrices': vm.eventFieldPrices, 'eventDetails': userEventObj, 'price': price, 'eventName': vm.eventName});
                });
            };

            function calculatePrice (eventUserDataModel) {
                var deferred = $q.defer();
                var price = 0;
                SubscribeEventService.getUserEventDetails().then(function (userEventResponse) {
                    var fieldSubscribed = [];

                    for (var a in userEventResponse) {
                        for (var key in userEventResponse[a].eventDetails) {
                            fieldSubscribed.push(key);
                        }
                    }

                    SubscribeEventService.getEventPrice($scope.eventId).then(function (response) {
                        vm.eventFieldPrices = response.eventFieldPrices;
                        var eventSiblingDiscount = parseInt(response.eventDiscount);
                        price = parseInt(price) + parseInt(response.eventBasePrice);
                        if (eventUserDataModel) {
                            for (var a in eventUserDataModel) {
                                if (eventUserDataModel.hasOwnProperty(a)) {
                                    var eventFieldPrices = response.eventFieldPrices;
                                    for (var b in eventFieldPrices) {
                                        if (eventFieldPrices.hasOwnProperty(b)) {
                                            for (var x in eventFieldPrices[b]) {
                                                if (a === x) {
                                                    var additionalPrice = parseInt(eventFieldPrices[b][x][(eventUserDataModel[a] === true) ? "yes" : eventUserDataModel[a]]);
                                                    if (fieldSubscribed.indexOf(a) > -1) {
                                                        var eventDiscount = (eventSiblingDiscount) ? eventSiblingDiscount : 20 ;
                                                        additionalPrice = additionalPrice - ((additionalPrice * eventDiscount)/100);
                                                    }
                                                    price = parseInt(price) + additionalPrice;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        deferred.resolve(price);
                    });
                });

                return deferred.promise;
            }

            vm.cancelSubscription = function () {
                console.log('Subscription cancellation requested!');
            };
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
                SubscribeEventService.getUserEventDetails().then(function (userEventResponse) {
                    var childNames = [];
                    var childIds = [];
                    for (var a in userEventResponse) {
                        if (userEventResponse[a].eventId === $scope.eventId) {
                            childIds.push(userEventResponse[a].childId);
                        }
                    }

                    for (var i=0; i<response.length; i++) {
                        childNames.push({
                            name: response[i].name,
                            value: response[i].id
                        });
                    }

                    for (var x in childIds) {
                        for (var j=0; j<childNames.length; j++) {
                            if (childIds[x] === childNames[j].value) {
                                childNames.splice(j, 1);
                            }
                        }
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
                                            "required" : true,
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
