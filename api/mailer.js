var mailHelper = require('sendgrid').mail;

var mailer = {
    content: new mailHelper.Content("text/plain", "Welcome to Chinmaya Vrindavan Events. \n " +
        "\n " +
        "Have a great day! \n " +
        "Chinmaya Vrindavan Events Team"),
    sendMail: function (fromMail, toMail, subject, customContent) {
        var from_email = new mailHelper.Email(fromMail);
        var to_email = new mailHelper.Email(toMail);
        var mail = new mailHelper.Mail(from_email, subject, to_email, customContent || this.content);
        var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });

        sg.API(request, function(error, response) {
        });
    }
};

module.exports = mailer;
