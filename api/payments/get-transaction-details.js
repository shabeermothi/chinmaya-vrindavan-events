(function () {
    'use strict';

    var ApiContracts = require('authorizenet').APIContracts;
    var ApiControllers = require('authorizenet').APIControllers;
    var constants = require('./constants');

    function getTransactionDetails(transactionId, callback) {
        var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
        merchantAuthenticationType.setName(constants.apiLoginKey);
        merchantAuthenticationType.setTransactionKey(constants.transactionKey);

        var getRequest = new ApiContracts.GetTransactionDetailsRequest();
        getRequest.setMerchantAuthentication(merchantAuthenticationType);
        getRequest.setTransId(transactionId);

        var ctrl = new ApiControllers.GetTransactionDetailsController(getRequest.getJSON());

        ctrl.execute(function(){

            var apiResponse = ctrl.getResponse();

            var response = new ApiContracts.GetTransactionDetailsResponse(apiResponse);

            callback(response);
        });
    }

    module.exports.getTransactionDetails = getTransactionDetails;
}());