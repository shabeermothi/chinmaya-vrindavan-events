(function () {
    'use strict';

    var constants = {
        apiLoginKey: process.env.PAYMENT_API_LOGIN_KEY,
        transactionKey: process.env.PAYMENT_TRANSACTION_KEY
    };

    module.exports = constants;
}());
