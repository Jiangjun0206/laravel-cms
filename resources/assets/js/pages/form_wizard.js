// bootstrap wizard//
$("#gender, #gender1").select2({
    theme:"bootstrap",
    placeholder:"",
    width: '100%'
});
$("#commentForm").bootstrapValidator({
    fields: {
        username: {
            validators: {
                notEmpty: {
                    message: 'The User name is required'
                }
            },
            required: true,
            minlength: 3
        },
        password: {
            validators: {
                notEmpty: {
                    message: 'The password is required'
                },
                different: {
                    field: 'first_name,last_name',
                    message: 'Password should not match user Name'
                }
            }
        },
        confirm: {
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
        fname: {
            validators: {
                notEmpty: {
                    message: 'The first name is required '
                }
            }
        },
        lname: {
            validators: {
                notEmpty: {
                    message: 'The last name is required '
                }
            }
        },
        password3: {
            validators: {
                notEmpty: {
                    message: 'This field is required and mandatory'
                }
            },
            required: true,
            minlength: 3
        },
        age: {
            validators: {
                notEmpty: {},
                digits: {},
                greaterThan: {
                    value: 18
                },
                lessThan: {
                    value: 100
                }
            }
        },
        phone1: {
            validators: {
                notEmpty: {
                    message: 'The home number is required'
                },
                regexp: {
                    regexp: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: 'Enter valid phone number'
                }
            }
        },
        phone2: {
            validators: {
                notEmpty: {
                    message: 'The personal number is required'
                },
                regexp: {
                    regexp: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: 'Enter valid phone number'
                }
            }
        },
        phone3: {
            validators: {
                notEmpty: {
                    message: 'Alternate number is required'
                },
                different: {
                    field: 'phone1',
                    message: 'The alternate number must be different from Home number'
                },
                regexp: {
                    regexp: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: 'Enter valid phone number'
                }
            }
        },
        acceptTerms:{
            validators:{
                notEmpty:{
                    message: 'The checkbox must be checked'
                }
            }
        }
    }
});
$('#acceptTerms').on('ifChanged', function(event){
    $('#commentForm').bootstrapValidator('revalidateField', $('#acceptTerms'));
});
$('#rootwizard').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'onNext': function(tab, navigation, index) {
        var $validator = $('#commentForm').data('bootstrapValidator').validate();
        return $validator.isValid();
    },
    onTabClick: function(tab, navigation, index) {
        return false;
    },
    onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index+1;
        var $percent = ($current/$total) * 100;

        // If it's the last tab then hide the last button and show the finish instead
        if($current >= $total) {
            $('#rootwizard').find('.pager .next').hide();
            $('#rootwizard').find('.pager .finish').show();
            $('#rootwizard').find('.pager .finish').removeClass('disabled');
        } else {
            $('#rootwizard').find('.pager .next').show();
            $('#rootwizard').find('.pager .finish').hide();
        }
        $('#rootwizard .finish').click(function() {
            var $validator = $('#commentForm').data('bootstrapValidator').validate();
            if ($validator.isValid()) {
                $('#myModal').modal('show');
                return $validator.isValid();
                $('#rootwizard').find("a[href='#tab1']").tab('show');
            }
        });

    }});

$('input[type="checkbox"].custom-checkbox, input[type="radio"].custom-radio').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    increaseArea: '20%'
});