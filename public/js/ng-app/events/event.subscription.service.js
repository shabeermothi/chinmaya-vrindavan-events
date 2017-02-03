(function () {
    'use strict';

    angular.module('eventsApp')
        .factory('SubscribeEventService', SubscribeEventService);

    SubscribeEventService.$inject = ['$http', '$log', '$window', '$state'];

    function SubscribeEventService ($http, $log, $window, $state) {
        return {
            getEventDetails: getEventDetails,
            subscribeEvent: subscribeEvent,
            getChildDetails: getChildDetails,
            createUserEvent: createUserEvent,
            getEventPrice: getEventPrice,
            resolveFields: resolveFields,
            getUserEventDetails: getUserEventDetails,
            makePayment: makePayment,
            saveEventPrice: saveEventPrice,
            getSubscriptionPrice: getSubscriptionPrice,
            go: go,
            getTransactionDetails: getTransactionDetails
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

        function getEventPrice (eventId) {
            return $http({
                method: 'GET',
                url: '/event-price/' + eventId
            }).then(function (response) {
                return response.data;
            });
        }

        function resolveFields (eventFields) {
            return $http({
                method: 'POST',
                url: '/event-field-details/',
                data: eventFields
            }).then(function (response) {
                return response.data;
            });
        }

        function getUserEventDetails () {
            return $http({
                method: 'GET',
                url: '/user-events/' + $window.sessionStorage.userId + '/' + $window.sessionStorage.token
            }).then(function (userEventsReponse) {
                return userEventsReponse.data;
            });
        }

        function makePayment (paymentDetails) {
            return $http({
                method: 'POST',
                url: '/events/make-payment',
                data: paymentDetails
            }).then(function (paymentResponse) {
                return paymentResponse;
            });
        }

        function go (stateName, params) {
            $state.go(stateName, params);
        }

        function saveEventPrice (eventId, childId, eventPriceDetails, basePrice, total, paymentResponse, eventName) {
            var priceObj = {
                eventId: eventId,
                childId: childId,
                priceDetails: eventPriceDetails,
                basePrice: basePrice,
                total: total,
                paymentResponse: paymentResponse,
                eventName: eventName
            };

            return $http({
               method: 'POST',
                url: '/events/save-price/' + $window.sessionStorage.userId,
                data: priceObj
            });
        }

        function getSubscriptionPrice (eventId, childId) {
            return $http({
                method: 'GET',
                url: '/events/subscription-price/' + eventId + "/" + childId
            }).then(function (response) {
                return response.data;
            });
        }
        
        function getTransactionDetails (transId) {
            return $http({
                method: 'GET',
                url: '/events/subscription/' + transId
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();
