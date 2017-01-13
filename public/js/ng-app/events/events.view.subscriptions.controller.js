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

        viewEventFieldPrices.cancel = function () {
            $uibModalInstance.close();
        };
    }
})();
