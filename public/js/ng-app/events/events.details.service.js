(function () {
    'use strict';

    angular.module('events')
        .factory('event.pricing.details', EventPricingDetails);

    EventPricingDetails.$inject = ['$http', '$log'];

    function EventPricingDetails () {
        return {
            getPricingDetails: getPricingDetails
        };

        function getPricingDetails (eventId, childId) {
            /*$http({
                method: 'GET',
                url: '/'
            })*/
        }
    }

})();
