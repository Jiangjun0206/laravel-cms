//iCheck for checkbox and radio inputs
$('input[type="checkbox"].square, input[type="radio"].square').iCheck({
    checkboxClass: 'icheckbox_square-green',
    radioClass: 'iradio_square-green',
    increaseArea: '20%'
});
//Red color scheme for iCheck
$('input[type="checkbox"].minimal-blue, input[type="radio"].minimal-blue').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    increaseArea: '20%'
});
//Polaris scheme for icheck
$('input[type="checkbox"].polaris, input[type="radio"].polaris').iCheck({
    checkboxClass: 'icheckbox_polaris',
    radioClass: 'iradio_polaris',
    increaseArea: '20%'
});
//Futurico scheme for icheck
$('input[type="checkbox"].futurico, input[type="radio"].futurico').iCheck({
    checkboxClass: 'icheckbox_futurico',
    radioClass: 'iradio_futurico',
    increaseArea: '20%'
});
//Flat red color scheme for iCheck
$('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red',
    increaseArea: '20%'
});
//Flat green color scheme
$('input[type="checkbox"].flat-green, input[type="radio"].flat-green').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass: 'iradio_flat-green',
    increaseArea: '20%'
});

$('input.line').each(function(){
    var self = $(this),
        label = self.next(),
        label_text = label.text();

    label.remove();
    self.iCheck({
        checkboxClass: 'icheckbox_line-red',
        radioClass: 'iradio_line-red',
        increaseArea: '20%',
        insert: '<div class="icheck_line-icon"></div>' + label_text
    });
});

$("[name='my-checkbox']").bootstrapSwitch();


var elem = document.querySelector('.js-switch');
var init = new Switchery(elem, {
    size: 'small',
    color: '#418bca'
});
var elem = document.querySelector('.js-switch2');
var init = new Switchery(elem, {
    size: 'big',
    color: '#418bca'
});
var elem = document.querySelector('.js-switch3');
var init = new Switchery(elem, {
    size: 'large',
    color: '#418bca'
});

var elem = document.querySelector('.js-switch4');
var init = new Switchery(elem, {
    size: 'big',
    color: '#01BC8C'
});
var elem = document.querySelector('.js-switch5');
var init = new Switchery(elem, {
    size: 'big',
    color: '#F89A14'
});
var elem = document.querySelector('.js-switch6');
var init = new Switchery(elem, {
    size: 'big',
    color: '#EF6F6C'
});

var elem = document.querySelector('.js-switch7');
var init = new Switchery(elem, {
    size: 'big',
    color: '#01BC8C'
});
var elem = document.querySelector('.js-switch8');
var init = new Switchery(elem, {
    size: 'big',
    color: '#01BC84'
});
var elem = document.querySelector('.js-switch9');
var init = new Switchery(elem, {
    size: 'big',
    color: '#01BC8C'
});
// end of switchery's.

function changeState(el) {
    if (el.readOnly) el.checked=el.readOnly=false;
    else if (!el.checked) el.readOnly=el.indeterminate=true;
}