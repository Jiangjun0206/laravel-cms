/**
 * Created by lorventsolutions on 25/7/16.
 */
$(document).ready(function() {
    $(document).mousemove(function(event) {
        TweenLite.to($('body'), .5, {css:{'background-position':parseInt(event.pageX/8) + "px "+parseInt(event.pageY/12)+"px, "+parseInt(event.pageX/15)+"px "+parseInt(event.pageY/15)+"px, "+parseInt(event.pageX/30)+"px "+parseInt(event.pageY/30)+"px"}});
    });

    //Flat red color scheme for iCheck
    $('input[type="checkbox"].minimal-blue').iCheck({
        checkboxClass: 'icheckbox_minimal-blue'
    });
});

    $("#register_here").bootstrapValidator({
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'First name is required'
                    }
                },
                required: true,
                minlength: 3
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'Last name is required'
                    }
                },
                required: true,
                minlength: 3
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    regexp: {
                        regexp: /^(\w+)([\-+.\'0-9A-Za-z_]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/,
                        message: 'The input is not a valid email address'
                    }
                }
            },
            email_confirm: {
                validators: {
                    notEmpty: {
                        message: 'The confirm email address is required'
                    },
                    identical: {
                        field: 'email',
                        message: 'Entered email is not matching with your email'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required'
                    },
                    different: {
                        field: 'first_name,last_name',
                        message: 'Password should not match first name or last name'
                    }
                }
            },
            password_confirm: {
                validators: {
                    notEmpty: {
                        message: 'Confirm Password is required'
                    },
                    identical: {
                        field: 'password'
                    },
                    different: {
                        field: 'first_name,last_name',
                        message: 'Confirm Password should match with password'
                    }
                }
            },
            activate: {
                validators: {
                    notEmpty: {
                        message: 'Please check the checkbox'
                    }
                }
            }
        }
    });
$('#activate').on('ifChanged', function(event){
    $('#register_here').bootstrapValidator('revalidateField', $('#activate'));
});
$('#register_here input').on('keyup', function (){

    $('#register_here input').each(function(){
        var pswd = $("#register_here input[name='password']").val();
        var pswd_cnf = $("#register_here input[name='password_confirm']").val();
        var email_cnf = $("#register_here input[name='email_confirm']").val();

        if(pswd != '' ){
            $('#register_here').bootstrapValidator('revalidateField', 'password');
        }
         if(pswd_cnf != '' ){
             $('#register_here').bootstrapValidator('revalidateField', 'password_confirm');
         }
         if(email_cnf != '' ){
             $('#register_here').bootstrapValidator('revalidateField', 'email_confirm');
         }
    });
});