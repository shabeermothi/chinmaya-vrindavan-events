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
                childId: '=',
                backEvent: '&'
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
                SubscribeEventService.getUserEventDetails().then(function (userEventResponse) {
                    let childSubscribedFields = [];
                    let testModel = {};

                    for (const userEvent of userEventResponse) {
                        if (userEvent.eventId === $scope.eventId && userEvent.childId === $scope.childId) {
                            childSubscribedFields = childSubscribedFields.concat(Object.keys(userEvent.eventDetails));
                            testModel = angular.extend(testModel, userEvent.eventDetails);
                        }
                    }

                    vm.eventName = response.eventName;
                    vm.eventId = response._id;
                    vm.eventSiblingDiscount = (response.eventDiscount) ? parseInt(response.eventDiscount) : 20;
                    vm.eventTotalDiscount = (response.eventTotalDiscount) ? parseInt(response.eventTotalDiscount) : 0;
                    vm.eventMaxNumSubEventsForSiblingDiscount =  (response.maxSiblingDiscount) ? parseInt(response.maxSiblingDiscount) : 1;
                    vm.eventMaxSubEventsForTotalDiscount =  (response.maxTotalDiscount) ? parseInt(response.maxTotalDiscount) : 4;

                    // change basicSelect to select before displaying
                    for (const a of response.eventDetails.edaFieldsModel) {
                        for (const b of a.columns) {
                            if (b.control.type == "basicSelect") {
                                b.control.type = "select";
                            } else {
                                if (childSubscribedFields.indexOf(b.control.key) >= 0) {
                                    if (b.control.templateOptions.options.length > 0) {
                                        for (const x of b.control.templateOptions.options) {
                                            if (x.value === testModel[b.control.key]) {
                                                b.control.templateOptions.description = "Chosen Timing " + x.name;
                                            }
                                        }
                                    }

                                    b.control.formlyExpressionProperties = angular.extend(b.control.formlyExpressionProperties, {
                                        "templateOptions['disabled']" : function ($viewValue, $modelValue, scope) {
                                            scope.model[b.control.key] = testModel[b.control.key];
                                            return true;
                                        }
                                    });

                                }
                            }

                            if ($window.localStorage.userEventModel) {
                                let savedUserEventModel = JSON.parse($window.localStorage.userEventModel);
                                for (const h in savedUserEventModel) {
                                    if (h === b.control.key) {
                                        b.control.formlyExpressionProperties = angular.extend(b.control.formlyExpressionProperties, {
                                            "templateOptions['enabled']" : function ($viewValue, $modelValue, scope) {
                                                scope.model[b.control.key] = savedUserEventModel[h];
                                                return true;
                                            }
                                        });
                                    }
                                }
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
            });

            vm.subscribeToEvent = function (eventUserDataModel) {

                SubscribeEventService.getUserEventDetails().then(function (userEventResponse) {
                    var updatedEventUserDataModel = {};
                    var testUserModel = {};

                    for (const userEvent of userEventResponse) {
                        if (userEvent.eventId === $scope.eventId && userEvent.childId === $scope.childId) {
                            testUserModel = angular.extend(testUserModel, userEvent.eventDetails);
                        }
                    }

                    for (const x in eventUserDataModel) {
                        if (eventUserDataModel.hasOwnProperty(x)) {
                            if(Object.keys(testUserModel).indexOf(x) < 0) {
                                updatedEventUserDataModel[x] = eventUserDataModel[x];
                            }
                        }
                    }

                    var discountDetails = {};
                    var userEventObj = {
                        "eventId": $scope.eventId,
                        "userId": $window.sessionStorage.userId,
                        "childId": $scope.childId,
                        "eventDetails": updatedEventUserDataModel
                    };

                    $window.localStorage.userEventModel = JSON.stringify(updatedEventUserDataModel);

                    calculatePrice(updatedEventUserDataModel).then(function (price) {
                        var applyTotalDiscountCounter = 0;
                        for (var userChosenField in updatedEventUserDataModel) {
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

                            discountDetails.totalDiscount = "Reflects multi-week tuition discount";
                                //"after $" + vm.eventTotalDiscount + " X " + parseInt(applyTotalDiscountCounter) + " chosen weeks discount on tuition fee of $" + oldPrice;
                        } else {
                            price = vm.additionalFieldPrice + oldPrice;
                        }

                        discountDetails.eventFieldDiscount = vm.fieldDiscount;

                        if (price) {
                            $state.go('events.details.cardDetails', {'eventFieldPrices': vm.eventFieldPrices, 'eventDetails': userEventObj, 'price': price, 'eventName': vm.eventName, 'discountDetails': discountDetails});
                        } else {
                            console.log("Error occurred while calculating price", vm.additionalFieldPrice);
                        }
                    });
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
                        if (response[i].role === "Child" && response[i].grade === "Other") {
                        } else if (response[i].role === "Adult") {
                        } else {
                            childNames.push({
                                name: response[i].name,
                                value: response[i].id
                            });
                        }
                    }

                    /*for (var x in childIds) {
                        for (var j=0; j<childNames.length; j++) {
                            if (childIds[x] === childNames[j].value) {
                                childNames.splice(j, 1);
                            }
                        }
                    }*/

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
                                            "description" : "If you are registering multiple children in your family, you will register and pay for each child separately. When you register your second child, sibling discount automatically appears in the price calculations.  To avail multi-week discount, you have to choose 4 or more weeks at one time.  Adding weeks later will not qualify for the discount.",
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
