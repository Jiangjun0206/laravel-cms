$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}
	$.plot("#placeholdernolegend", data, {
		series: {
			pie: {
				show: true
			}
		},
		legend: {
			show: false
		}, colors: [ '#418BCA', '#F89A14', '#01BC8C', '#EF6F6C', '#67C5DF']
	});
	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});

$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}
	$.plot('#placeholderradiuslabel', data, {
		series: {
			pie: {
				show: true,
				radius: 1,
				label: {
					show: true,
					radius: 3/4,
					formatter: labelFormatter,
					background: {
						opacity: 0.5
					}
				}
			}
		},
		legend: {
			show: false
		}, colors: [ '#418BCA', '#F89A14', '#01BC8C', '#EF6F6C', '#67C5DF']
	});
	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});
//end of label radius pie charts

$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}
	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});
//end of Styled labeld pie charts

$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}

	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});
//end of Styled labeld pie charts
$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}
	$.plot('#placeholderrectangularpie', data, {
		series: {
			pie: {
				show: true,
				radius: 500,
				label: {
					show: true,
					formatter: labelFormatter,
					threshold: 0.1
				}
			}
		},
		legend: {
			show: false
		}, colors: [ '#418BCA', '#F89A14', '#01BC8C', '#EF6F6C', '#67C5DF']
	});
	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});
//end of Rectangular pie charts

$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}
	$.plot('#placeholdertiltedpie', data, {
		series: {
			pie: {
				show: true,
				radius: 1,
				tilt: 0.5,
				label: {
					show: true,
					radius: 1,
					formatter: labelFormatter,
					background: {
						opacity: 0.8
					}
				},
				combine: {
					color: "#999",
					threshold: 0.1
				}
			}
		},
		legend: {
			show: false
		}, colors: [ '#418BCA', '#F89A14', '#01BC8C', '#EF6F6C', '#67C5DF']
	});

	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});
//end of Tilted pie charts

$(function() {
	var data = [],
		series = Math.floor(Math.random() * 6) + 3;

	for (var i = 0; i < series; i++) {
		data[i] = {
			label: "Series" + (i + 1),
			data: Math.floor(Math.random() * 100) + 1
		}
	}
	$.plot('#placeholderdonuthole', data, {
		series: {
			pie: {
				innerRadius: 0.5,
				show: true
			}
		}, colors: [ '#418BCA', '#F89A14', '#01BC8C', '#EF6F6C', '#67C5DF']
	});
	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});
//end of Donet Hole pie charts
function labelFormatter(label, series) {
	return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

//

function setCode(lines) {
	$("#code").text(lines.join("\n"));
}

// d3pie chart code
if($(window).width()<426){
    var x=$("#pie1").width();
}
else if($(window).width()>426 && $(window).width()<769){
    var x=$("#pie1").width()-300;
}
else if($(window).width()>769){
	var x=350;
}
var pie = new d3pie("#pie1", {
	size: {
		canvasHeight: x,
		canvasWidth: x
	},
    labels: {
        mainLabel: {
            font: "Lato"
        },
        percentage: {
            font: "Lato"
        },
        value: {
            font: "Lato"
        },
    },
	data: {
		content: [
			{ label: "One", value: 0.125, color:"#418BCA" },
			{ label: "Two", value: 0.81, color:"#01BC8C" },
			{ label: "Three", value: 0.3, color:"#F89A14" }
		]
	}
});
if($(window).width()<426){
    var x=$("#pie2").width();
}
else if($(window).width()>426 && $(window).width()<769){
    var x=$("#pie2").width()-300;
}
else if($(window).width()>769){
    var x=350;
}
var pie = new d3pie("#pie2", {
	size: {
		canvasHeight: x,
		canvasWidth: x
	},
	labels: {
		inner: {
			format: "none"
		},
        mainLabel: {
            font: "Lato"
        },
        percentage: {
            font: "Lato"
        },
        value: {
            font: "Lato"
        },
	},
	data: {
		content: [
			{ label: "JavaScript", value: 1, color:"#418BCA" },
			{ label: "Ruby", value: 2, color:"#01BC8C" },
			{ label: "Java", value: 3, color:"#F89A14" }

		]
	},
	tooltips: {
		enabled: true,
		type: "placeholder",
		string: "{label}, {value}, {percentage}%"
	}
});
if($(window).width()<426){
    var x=$("#pie3").width();
}
else if($(window).width()>426 && $(window).width()<769){
    var x=$("#pie3").width()-300;
}
else if($(window).width()>769){
    var x=350;
}
var pie = new d3pie("#pie3", {
	size: {
		pieOuterRadius: "100%",
		canvasHeight: x,
        canvasWidth: x
	},
    labels: {
        mainLabel: {
            font: "Lato"
        },
        percentage: {
            font: "Lato"
        }
    },
	data: {
		sortOrder: "value-asc",
		smallSegmentGrouping: {
			enabled: true,
			value: 2,
			valueType: "percentage",
			label: "Other birds"
		},
		content: [
			{ label: "Bushtit", value: 5, color:"#418BCA" },
			{ label: "Chickadee", value: 2, color:"#01BC8C"},
			{ label: "Elephants", value: 6, color:"#F89A14"},
			{ label: "Killdeer", value: 3, color:"#67C5DF"},
			{ label: "Caspian Tern", value: 2,color:"#EF6F6C"},
			{ label: "Blackbird", value: 1,color:"#418BCA"},
			{ label: "Song Sparrow", value: 6,color:"#01BC8C"},
			{ label: "Blue Jay", value: 5, color:"#01BC8C"},
			{ label: "Black-throated Gray warbler", value: 1, color:"#F89A14"},
			{ label: "Pelican", value: 6, color:"#67C5DF"},
			{ label: "Bewick's Wren", value: 5, color:"#EF6F6C"},
			{ label: "Cowbird", value: 1, color:"#EF6F6C"},
			{ label: "Fox Sparrow", value: 6, color:"#EF6F6C"},
			{ label: "Common Yellowthroat", value: 5, color:"#418BCA"},
			{ label: "Virginia Rail", value: 1, color:"#418BCA"},
			{ label: "Sora", value: 1, color:"#01BC8C"},
			{ label: "Osprey", value: 1, color:"#01BC8C"},
			{ label: "Merlin", value: 1, color:"#F89A14"},
			{ label: "Kestrel", value: 1, color:"#67C5DF"}
		]
	},
	tooltips: {
		enabled: true,
		type: "placeholder",
		string: "{label}, {value}, {percentage}%"
	}
});
if($(window).width()<426){
    var x=$("#pie4").width();
}
else if($(window).width()>426 && $(window).width()<769){
    var x=$("#pie4").width()-300;
}
else if($(window).width()>769){
    var x=350;
}
var pie = new d3pie("pie4", {
	size: {
		pieInnerRadius: "80%",
		canvasHeight: x,
		canvasWidth: x
	},
    labels: {
        mainLabel: {
            font: "Lato"
        },
        percentage: {
            font: "Lato"
        },
        value: {
            font: "Lato"
        },
    },
	header: {
		title: {
			text: "A Simple Donut Pie",
            font: "Lato"
		},
		location: "pie-center"
	},
	data: {
		sortOrder: "label-asc",
		content: [
			{ label: "JavaScript", value: 1, color:"#418BCA" },
			{ label: "Ruby", value: 2, color:"#01BC8C" },
			{ label: "Java", value: 3, color:"#F89A14" },
			{ label: "C++", value: 2, color:"#67C5DF" },
			{ label: "Objective-C", value: 6,color:"#EF6F6C"}
		]
	},
	tooltips: {
		enabled: true,
		type: "placeholder",
		string: "{label}, {value}, {percentage}%"
	}
});

/*------c3 pie chart----*/

var chart = c3.generate({
	bindto: '#chart',
	data: {
		// iris data from R
		columns: [
			['data1', 30],
			['data2', 120],
			['data3', 85]
		],
		type : 'pie'
	}
});

/*--morris donut chart--*/

Morris.Donut({
	element: 'morris-chart',
	colors:['#418BCA', '#01BC8C', '#F89A14'],
	data: [
		{label: "Data1", value: 12},
		{label: "Data2", value: 30},
		{label: "Data3", value: 20}
	]
});
