
$("#multiselect1").multiselect();
$("#multiselect2").multiselect({
    enableFiltering: true,
    includeSelectAllOption: true,
    maxHeight: 800,
    dropUp: true
});
$("#select21").select2({
    theme:"bootstrap",
    placeholder:"select a value"
});
$("#select22").select2({
    theme:"bootstrap",
    placeholder:"select a value"
});
function formatState (state) {
    if (!state.id) { return state.text; }
    var $state = $(
        '<span><img src="../assets/img/us_states_flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" width="20px" height="20px" /> ' + state.text + '</span>'
    );
    return $state;


}
$("#select23").select2({
    templateResult: formatState,
    templateSelection: formatState,
    placeholder: "select",
    theme:"bootstrap"
});
$('#select24').select2({
    allowClear: true,
    theme:"bootstrap",
    placeholder: "select"
});
$('#select25').select2({
    allowClear: true,
    theme:"bootstrap",
    placeholder: "select"
});

$('#select26').select2({
    placeholder: "select",
    theme:"bootstrap"
});


$('#select-gear').selectize({
    sortField: 'text'
});
$("#selectize3").selectize({
    maxItems: 3
});
$('#selectize-tags1').selectize({
    plugins: ['restore_on_backspace'],
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});
$('#selectize-tags2').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    create: function (input) {
        return {
            value: input,
            text: input
        }
    }
});
$('#selectize-tags3').selectize({
   plugins: ['drag_drop'],
   delimiter: ',',persist: false,
   create: function(input) {
      return {
           value: input,
           text: input
       }
   }
});

