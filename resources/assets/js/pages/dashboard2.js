'use strict';



var week_data = {!! $month_visits !!};
var year_data = {!! $year_visits !!};

function lineChart() {
    Morris.Line({
        element: 'visitors_chart',
        data: week_data,
        lineColors: ['#418BCA', '#00bc8c', '#EF6F6C'],
        xkey: 'date',
        ykeys: ['pageViews', 'visitors'],
        labels: ['pageViews', 'visitors'],
        pointSize: 0,
        lineWidth: 2,
        resize: true,
        fillOpacity: 1,
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        hideHover: 'auto'

    });
}
function barChart() {
    Morris.Bar({
        element: 'bar_chart',
        data: year_data.length ? year_data :   [ { label:"No Data", value:100 } ],
        lineColors: ['#418BCA', '#00bc8c', '#EF6F6C'],
        xkey: 'date',
        ykeys: ['pageViews', 'visitors'],
        labels: ['pageViews', 'visitors'],
        pointSize: 0,
        lineWidth: 2,
        resize: true,
        fillOpacity: 1,
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        hideHover: 'auto'

    });
}
lineChart();
barChart();
$(".sidebar-toggle").on("click",function () {
    setTimeout(function () {
        $('#visitors_chart').empty();
        $('#bar_chart').empty();
        lineChart();
        barChart();
    },10);
});