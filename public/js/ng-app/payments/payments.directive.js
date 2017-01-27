(function () {
    'use strict';

    angular.module('events.payments')
        .directive('paymentForm', PaymentFormDirective);

    function PaymentFormDirective () {
        PaymentFormDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService'];

        return {
            restrict: 'A',
            scope: {
                eventDetails: '=',
                eventFieldPrices: '=',
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
            vm.eventFieldPrices = $scope.eventFieldPrices;
            vm.eventDetails = $scope.eventDetails;


            SubscribeEventService.resolveFields(vm.eventFieldPrices).then(function (fieldsResponse) {
                vm.fieldsResponse = fieldsResponse;
                vm.priceDetailsArr = [];
                var eventDetailKeys = Object.keys(vm.eventDetails.eventDetails);

                SubscribeEventService.getEventPrice(vm.eventDetails.eventId).then(function (eventResponse) {
                    vm.eventBasePrice = eventResponse.eventBasePrice;

                    for (var x=0; x<vm.fieldsResponse.length; x++) {
                        for (var key in vm.fieldsResponse[x]) {
                            var priceDetails = {};
                            if (vm.fieldsResponse[x].hasOwnProperty(key)) {
                                if (eventDetailKeys.indexOf(key) >= 0) {
                                    if (key.indexOf("basicSelect") >= 0 || key.indexOf("select") >= 0) {
                                        priceDetails.label = vm.fieldsResponse[x][key].label;
                                        priceDetails.subLabel = vm.fieldsResponse[x][key].actualValue[vm.eventDetails.eventDetails[key]].name;
                                        priceDetails.price = vm.fieldsResponse[x][key].priceValue[vm.eventDetails.eventDetails[key]];
                                    } else if (key.indexOf("checkbox") !== -1 || key.indexOf("checkbox") !== -1) {
                                        if (vm.eventDetails.eventDetails[key]) {
                                            priceDetails.price = vm.fieldsResponse[x][key].priceValue["yes"];
                                            priceDetails.label = vm.fieldsResponse[x][key].actualValue;
                                        }

                                    }

                                    vm.priceDetailsArr.push(priceDetails);
                                }
                            }
                        }
                    }
                });

            });

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
                        SubscribeEventService.saveEventPrice(vm.eventDetails.eventId, vm.eventDetails.childId, vm.priceDetailsArr, vm.eventBasePrice, vm.price, paymentResponse, $scope.eventName).then(function () {
                            SubscribeEventService.go('events.subscription.success', {'eventName': $scope.eventName, 'price': vm.price});
                        });
                    });
                });
            };
        }
    }
})();
