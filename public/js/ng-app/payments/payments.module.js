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
                        eventFieldPrices: {},
                        eventName: "",
                        discountDetails: {}
                    },
                    templateUrl: 'partials/payments/home.html',
                    controller: ['$stateParams', '$scope', function ($stateParams, $scope) {
                        $scope.eventDetails = $stateParams.eventDetails;
                        $scope.price = $stateParams.price;
                        $scope.eventName = $stateParams.eventName;
                        $scope.eventFieldPrices = $stateParams.eventFieldPrices;
                        $scope.discountDetails = $stateParams.discountDetails;
                    }]
                });
        });
})();
