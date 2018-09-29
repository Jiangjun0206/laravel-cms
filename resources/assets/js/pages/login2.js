$(document).ready(function () {
    $(document).mousemove(function (event) {
        TweenLite.to($('body'), .5, {css: {'background-position': parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / 12) + "px, " + parseInt(event.pageX / 15) + "px " + parseInt(event.pageY / 15) + "px, " + parseInt(event.pageX / 30) + "px " + parseInt(event.pageY / 30) + "px"}});
    });

    //Flat red color scheme for iCheck
    $('input[type="checkbox"].minimal-blue').iCheck({
        checkboxClass: 'icheckbox_minimal-blue'
    });

    $("#authentication").bootstrapValidator({
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
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required'
                    }

                }
            }
        }
    });



});
