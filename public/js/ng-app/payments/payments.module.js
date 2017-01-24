(function () {
    'use strict';

    angular.module('events.payments', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('events.details.cardDetails', {
                    url: '/card-details',
                    params: {
                        price: 0,
                        eventDetails: {},
                        eventName: ""
                    },
                    templateUrl: 'partials/payments/home.html',
                    controller: ['$stateParams', '$scope', function ($stateParams, $scope) {
                        $scope.eventDetails = $stateParams.eventDetails;
                        $scope.price = $stateParams.price;
                        $scope.eventName = $stateParams.eventName;
                    }]
                });
        });
})();
