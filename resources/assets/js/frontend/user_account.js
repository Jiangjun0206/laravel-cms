
$('input[type="radio"],input[type="checkbox"]').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    increaseArea: '20%' // optional
});


// function format(state) {
//     if (!state.id) return state.text; // optgroup
//     return "<span><img class='flag' src='assets/img/countries_flags/" + state.id.toLowerCase() + ".png'/></span>&nbsp;&nbsp;" + state.text;
// }

function formatState (state) {
    if (!state.id) { return state.text; }
    var $state = $(
        '<span><img src="assets/img/countries_flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" width="20px" height="20px" /> ' + state.text + '</span>'
    );
    return $state;
}


$("#countries").select2({
    templateResult: formatState,
    templateSelection: formatState,
    placeholder: "select a country",
    theme:"bootstrap"
});

$(function() {
    $( "#datepicker" ).datetimepicker({
        format: 'YYYY-MM-DD',
        keepOpen: false,
        useCurrent: false,
        maxDate:moment().add('h', 1).toDate()
    });
});
