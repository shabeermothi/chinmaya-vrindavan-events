(function () {
    'use strict';

    angular.module('events')
        .controller('ModalInstanceCtrl', ViewSubscriptionsCtrl)
        .controller('EventFieldPricesCtrl', EventFieldPricesCtrl);

    ViewSubscriptionsCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'eventSubscriptions', 'sourceEvent', 'EventsSubscriptionService'];

    function ViewSubscriptionsCtrl ($scope, $log, $uibModalInstance, eventSubscriptions, sourceEvent, EventsSubscriptionService) {
        var viewEventSubscriptionCtrl = this;

        viewEventSubscriptionCtrl.eventSubscriptions = eventSubscriptions;
        viewEventSubscriptionCtrl.totalNumberOfSubscriptions = eventSubscriptions.length;
        viewEventSubscriptionCtrl.event = sourceEvent;

        console.log("Event subscriptions => ", eventSubscriptions);

        viewEventSubscriptionCtrl.subscriptions = [];

        for (var i=0; i<eventSubscriptions.length; i++) {
            var subscribedDate = eventSubscriptions[i].createDate;

            EventsSubscriptionService.getSubscriptionDetails(eventSubscriptions[i]).then(function (response) {
                var childName;
                for (var i in response.familyDetails) {
                    if (response.familyDetails.hasOwnProperty(i)) {
                        if (response.familyDetails[i].id === eventSubscriptions[i].childId) {
                            childName = response.familyDetails[i].name;
                        }
                    }
                }

                viewEventSubscriptionCtrl.subscriptions.push({
                    subscribedOn: subscribedDate,
                    subscribedFor: childName,
                    subscribedBy: response.name
                });
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

        $log.info("response Arr => ", responseArr);
        viewEventFieldPrices.subEventPrices = responseArr;

        viewEventFieldPrices.isArray = angular.isArray;

        viewEventFieldPrices.cancel = function () {
            $uibModalInstance.close();
        };
    }
})();
