(function () {
    'use strict';

    angular.module('forgot.password')
        .factory('ForgotPasswordService', ForgotPasswordService);

    ForgotPasswordService.$inject = ['$http', '$log', '$state'];

    function ForgotPasswordService ($http, $log, $state) {
        return {
            recoverAccount: recoverAccount,
            redirectToRecoverySuccess: redirectToRecoverySuccess,
            redirectToRecoveryFailure: redirectToRecoveryFailure
        };

        function recoverAccount (reqEmail) {
            return $http({
                method: 'GET',
                url: '/recover-account/' + reqEmail
            }).then(function (response) {
                return response.data;
            });
        }

        function redirectToRecoverySuccess () {
            $state.go('forgotPassword.success');
        }

        function redirectToRecoveryFailure () {
            $state.go('forgotPassword.failure');
        }
    }
})();
