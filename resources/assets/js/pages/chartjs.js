$(function () {

    //start line chart
    var lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                fill:true,
                tension:0,
                pointBackgroundColor:"rgba(65,139,202,0.5)",
                pointBorderColor:"#fff",
                borderJoinStyle: 'miter',
                pointBorderWidth:"1",
                label:"data1",
                data : [130,63,103,51,93,55,80,140,100,92,108,110],
                backgroundColor:"rgba(65,139,202,0.5)"
            },
            {
                fill:true,
                tension:0,
                pointBackgroundColor:"rgba(239,111,108,0.5)",
                pointBorderColor:"#fff",
                borderJoinStyle: 'miter',
                pointBorderWidth:"1",
                pointStrokeColor: "#fff",
                label:"data2",
                data : [30,48,35,24,35,27,50,40,60,35,46,30],
                backgroundColor:"rgba(239,111,108,0.5)"
            }
        ]

    };

    function draw() {

        var selector = '#line-chart';

        $(selector).attr('width', $(selector).parent().width());
        var myLine = new Chart($("#line-chart"), {
            type: 'line',
            data: lineChartData,
            options: {
                title: {
                    display: false,
                    text: 'Line Chart'
                }
            }
        });
    }

    draw();
    //endline chart

    //start bar chart
    var barChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label:"data1",
                backgroundColor: "#f89a14",
                hoverBackgroundColor: "#f89a14",
                data : [65,59,90,81,56,55,40,30,50,20,80,99]

            },
            {
                label:"data2",
                backgroundColor: "#418bca",
                hoverBackgroundColor: "#418bca",
                data: [30, 20, 100, 10, 80, 27, 50, 30, 60, 40, 80, 66, 90]
            }
        ]

    };

    function draw1() {

        var selector = '#bar-chart';

        $(selector).attr('width', $(selector).parent().width());
        var myBar = new Chart($("#bar-chart"), {
            type: 'bar',
            data: barChartData
        });
    }

    draw1();


    //end bar chart

    //start radar chart
    var radarChartData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Partying", "Running"],
        datasets: [

            {
                backgroundColor: "rgba(248,154,20,0.5)",
                hoverBackgroundColor: "rgba(248,154,20,0.5)",
                pointBackgroundColor: "rgba(248,154,20,0.5)",
                pointHoverBackgroundColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40],
                label: 'data1'
            },
            {
                backgroundColor: "rgba(1,188,140,0.5)",
                hoverBackgroundColor: "rgba(1,188,140,0.5)",
                pointBackgroundColor: "rgba(1,188,140,0.5)",
                pointHoverBackgroundColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100],
                label: 'data2'
            }
        ]

    };

    function draw2() {

        var selector = '#radar-chart';

        $(selector).attr('width', $(selector).parent().width());
        var myRadar = new Chart($("#radar-chart"),
            {
                type: 'radar',
                data: radarChartData
            });
    }

    draw2();

    //end  radar chart

    //start polar area chart


    var chartData = {
        datasets: [{
            data: [
                15,
                18,
                10,
                8,
                16,
                20

            ],
            backgroundColor: [
                "#01BC8C",
                "#F89A14",
                "#418BCA",
                "#EF6F6C",
                "#A9B6BC",
                "#67C5DF"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "data1",
            "data2",
            "data3",
            "data4",
            "data5",
            "data6"
        ]
    };


    function draw3() {

        var selector = '#polar-area-chart';

        $(selector).attr('width', $(selector).parent().width());
        var myPolarArea = new Chart($("#polar-area-chart"), {
            data: chartData,
            type: 'polarArea'
        });
    }

    draw3();

    //end polar area chart

    //start pie chart
    var pieData = {
        labels: [
            "Blue",
            "Green",
            "Orange"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#418BCA",
                    "#01BC8C",
                    "#F89A14"
                ],
                hoverBackgroundColor: [
                    "#418BCA",
                    "#01BC8C",
                    "#F89A14"
                ]
            }]
    };

    function draw4() {

        var selector = '#pie-chart';

        $(selector).attr('width', $(selector).parent().width());
        var myPie = new Chart($("#pie-chart"), {
            type: 'pie',
            data: pieData
        });
    }

    draw4();

    //end pie chart

    //start doughnut chart
    var doughnutData = {

        labels: [
            "Orange",
            "Green",
            "Blue"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#F89A14",
                    "#01BC8C",
                    "#67c5df"
                ],
                hoverBackgroundColor: [
                    "#F89A14",
                    "#01BC8C",
                    "#67c5df"
                ]
            }]

    };

    function draw5() {

        var selector = '#doughnut-chart';

        $(selector).attr('width', $(selector).parent().width());
        var myDoughnut = new Chart($("#doughnut-chart"),
            {
                type: 'doughnut',
                data: doughnutData
            });
    }

    draw5();


    //end doughnut chart

});