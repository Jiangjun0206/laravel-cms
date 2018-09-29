$(document).ready(function() {
    $('input[type="checkbox"].custom-checkbox, input[type="radio"].custom-radio').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%'
    });
    $('#reset').click(function() {
        $('input').iCheck('uncheck');
    });

});
