/**
 * Created by user on 8/6/16.
 */
$(document).ready(function () {

    flatpickr('#disableRangeMultiple', {

        disable:
            [
                { 'from' : "2017-07-06", 'to' : "2017-07-09" },
                { 'from' : "August 25, 2017", 'to' : "August 30, 2017" }
            ],
        minDate: "today",
        dateFormat: 'Y-m-d'

    });

    var check_in = flatpickr("#check_in_date", {minDate: new Date()});
    var check_out = flatpickr("#check_out_date", {minDate: new Date()});

    check_in.set("onChange", function (d) {
        check_out.set("minDate", d.fp_incr(1)); //increment by one day
    });
    check_out.set("onChange", function (d) {
        check_in.set("maxDate", d);
    });

    $('.datepicker1').pickadate();
    $('.timepicker').pickatime();

    var calendars = flatpickr(".flatpickr");
    flatpickr(".calendar");
    calendars.byID("alt").config.onChange = function (obj, str) {
        document.querySelector("#realdate").innerText = str;
    };


    var disabledDays = [0, 6];

    $('#disabled-days').datepicker({
        language: 'en',
        onRenderCell: function (date, cellType) {
            if (cellType == 'day') {
                var day = date.getDay(),
                    isDisabled = disabledDays.indexOf(day) != -1;

                return {
                    disabled: isDisabled
                }
            }
        }
    });

    var start = new Date(),
        prevDay,
        startHours = 9;

// 09:00 AM
    start.setHours(9);
    start.setMinutes(0);

// If today is Saturday or Sunday set 10:00 AM
    if ([6, 0].indexOf(start.getDay()) != -1) {
        start.setHours(10);
        startHours = 10
    }

    $('#timepicker-actions-exmpl').datepicker({
        timepicker: true,
        language: 'en',
        startDate: start,
        minHours: startHours,
        maxHours: 18,
        onSelect: function (fd, d, picker) {
            // Do nothing if selection was cleared
            if (!d) return;

            var day = d.getDay();

            // Trigger only if date is changed
            if (prevDay != undefined && prevDay == day) return;
            prevDay = day;

            // If chosen day is Saturday or Sunday when set
            // hour value for weekends, else restore defaults
            if (day == 6 || day == 0) {
                picker.update({
                    minHours: 10,
                    maxHours: 16
                })
            } else {
                picker.update({
                    minHours: 9,
                    maxHours: 18
                })
            }
        }
    });


    var eventDates = [1, 10, 12, 22],
        $picker = $('#custom-cells'),
        $content = $('#custom-cells-events'),
        sentences = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita prorsus, inquam; Si enim ad populum me vocas, eum. Ita prorsus, inquam; Nonne igitur tibi videntur, inquit, mala? Hunc vos beatum; Idemne, quod iucunde? ',
            'Ratio quidem vestra sic cogit. Illi enim inter se dissentiunt. Tu vero, inquam, ducas licet, si sequetur; Non semper, inquam; ',
            'Duo Reges: constructio interrete. A mene tu? Ea possunt paria non esse. Est, ut dicis, inquam. Scaevolam M. Quid iudicant sensus? ',
            'Poterat autem inpune; Qui est in parvis malis. Prave, nequiter, turpiter cenabat; Ita credo. '
        ];
    $picker.datepicker({
        language: 'en',
        onRenderCell: function (date, cellType) {
            var currentDate = date.getDate();
            if (cellType == 'day' && eventDates.indexOf(currentDate) != -1) {
                return {
                    html: currentDate + '<span class="dp-note"></span>'
                }
            }
        },
        onSelect: function onSelect(fd, date) {
            var title = '',
                content = '';
            if (date && eventDates.indexOf(date.getDate()) != -1) {
                title = fd;
                content = sentences[Math.floor(Math.random() * eventDates.length)];
            }
            $('strong', $content).html(title);
            $('p', $content).html(content);
        }
    });
    var currentDate = new Date();
    $picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10));
});