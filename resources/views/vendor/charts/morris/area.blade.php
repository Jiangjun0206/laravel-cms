{{--@include('charts::_partials/container.div-titled')--}}

<script type="text/javascript">
    Morris.Area.prototype.fillForSeries = function(i)
    {
        var color;
        return "10-#63ceb3-#41b9af";
    }

    function Draw{{ $model->id }}() {
        Morris.Area({
            element: "{{ $model->id }}",
            resize: true,
            data: [
                @for ($i = 0; $i < count($model->values); $i++)
                    {
                        x: "{!! $model->labels[$i] !!}",
                        y: {{ $model->values[$i] }}
                    },
                @endfor
            ],
            xkey: 'x',
            ykeys: ['y'],
            labels: ["{!! $model->element_label !!}"],
            hideHover: 'auto',
            fillOpacity: 0.6,
            lineWidth: 0.5,
            pointSize: 0,
            lineColors: ['#35978f', '#00bc8c', '#EF6F6C'],
            parseTime: false,

        })
    };
    Draw{{ $model->id }}();
  $(".sidebar-toggle").on("click",function () {
      setTimeout(function () {
          $('#{{ $model->id }}').empty();
          Draw{{ $model->id }}();
      },10);
  });

</script>
@if(!$model->customId)
    @include('charts::_partials.container.div')
@endif