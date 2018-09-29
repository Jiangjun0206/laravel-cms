<script type="text/javascript">
    google.charts.setOnLoadCallback(drawPieChart)

    function drawPieChart() {
        var data = google.visualization.arrayToDataTable([
            ['Element', 'Value'],
            @for($i = 0; $i < count($model->values); $i++)
                ["{!! $model->labels[$i] !!}", {{ $model->values[$i] }}],
            @endfor
        ])

        var options = {
            @include('charts::_partials.dimension.js')
            fontSize: 12,

            @include('charts::google.colors')
        };

        var chart = new google.visualization.PieChart(document.getElementById("{{ $model->id }}"))
        chart.draw(data, options)
    }

    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            drawPieChart();
        });
    });
    $(window).on('resize', function () {
        setTimeout(function () {
            drawPieChart();
        });
    });
</script>

@if(!$model->customId)
    @include('charts::_partials.container.div')
@endif
