$(document).ready(function() {


    /* Calendar */
    function ini_events(ele) {
        ele.each(function() {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });

        });
    }
    ini_events($('#external-events div.external-event'));


    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
    //Date for the calendar events (dummy data)
    var date = new Date();
    var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        //Random events
        events: [{
            title: 'Team Out',
            start: new Date(y, m, 1),
            backgroundColor: ('#418BCA')
        },
            {
                title: 'Holiday',
                start: new Date(y, m,  10),
                backgroundColor: ('#01BC8C')
            }, {
                title: 'Seminar',
                start: new Date(y, m, 12),
                backgroundColor: ('#67C5DF')
            }, {
                title: 'Product Seminar',
                start: '2017-04-18',
                end: '2017-04-20',
                backgroundColor: "#A9B6BC"
            },{
                title: 'Anniversary Celebrations',
                start: new Date(y, m, 22),
                backgroundColor: ('#EF6F6C')
            },{
                title: 'Event Day',
                start: new Date(y, m, 31),
                backgroundColor: ('#EF6F6C')
            }, {
                title: 'Product Seminar',
                start: '2017-05-18',
                end: '2017-05-20',
                backgroundColor: "#A9B6BC"
            }, {
                title: 'Product Seminar',
                start: '2017-06-18',
                end: '2017-06-20',
                backgroundColor: "#A9B6BC"
            }, {
                title: 'Product Seminar',
                start: '2017-07-18',
                end: '2017-07-20',
                backgroundColor: "#A9B6BC"
            }, {
                title: 'Product Seminar',
                start: '2017-08-18',
                end: '2017-08-20',
                backgroundColor: "#A9B6BC"
            }, {
                title: 'Product Seminar',
                start: '2017-09-18',
                end: '2017-09-20',
                backgroundColor: "#A9B6BC"
            }],
        eventClick:  function(event, jsEvent, view) {
            $('#modalTitle, #eventInfo').html(event.title);
            $('#modalBody').html(event.description);
            $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
            $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
            $('#eventUrl').attr('href',event.url);
            $('#fullCalModal').modal();
        },
        editable: true,
        droppable: true,
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;
            copiedEventObject.backgroundColor = $(this).css("background-color");
            copiedEventObject.borderColor = $(this).css("border-color");

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
            $(".event_count").text(parseInt($(".event_count").text()) + 1);

            // is the "remove after drop" checkbox checked?
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        }
    });

    /* ADDING EVENTS */
    var defaultColor = "#A9B6BC";
    var lettercolor = "#fff"; //default
    $("#color-chooser-btn").css({ "background-color": defaultColor, "color": lettercolor });
    //Color chooser button
    var colorChooser = $("#color-chooser-btn");
    $('.reset').on('click',function(){
        $('#new-event').val('');
    });
    $("#color-chooser > li > a").click(function(e) {
        e.preventDefault();
        //Save color
        currColor = $(this).css("background-color");
        //Add color effect to button
        colorChooser
            .css({
                "background-color": currColor,
                "border-color": currColor
            })
            .html($(this).text() + ' <span class="caret"></span>');
    });
    $("#add-new-event").click(function(e) {
        e.preventDefault();
        //Get value and make sure it is not null
        var val = $("#new-event").val();
        if (val.length == 0) {
            return;
        }

        //Create event
        var event = $("<div />");
        event.css({
            "background-color": currColor,
            "border-color": currColor,
            "color": "#fff"
        }).addClass("external-event");
        event.html(val).append('<i class="fa fa-times event-clear" aria-hidden="true" style="margin-left: 3px;"></i>');
        $('#external-events').prepend(event);

        //Add draggable funtionality
        ini_events(event);

    });
    //Remove event from text input
    $('.createevent_btn').on("click", function() {
        $("#new-event").val(" ");
    });
    $(document).on('click', '.event-clear', function() {
        $(this).closest('div').remove();
    });
});
$('input[type="checkbox"].custom-checkbox').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    increaseArea: '20%'
});