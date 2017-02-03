(function () {
    'use strict';

    'use strict';

    var ApiContracts = require('authorizenet').APIContracts;
    var ApiControllers = require('authorizenet').APIControllers;
    var constants = require('./constants');

    function chargeCreditCard(callback, paymentDetails) {
        var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
        merchantAuthenticationType.setName(constants.apiLoginKey);
        merchantAuthenticationType.setTransactionKey(constants.transactionKey);

        var creditCard = new ApiContracts.CreditCardType();
        creditCard.setCardNumber(paymentDetails.cardNumber);
        creditCard.setExpirationDate(paymentDetails.cardExpiryMonth + '' + paymentDetails.cardExpiryYear);
        creditCard.setCardCode(paymentDetails.cardCvv);

        var paymentType = new ApiContracts.PaymentType();
        paymentType.setCreditCard(creditCard);

        var transactionRequestType = new ApiContracts.TransactionRequestType();
        transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
        transactionRequestType.setPayment(paymentType);
        transactionRequestType.setAmount(paymentDetails.price);

        var createRequest = new ApiContracts.CreateTransactionRequest();
        createRequest.setMerchantAuthentication(merchantAuthenticationType);
        createRequest.setTransactionRequest(transactionRequestType);

        var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

        ctrl.execute(function(){

            var apiResponse = ctrl.getResponse();

            var response = new ApiContracts.CreateTransactionResponse(apiResponse);

            callback(response);
        });
    }

    module.exports.chargeCreditCard = chargeCreditCard;

}());