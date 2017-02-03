(function () {
    'use strict';

    angular.module('events')
        .controller('ModalInstanceCtrl', ViewSubscriptionsCtrl)
        .controller('EventFieldPricesCtrl', EventFieldPricesCtrl)
        .controller('SubscriptionPricesCtrl', SubscriptionPricesCtrl);

    ViewSubscriptionsCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'eventSubscriptions', 'sourceEvent', 'EventsSubscriptionService', 'SubscribeEventService'];

    function ViewSubscriptionsCtrl ($scope, $log, $uibModalInstance, eventSubscriptions, sourceEvent, EventsSubscriptionService, SubscribeEventService) {
        var viewEventSubscriptionCtrl = this;

        viewEventSubscriptionCtrl.eventSubscriptions = eventSubscriptions;
        viewEventSubscriptionCtrl.totalNumberOfSubscriptions = eventSubscriptions.length;
        viewEventSubscriptionCtrl.event = sourceEvent;

        viewEventSubscriptionCtrl.subscriptions = [];

        for (var i=0; i<eventSubscriptions.length; i++) {
            const subscribedDate = eventSubscriptions[i].createDate;
            const childId = eventSubscriptions[i].childId;
            const eventId = eventSubscriptions[i].eventId;

            EventsSubscriptionService.getSubscriptionDetails(eventSubscriptions[i]).then(function (response) {
                for (var x in response.familyDetails) {
                    const subscriptionObj = {};
                    if (response.familyDetails.hasOwnProperty(x)) {
                        if (response.familyDetails[x].id === childId) {
                            const childName = response.familyDetails[x].name;
                            subscriptionObj.subscribedOn = subscribedDate;
                            subscriptionObj.subscribedFor = childName;
                            subscriptionObj.subscribedBy = response.name;

                            SubscribeEventService.getSubscriptionPrice(eventId, childId).then(function (subscriptionPriceResponse) {
                                subscriptionObj.pricingDetails = subscriptionPriceResponse;

                                SubscribeEventService.getTransactionDetails(subscriptionPriceResponse.paymentResponse.data.transactionResponse.transId).then(function (transactionResponse) {
                                    subscriptionObj.pricingDetails.transactionStatus = angular.copy(transactionResponse.messages.message[0].text);
                                    subscriptionObj.pricingDetails.transactionType = angular.copy((transactionResponse.transaction) ? transactionResponse.transaction.transactionType : "");
                                    viewEventSubscriptionCtrl.subscriptions.push(subscriptionObj);
                                }, function (error) {
                                    viewEventSubscriptionCtrl.subscriptions.push(subscriptionObj);
                                });
                            });

                        }
                    }
                }
            });
        }

        viewEventSubscriptionCtrl.cancel = function () {
            $uibModalInstance.close();
        };
    }

    EventFieldPricesCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'eventFieldPrice'];

    function EventFieldPricesCtrl ($scope, $log, $uibModalInstance, eventFieldPrice) {
        var viewEventFieldPrices = this;

        viewEventFieldPrices.eventFieldPrices = eventFieldPrice;
        var responseArr = [];

        for (var fieldPrice of viewEventFieldPrices.eventFieldPrices) {
            for (var a in fieldPrice) {
                var fieldValues = fieldPrice[a];
                if (Array.isArray(fieldValues.actualValue)) {
                    for (var c in fieldValues.actualValue) {
                        for (var d in fieldValues.priceValue) {
                            if (fieldValues.actualValue[c].value == d) {
                                responseArr.push(
                                    {
                                        "parentField": fieldValues.label,
                                        "field": fieldValues.actualValue[c].name,
                                        "price": fieldValues.priceValue[d]
                                    }
                                );
                            }
                        }
                    }
                } else {
                    for (var b in fieldValues.priceValue) {
                        responseArr.push(
                            {
                                "field": fieldValues.actualValue,
                                "price": fieldValues.priceValue[b]
                            }
                        );
                    }
                }
            }
        }

        viewEventFieldPrices.subEventPrices = responseArr;

        viewEventFieldPrices.isArray = angular.isArray;

        viewEventFieldPrices.cancel = function () {
            $uibModalInstance.close();
        };
    }

    SubscriptionPricesCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'subscriptionDetails', 'subscriptionPriceDetails'];

    function SubscriptionPricesCtrl ($scope, $log, $uibModalInstance, subscriptionDetails, subscriptionPriceDetails) {
        var subscriptionPricesCtrl = this;

        subscriptionPricesCtrl.subscription = {
            details: subscriptionDetails,
            price: subscriptionPriceDetails
        };

        subscriptionPricesCtrl.cancel = function () {
            $uibModalInstance.close();
        };
    }
})();
