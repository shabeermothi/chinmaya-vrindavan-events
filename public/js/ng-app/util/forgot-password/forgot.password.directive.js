(function () {
    'use strict';

    angular.module('forgot.password')
        .directive('forgotPassword', ForgotPasswordDirective);

    function ForgotPasswordDirective () {
        ForgotPasswordDirectiveCtrl.$inject = ['$scope', '$log', 'ForgotPasswordService'];

        return {
            restrict: 'A',
            templateUrl: 'partials/util/forgot-password.html',
            controller: ForgotPasswordDirectiveCtrl,
            controllerAs: 'forgotPass'
        };

        function ForgotPasswordDirectiveCtrl ($scope, $log, ForgotPasswordService) {
            var forgotPass = this;

            forgotPass.recoverAccount = function () {
                ForgotPasswordService.recoverAccount(forgotPass.loginEmail).then(function () {
                    ForgotPasswordService.redirectToRecoverySuccess();
                }, function (err) {
                    ForgotPasswordService.redirectToRecoveryFailure();
                });
            };
        }
    }
})();
