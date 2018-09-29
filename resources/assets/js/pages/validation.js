$(document).ready(function() {


    $('#form_validation').bootstrapValidator({
        excluded: [':disabled'],
        fields: {
            txtName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            txtEmail: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            display_name: {
                validators: {
                    notEmpty: {
                        message: 'Address line1 is required'
                    }
                }
            },
            display_name1: {
                validators: {
                    notEmpty: {
                        message: 'Address line2 is required'
                    }
                }
            },
            select_state: {
                validators: {
                    notEmpty: {
                        message: 'You must select a state'
                    }
                }
            },
            activate: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and policies'
                    }
                }
            },
            txtPhone: {
                validators: {
                    notEmpty: {
                        message: 'Phone number is required'
                    },
                    regexp: {
                        regexp: /^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/,
                        message: 'Enter valid phone number'
                    }
                }
            }

        }
    });
    $('#capch_form').bootstrapValidator({

        fields: {

            txtphone: {
                validators: {
                    notEmpty: {
                        message: 'Phone number is required'
                    }
                }
            },
            CaptchaCode: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Captcha code'
                    }
                }
            }

        }
    });
    $('.BDC_CaptchaImageDiv').find('a').remove();
    $('#reset').on('click', function () {
        $('#form_validation').bootstrapValidator("resetForm", true);
        $("#form_validation").find(".icheckbox_minimal-blue").removeClass('checked');
    });
    $("#form-validation3").bootstrapValidator({
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },
            display_name: {
                validators: {
                    notEmpty: {
                        message: 'The display name is required and cannot be empty'
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
            terms: {
                validators: {
                    choice: {
                        min: 1,
                        message: 'Please accept the terms and conditions'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'first_name,last_name',
                        message: 'Password should not match first name or last name'
                    }
                }
            },
            confirmpassword: {
                validators: {
                    notEmpty: {
                        message: 'The Confirm Password is required and cannot be empty'
                    },
                    identical: {
                        field: 'password'
                    },
                    different: {
                        field: 'first_name,last_name',
                        message: 'Confirm Password should match with password'
                    }
                }
            }
        }
    });
    $('#terms').on('ifChanged', function (event) {
        $('#form-validation3').bootstrapValidator('revalidateField', $('#terms'));
    });
    // Validation in Modal Form  Reset
    $('.resetModal').on('click', function () {


        if ($("#form-validation3 #terms").prop('checked') == true) {
            $("#form-validation3").find(".icheckbox_minimal-blue").removeClass('checked');
        }
        $('#form-validation3').bootstrapValidator("resetForm", true);
    });
    $('#activate').on('ifChanged', function (event) {
        $('#form_validation').bootstrapValidator('revalidateField', $('#activate'));
    });

    $('#tryitForm').bootstrapValidator({
        excluded: [':disabled'],
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
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
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            }
        },
        submitHandler: function (validator, form, submitButton) {
            var fullName = [validator.getFieldElements('firstName').val(),
                validator.getFieldElements('lastName').val()
            ].join(' ');
            $('#helloModal')
                .find('.modal-title').html('Hello ' + fullName).end()
                .modal();
        }
    });
    $('input:radio[name="gender"]').on('ifChanged', function (event) {
        $('#tryitForm').bootstrapValidator('revalidateField', $('input:radio[name="gender"]'));
    });


    $('#form-validation1').bootstrapValidator();
    $("input[type=password]").keyup(function () {
        var ucase = new RegExp("[A-Z]+");
        var lcase = new RegExp("[a-z]+");
        var num = new RegExp("[0-9]+");

        if ($("#password1").val().length >= 8) {
            $("#8char").removeClass("glyphicon-remove");
            $("#8char").addClass("glyphicon-ok");
            $("#8char").css("color", "#00A41E");
        } else {
            $("#8char").removeClass("glyphicon-ok");
            $("#8char").addClass("glyphicon-remove");
            $("#8char").css("color", "#FF0004");
        }

        if (ucase.test($("#password1").val())) {
            $("#ucase").removeClass("glyphicon-remove");
            $("#ucase").addClass("glyphicon-ok");
            $("#ucase").css("color", "#00A41E");
        } else {
            $("#ucase").removeClass("glyphicon-ok");
            $("#ucase").addClass("glyphicon-remove");
            $("#ucase").css("color", "#FF0004");
        }

        if (lcase.test($("#password1").val())) {
            $("#lcase").removeClass("glyphicon-remove");
            $("#lcase").addClass("glyphicon-ok");
            $("#lcase").css("color", "#00A41E");
        } else {
            $("#lcase").removeClass("glyphicon-ok");
            $("#lcase").addClass("glyphicon-remove");
            $("#lcase").css("color", "#FF0004");
        }

        if (num.test($("#password1").val())) {
            $("#num").removeClass("glyphicon-remove");
            $("#num").addClass("glyphicon-ok");
            $("#num").css("color", "#00A41E");
        } else {
            $("#num").removeClass("glyphicon-ok");
            $("#num").addClass("glyphicon-remove");
            $("#num").css("color", "#FF0004");
        }


        if ($("#password1").val() == $("#password2").val()) {
            $("#pwmatch").removeClass("glyphicon-remove");
            $("#pwmatch").addClass("glyphicon-ok");
            $("#pwmatch").css("color", "#00A41E");
        } else {
            $("#pwmatch").removeClass("glyphicon-ok");
            $("#pwmatch").addClass("glyphicon-remove");
            $("#pwmatch").css("color", "#FF0004");
        }
        if ($("#password1").val() == "" && $("#password2").val() == "") {
            $("#pwmatch").removeClass("glyphicon-ok");
            $("#pwmatch").addClass("glyphicon-remove");
            $("#pwmatch").css("color", "#FF0004");
        }
    });
    $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup, change', function () {
        var $group = $(this).closest('.input-group'),
            $addon = $group.find('.input-group-addon'),
            $icon = $addon.find('span'),
            state = false;

        if (!$group.data('validate')) {
            state = $(this).val() ? true : false;
        } else if ($group.data('validate') == "email") {
            state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
        } else if ($group.data('validate') == 'phone') {
            state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
        } else if ($group.data('validate') == "length") {
            state = $(this).val().length >= $group.data('length') ? true : false;
        } else if ($group.data('validate') == "number") {
            state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
        }

        if (state) {
            $addon.removeClass('danger');
            $addon.addClass('success');
            $icon.attr('class', 'glyphicon glyphicon-ok');
        } else {
            $addon.removeClass('success');
            $addon.addClass('danger');
            $icon.attr('class', 'glyphicon glyphicon-remove');
        }
    });

    $('input[type="checkbox"].custom-checkbox, input[type="radio"].custom-radio').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%'
    });
});
