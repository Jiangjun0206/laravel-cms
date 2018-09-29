//escape text so that javascript can not be executed
var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
}

$(document).ready(function () {
    var deleteIcon= "<i  class='livicon trash remove' data-name='trash' data-size='18' data-loop='true' data-c='#f56954' data-hc='#f56954' style='cursor:pointer'></i>";
    var editIcon= "<i class='livicon edit pencil' data-name='edit' data-size='18' data-loop='true' data-c='#428BCA' data-hc='#428BCA'></i>";
    var currentDate = new Date();
    var deleteButton = " <a href='' class='tododelete redcolor'>"+ deleteIcon+ "</a>";
    var striks = "<span id='striks'> |  </span>";
    var editButton = "<a href='' class='todoedit'>"+ editIcon +"</a>";
    var checkBox = "<p><input type='checkbox' class='striked ' autocomplete='off' /></p>";
    var twoButtons = "<div class='col-md-4 col-sm-4 col-xs-4  pull-right showbtns todoitembtns'>" + editButton + striks + deleteButton + "</div>";
    var oneButton = "<div class='col-md-4 col-sm-4 col-xs-4  pull-right showbtns todoitembtns'>" + deleteButton + "</div>";
    var fewSeconds = 2;
    $('.add_button').bind('click',function(e){
        e.preventDefault();
        if($('#task_description').val() == ''){
            alert('The task description field is required');
            return false;
        }
        else if($('#task_deadline').val() == '') {
            alert('The task deadline field is required');
            return false;
        }
        var btn = $(this);
        btn.prop('disabled', true);
        setTimeout(function(){
            btn.prop('disabled', false);
        }, fewSeconds*1000);
        $.ajax({
            type: "POST",
            url: "admin/task/create",
            data: $("form#main_input_box").serialize(),
            success: function (id) {
                var count = $('#taskcount').text();
                count = parseInt(count) + 1;
                $(".list_of_items").prepend("<div class='todolist_list showactions list1' id='" + id + "'>  " + "<div class='col-md-8 col-sm-8 col-xs-8 nopadmar custom_textbox1'> <div class='todoitemcheck'>" + checkBox + "</div>" + "<div class='todotext todoitemjs'>" + $("#task_description").val() + " </div> <div class='date'> <span class='label label-default end_date'>" + $("#task_deadline").val() + "</span></div></div>" + twoButtons);
                $('#taskcount').text(count);
                $("#task_description").val('');
                $("#task_deadline").val('');
                $('.datepicker').datetimepicker('update');
                setTimeout(function(){
                    $('.livicon').updateLivicon();
                },500);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.responseJSON.message);
            }
        });

    });

    $.ajax({
        type: "GET",
        url: "task/data",
        success: function (result) {
            $.each(result, function (i, item) {
                $('.list_of_items').append("<div class='todolist_list showactions list1' id='" + item.id + "'>   " +
                    "<div class='col-md-8 col-sm-8 col-xs-8 nopadmar custom_textbox1'> <div class='todoitemcheck'>" + "<p><input type='checkbox' class='striked ' autocomplete='off' " + ((item.finished == 1) ? "checked" : "") + "/></p>" +
                    "</div> <div class='todotext " + ((item.finished == 1) ? "strikethrough" : "") + " todoitemjs'>" + escapeHtml(item.task_description) + "</div> <div class='date'><span class='label label-default end_date'>" +
                    item.task_deadline + "</span></div> </div>" + ((item.finished == 1) ? oneButton : twoButtons));
            });
            $('#taskcount').text(result.length);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
    });
    setTimeout(function(){
        $('.livicon').updateLivicon();
    },500);

$(document).on('click', '.tododelete', function (e) {
    e.preventDefault();
    var ifEditing = $('.list_of_items .todolist_list').find('.edit').hasClass('saved');
    if(ifEditing){
        $('#editConfirmModal').modal();
        return false;
    }
    var id = $(this).parent().parent().attr('id');
    var count = $('#taskcount').text();
    count = parseInt(count) - 1;
    $(this).closest('.todolist_list').hide("slow", function () {
        $(this).remove();
    });
    $('#taskcount').text(count);
    $.ajax({
        type: "POST",
        url: "admin/task/" + id + "/delete",
        data: {_token: $('meta[name="_token"]').attr('content')},
        success: function (id) {

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }

    });
});
$(document).on('click', '.striked', function (e) {
    var ifEditing = $('.list_of_items .todolist_list').find('.edit').hasClass('saved');
    if(ifEditing){
        $('#editConfirmModal').modal();
        return false;
    }
    var id = $(this).closest('.todolist_list').attr('id');
    var hasClass = $(this).closest('.todolist_list').find('.todotext').hasClass('strikethrough');
    var hasEdit = $(this).closest('.todolist_list').find('.todoedit').hasClass('todoedit');
    var striks = "<span id='striks'> |  </span>";
    var editButton = "<a href='' class='todoedit'>"+ editIcon +"</span></a>";

    $.ajax({
        type: "POST",
        url: "admin/task/" + id + "/edit",
        data: {_token: $('meta[name="_token"]').attr('content'), 'finished': ((hasClass) ? 0 : 1)},
    });

    $(this).closest('.todolist_list').find('.todotext').toggleClass('strikethrough');
    if (!hasClass) {
        $(this).closest('.todolist_list').find('.todoedit').hide();
        $(this).closest('.todolist_list').find('#striks').hide();
    } else {
        $(this).closest('.todolist_list').find('.todoedit').show();
        $(this).closest('.todolist_list').find('#striks').show();
    }
    if (!hasEdit) {
        $(this).closest('.todolist_list').find('.tododelete').before(editButton + striks);
    }
    setTimeout(function(){
        $('.livicon').updateLivicon();
    },500);

});

$(document).on('click', '.todoedit .pencil', function (e) {
    e.preventDefault();

    var ifEditing = $('.list_of_items .todolist_list').find('.edit').hasClass('saved');
    if(ifEditing){
        $('#editConfirmModal').modal();
        return false;
    }
    $('.add_button').attr('disabled', true);
    var text = '';date='';
    var current_date= $(this).closest('.todolist_list').find('.end_date').text();
    text = $(this).closest('.todolist_list').find('.todotext').text();
    var text1 = text;
    text = "<input type='text' class='form-control' name='text' value='" + text + "' onkeypress='return event.keyCode != 13;' />";
    var date = "<input type='text' name='date'  class='form-control datepicker' value='" + current_date + "' onkeydown='return false' />";
    $(this).closest('.todolist_list').find('.todotext').html(text);
    $(this).closest('.todolist_list').find('.date').html(date);
    $(this).removeClass('pencil').addClass('saved ');
    $(this).closest('.showactions').find('.tododelete').removeClass('tododelete').addClass('todocancel');
    $(this).closest('.showactions').find('.trash').removeClass('remove').addClass('cancel');
    $(this).closest('.todolist_list').find('.todoitemcheck').hide();
    $('.saved').updateLivicon({
        n : "check"
    });
    $('.cancel').updateLivicon({
        n : "remove-alt"
    });
    $(".datepicker").datetimepicker({
        startDate: currentDate,
        format: "yyyy/mm/dd",
        autoclose: true,
        time:false,
        pickerPosition: "bottom-right",
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    //cancel code
    $(document).on('click', '.todocancel', function (e) {
        e.preventDefault();
        $(this).closest('.todolist_list').find('.todoitemcheck').show();
        var span_date ="<span class='label label-default end_date'>"+  current_date +"</span>";
        $(this).closest('.showactions').find('.todocancel').removeClass('todocancel').addClass('tododelete');
        $(this).closest('.todolist_list').find('.todotext').html(text1);
        $(this).closest('.todolist_list').find('.date').html(span_date);
        $(this).closest('.showactions').find('.edit').removeClass('saved').addClass('pencil');
        $(this).closest('.showactions').find('.trash').removeClass('cancel').addClass('remove');
        $('.pencil').updateLivicon({
            n : "edit"
        });
        $('.remove').updateLivicon({
            n : "trash"
        });
        $('.add_button').attr('disabled', false);
    });
});

$(document).on('click', '.todoedit .saved', function (e) {
    e.preventDefault();
    var text1 = $(this).closest('.todolist_list').find("input[type='text'][name='text']").val();
    var date = $(this).closest('.todolist_list').find("input[type='text'][name='date']").val();
    var span_date ="<span class='label label-default end_date'>"+  date +"</span>";
    if (text1 === '') {
        alert('Come on! you can\'t create a todo without title');
        $(this).closest('.todolist_list').find("input[type='text'][name='text']").focus();

        return;
    }
    $(this).closest('.todolist_list').find('.todoitemcheck').show();
    var id = $(this).closest('.todolist_list').attr('id');
    $.ajax({
        type: "POST",
        url: "admin/task/" + id + "/edit",
        data: {_token: $('meta[name="_token"]').attr('content'), 'task_description': text1,'task_deadline': date},
    });
    $(this).closest('.todolist_list').find('.todotext').html(text1);
    $(this).closest('.todolist_list').find('.date').html(span_date);
    $(this).removeClass('saved').addClass('pencil');
    $(this).closest('.showactions').find('.trash').removeClass('cancel').addClass('remove');
    $('.pencil').updateLivicon({
        n : "edit"
    });
    $('.remove').updateLivicon({
        n : "trash"
    });
    $('.add_button').attr('disabled', false);

});


$(".datepicker").datetimepicker({
    startDate: currentDate,
    format: "yyyy/mm/dd",
    autoclose: true,
    time:false,
    pickerPosition: "bottom-right",
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('#task_deadline').keydown(function() {
    return false;
});
});