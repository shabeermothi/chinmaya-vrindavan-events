(function () {
    'use strict';
    
    angular.module('events')
        .controller('ModalInstanceCtrl', ViewSubscriptionsCtrl);

    ViewSubscriptionsCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'eventSubscriptions', 'sourceEvent', 'EventsSubscriptionService'];
    
    function ViewSubscriptionsCtrl ($scope, $log, $uibModalInstance, eventSubscriptions, sourceEvent, EventsSubscriptionService) {
        var viewEventSubscriptionCtrl = this;

        viewEventSubscriptionCtrl.eventSubscriptions = eventSubscriptions;
        viewEventSubscriptionCtrl.totalNumberOfSubscriptions = eventSubscriptions.length;
        viewEventSubscriptionCtrl.event = sourceEvent;

        viewEventSubscriptionCtrl.subscriptions = [];

        for (var i=0; i<eventSubscriptions.length; i++) {
            var subscribedDate = eventSubscriptions[i].createDate;

            EventsSubscriptionService.getSubscriptionDetails(eventSubscriptions[i]).then(function (response) {
                viewEventSubscriptionCtrl.subscriptions.push({
                    subscribedOn: subscribedDate,
                    subscribedBy: response.name
                });
            });
        }

        viewEventSubscriptionCtrl.cancel = function () {
            $uibModalInstance.close();
        };
    }
})();