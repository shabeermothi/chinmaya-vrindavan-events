(function () {
    'use strict';

    angular.module('events.admin')
        .controller('SubscriptionCtrl', SubscriptionCtrl);

    SubscriptionCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'userObj', 'ManageUserService', 'SubscribeEventService'];

    function SubscriptionCtrl ($scope, $log, $uibModalInstance, userObj, ManageUserService, SubscribeEventService) {
        var subscriptionCtrl = this;

        ManageUserService.getUserSubscriptions(userObj._id).then(function (userSubscriptions) {
            subscriptionCtrl.userEvents = [];

            for (var i=0; i<userSubscriptions.length; i++) {
                const childId = userSubscriptions[i].childId;
                const eventId = userSubscriptions[i].eventId;
                const userId = userSubscriptions[i].userId;
                for (var k=0; k<userObj.familyDetails.length; k++) {

                    if (userObj.familyDetails[k].id === childId) {
                        const childName = angular.copy(userObj.familyDetails[k].name);

                        SubscribeEventService.getSubscriptionPrice(userSubscriptions[i].eventId, childId).then(function (subscriptionPriceResponse) {
                            if (subscriptionPriceResponse !== "") {
                                var userSubscriptions = angular.copy(subscriptionPriceResponse);
                                userSubscriptions.childName = childName;
                                userSubscriptions.childId = childId;
                                userSubscriptions.eventId = eventId;
                                userSubscriptions.userId = userId;

                                subscriptionCtrl.userEvents.push(userSubscriptions);
                            }
                        });
                    }
                }

            }
        });

        subscriptionCtrl.unsubscribe = function (subscriptionObj) {
            ManageUserService.unsubscribe(subscriptionObj).then(function () {
                subscriptionCtrl.userEvents.splice(subscriptionCtrl.userEvents.indexOf(subscriptionObj), 1);
            });
        };

        subscriptionCtrl.cancel = function () {
            $uibModalInstance.close();
        };
    }
}());