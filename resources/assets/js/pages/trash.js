$(document).ready(function() {
    $("#inbox-check #checkall").click(function() {

        if ($("#inbox-check #checkall").is(':checked')) {
            $("#inbox-check input[type=checkbox]").each(function() {
                $(this).prop("checked", true);
            });
        } else {
            $("#inbox-check input[type=checkbox]").each(function() {
                $(this).prop("checked", false);
            });
        }
    });
    $('#slimscrollside').slimscroll({
        height: '700px',
        size: '3px',
        color: 'black',
        opacity: .3
    });
});