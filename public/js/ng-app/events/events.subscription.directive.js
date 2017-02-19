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
                vm.eventSiblingDiscount = (response.eventDiscount) ? parseInt(response.eventDiscount) : 20;
                vm.eventTotalDiscount = (response.eventTotalDiscount) ? parseInt(response.eventTotalDiscount) : 0;
                vm.eventMaxNumSubEventsForSiblingDiscount =  (response.maxSiblingDiscount) ? parseInt(response.maxSiblingDiscount) : 1;
                vm.eventMaxSubEventsForTotalDiscount =  (response.maxTotalDiscount) ? parseInt(response.maxTotalDiscount) : 4;

                // change basicSelect to select before displaying
                for (var a of response.eventDetails.edaFieldsModel) {
                    for (var b of a.columns) {
                        if (b.control.type == "basicSelect") {
                            b.control.type = "select";
                        }
                    }
                }
                vm.eventDetails = response.eventDetails.edaFieldsModel;

                vm.submitButtonText = response.eventDetails.btnSubmitText;
                vm.cancelButtonText = response.eventDetails.btnCancelText;

                calculatePrice().then(function (price) {
                    vm.eventPrice = price;
                });
            });

            vm.subscribeToEvent = function (eventUserDataModel) {

                var discountDetails = {};
                var userEventObj = {
                    "eventId": $scope.eventId,
                    "userId": $window.sessionStorage.userId,
                    "childId": $scope.childId,
                    "eventDetails": eventUserDataModel
                };

                calculatePrice(eventUserDataModel).then(function (price) {
                    var applyTotalDiscountCounter = 0;
                    for (var userChosenField in eventUserDataModel) {
                        for (var eventFields of vm.eventDetails) {
                            for (var eventFieldColumn of eventFields.columns) {
                                if ((eventFieldColumn.control.type === "select" || eventFieldColumn.control.type === "basicSelect")
                                    && eventFieldColumn.control.key === userChosenField) {
                                    applyTotalDiscountCounter++;
                                    break;
                                }
                            }
                        }
                    }

                    const oldPrice = vm.totalFirstFieldPrice;

                    if (applyTotalDiscountCounter >= vm.eventMaxSubEventsForTotalDiscount) {
                        price = vm.additionalFieldPrice + (oldPrice - (parseInt(applyTotalDiscountCounter) * (vm.eventTotalDiscount)));
                        discountDetails.totalDiscount = "after $" + vm.eventTotalDiscount + " X " + parseInt(applyTotalDiscountCounter) + " chosen weeks discount on tuition fee of $" + oldPrice;
                    } else {
                        price = vm.additionalFieldPrice + oldPrice;
                    }

                    discountDetails.eventFieldDiscount = vm.fieldDiscount;

                    $state.go('events.details.cardDetails', {'eventFieldPrices': vm.eventFieldPrices, 'eventDetails': userEventObj, 'price': price, 'eventName': vm.eventName, 'discountDetails': discountDetails});
                });
            };

            function calculatePrice (eventUserDataModel) {
                var deferred = $q.defer();
                var price = 0;
                SubscribeEventService.getUserEventDetails().then(function (userEventResponse) {
                    var fieldSubscribed = [];
                    vm.subscribedFields = [];
                    var totalDiscountOnFirstField = 0;
                    var additionalFieldPrice = 0;

                    for (var a in userEventResponse) {
                        for (var key in userEventResponse[a].eventDetails) {
                            if (userEventResponse[a].eventDetails.hasOwnProperty(key)) {
                                fieldSubscribed.push(key);
                                vm.subscribedFields.push(key);
                            }
                        }
                    }

                    SubscribeEventService.getEventPrice($scope.eventId).then(function (response) {
                        vm.eventFieldPrices = response.eventFieldPrices;
                        vm.fieldDiscount = {};
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
                                                        if (eventFieldPrices[b][x].hasOwnProperty(0)) {
                                                            var eventDiscount1 = (eventSiblingDiscount) ? eventSiblingDiscount : 20 ;
                                                            vm.fieldDiscount[a] = eventDiscount1;
                                                            additionalPrice = additionalPrice - ((additionalPrice * eventDiscount1)/100);

                                                            totalDiscountOnFirstField = totalDiscountOnFirstField + additionalPrice;

                                                            price = parseInt(price) + additionalPrice;
                                                        } else {
                                                            additionalFieldPrice = additionalFieldPrice + additionalPrice;
                                                            price = parseInt(price) + additionalPrice;
                                                        }
                                                    } else {
                                                        if (eventFieldPrices[b][x].hasOwnProperty(0)) {
                                                            totalDiscountOnFirstField = totalDiscountOnFirstField + additionalPrice;

                                                            price = parseInt(price) + additionalPrice;
                                                        } else {
                                                            additionalFieldPrice = additionalFieldPrice + additionalPrice;
                                                        }
                                                    }


                                                }
                                            }
                                        }
                                    }

                                    vm.additionalFieldPrice = additionalFieldPrice;
                                    vm.totalFirstFieldPrice = totalDiscountOnFirstField;
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
                        if (response[i].grade !== "Other") {
                            childNames.push({
                                name: response[i].name,
                                value: response[i].id
                            });
                        }
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
