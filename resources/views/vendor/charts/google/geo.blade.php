<script type="text/javascript">
    google.charts.setOnLoadCallback(draw{{ $model->id }})

    function draw{{ $model->id }}() {
        var data = google.visualization.arrayToDataTable([
            ['Country', "Total"],
            @for ($i = 0; $i < count($model->values); $i++)
                ["{{ $model->labels[$i] }}", {{ $model->values[$i] }}],
            @endfor
        ])

        var options = {
            @include('charts::_partials.dimension.js')
            colorAxis: {colors: ['#418BCA', '#00bc8c']},
            region: "{{ $model->region ? $model->region : 'world' }}",
            datalessRegionColor: "#e0e0e0",
            defaultColor: "#607D8",
        };

        var {{ $model->id }} = new google.visualization.GeoChart(document.getElementById("{{ $model->id }}"))

        {{ $model->id }}.draw(data, options)
    }

    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            draw{{ $model->id }}();
        });
    });
    $(window).on('resize', function () {
        setTimeout(function () {
            draw{{ $model->id }}();
        });
    });
</script>

@if(!$model->customId)
    @include('charts::_partials/container.div')
@endif
