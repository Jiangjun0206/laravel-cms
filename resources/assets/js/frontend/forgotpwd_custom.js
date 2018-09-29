$(".omb_loginForm").bootstrapValidator({
    fields: {
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        }
    }
});
$(function() {
    setTimeout(function () {
        $("#notific").remove();
    }, 5000);
});