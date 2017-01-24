(function () {
    'use strict';

    angular.module('events.payments')
        .directive('paymentForm', PaymentFormDirective);

    function PaymentFormDirective () {
        PaymentFormDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService'];

        return {
            restrict: 'A',
            scope: {
                eventDetails: '@',
                price: '@',
                eventName: '='
            },
            templateUrl: 'partials/payments/card-details.html',
            controller: PaymentFormDirectiveCtrl,
            controllerAs: 'vm'
        };

        function PaymentFormDirectiveCtrl ($scope, $log, SubscribeEventService) {
            var vm = this;
            vm.price = parseInt($scope.price);

            vm.makePayment = function () {
                var paymentInfo = {
                    cardNumber: vm.cardNumber,
                    cardCvv: vm.cardCVV,
                    cardExpiryMonth: vm.cardExpiryMonth,
                    cardExpiryYear: vm.cardExpiryYear,
                    price: vm.price
                };

                SubscribeEventService.makePayment(paymentInfo).then(function (paymentResponse) {
                    SubscribeEventService.createUserEvent($scope.eventDetails).then(function (userResponse) {
                        SubscribeEventService.go('events.subscription.success', {'eventName': $scope.eventName, 'price': vm.price});
                    });
                });
            };
        }
    }
})();
