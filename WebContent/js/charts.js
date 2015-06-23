/**
 * Created by jetan on 6/19/2015.
 */
function buildSparkLine() {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'spark_container_a1',
            defaultSeriesType: 'area',
            margin: [15, 20, 15, 0],
            backgroundColor: null,
            //borderWidth:1
        },


        exporting: {
            buttons: {
                contextButtons: {
                    enabled: false,
                    menuItems: null
                }
            },
            enabled: false
        },

        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            gridLineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            lineWidth: 0,
            gridLineWidth: 0,
            maxPadding: 0,
            minPadding: 0,
            endOnTick: false,
            labels: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                marker: {
                    radius: 1,
                    states: {
                        hover: {
                            radius: 2
                        }
                    }
                },
                fillOpacity: 0.0
            }
        },


        series: [{
            color: '#fff',
            fillColor: 'rgba(204,204,204,0.0)',
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    }, function (chart) {
        addButtonToChart(chart,"a1");
    });
}

//    var testChart = null;
function buildArea() {
    $('#a4_inner').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            'thebulletin.metapress.com</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    });
}


function buildLine() {
    $('#a8').highcharts({
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (¡ãC)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '¡ãC'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
}

function buildPie() {
    Highcharts.data({
        csv: document.getElementById('tsv').innerHTML,
        itemDelimiter: '\t',
        parsed: function (columns) {

            var brands = {},
                brandsData = [],
                versions = {},
                drilldownSeries = [];

            // Parse percentage strings
            columns[1] = $.map(columns[1], function (value) {
                if (value.indexOf('%') === value.length - 1) {
                    value = parseFloat(value);
                }
                return value;
            });

            $.each(columns[0], function (i, name) {
                var brand,
                    version;

                if (i > 0) {

                    // Remove special edition notes
                    name = name.split(' -')[0];

                    // Split into brand and version
                    version = name.match(/([0-9]+[\.0-9x]*)/);
                    if (version) {
                        version = version[0];
                    }
                    brand = name.replace(version, '');

                    // Create the main data
                    if (!brands[brand]) {
                        brands[brand] = columns[1][i];
                    } else {
                        brands[brand] += columns[1][i];
                    }

                    // Create the version data
                    if (version !== null) {
                        if (!versions[brand]) {
                            versions[brand] = [];
                        }
                        versions[brand].push(['v' + version, columns[1][i]]);
                    }
                }

            });

            $.each(brands, function (name, y) {
                brandsData.push({
                    name: name,
                    y: y,
                    drilldown: versions[name] ? name : null
                });
            });
            $.each(versions, function (key, value) {
                drilldownSeries.push({
                    name: key,
                    id: key,
                    data: value
                });
            });

            // Create the chart
            $('#a8_inner').highcharts({
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares. November, 2013.'
                },
                subtitle: {
                    text: 'Click the slices to view versions. Source: netmarketshare.com.'
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}: {point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }
            });
        }
    });
}


function removeWidget(id)
{
    grid.remove_widget($("#"+id));
}

function addWidget()
{
    var el = grid.add_widget($('<div class="my_block" id="new_id" onmouseover="showBtn(\''+'new_id'+'\')" onmouseout="hideBtn(\''+'new_id'+'\')"><div class="grid-stack-item-content" > ' +
            '<div class="title">new</div><div class="setting"> ' +
            '<span class="glyphicon  glyphicon-remove panel_icon" id="close_btn_'+ 'new_id' +'" aria-hidden="true" style="display:none"/>' +
            '<span class="glyphicon glyphicon-pencil panel_icon"  id="edit_btn_'+ 'new_id' +'" aria-hidden="true" style="display:none"/>' +
            '<span class="glyphicon glyphicon glyphicon-move panel_icon move"  id="move_btn_'+ 'new_id' +'" aria-hidden="true" style="display:none"/>' +
            '</div></div></div>'),
        0,0,4,4);
}

function showBtn(blockID)
{
    $("#close_btn_"+blockID).show();
    $("#edit_btn_"+blockID).show();
    $("#move_btn_"+blockID).show();
}

function hideBtn(blockID)
{
    $("#close_btn_"+blockID).hide();
    $("#edit_btn_"+blockID).hide();
    $("#move_btn_"+blockID).hide();
}
function buildBarChart() {
    var chart = $('#a7_inner').highcharts({
            chart: {
                type: 'column',
                margin: [10, 0, 0, 0],
                backgroundColor: 'rgb(5, 5, 139)',

            },
            legend: {
                enabled: false
            },

            exporting: {
                buttons: {
                    contextButtons: {
                        enabled: false,
                        menuItems: null
                    }
                },
                enabled: false
            },

            title: {
                text: ''
            },
            subTitle: {
                text: ''
            },
            xAxis: {
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                gridLineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },

            credits: {
                enabled: false
            },

            yAxis: {
                lineWidth: 0,
                gridLineWidth: 0,
                maxPadding: 0,
                minPadding: 0,
                endOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                }
            },

            tooltip: {
//                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: -0.1,
                    borderWidth: 0,

                    //pointWidth: 9,
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 216.4, 194.1, 95.6, 54.4, 216.4, 194.1, 95.6, 54.4, 216.4, 194.1, 95.6, 54.4]

            }]
        },

        function (chart) {
            chart.renderer.text('50', 10, 50).css({
                'width': '150px',
                'color': 'white',
                'fontSize': '50px',
                'fontFamily': 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }).attr({
                zIndex: 5
            }).add();
            var chartWidth = $(chart.container).width();

            addButtonToChart(chart, "a7");
        });
}

function addButtonToChart(chart, blockID) {
    var chartWidth = $(chart.container).width();

    chart.renderer.image('./images/close.png', chartWidth - 30, 10, 20, 20).on('click', function () {
        removeWidget(blockID)
    }).attr({
        id:"close_btn_"+blockID,
        zIndex: 50,
        cursor: 'pointer',
        display:"none",
    }).add();

    chart.renderer.image('./images/edit.png', chartWidth - 50, 10, 18, 18).on('click', function () {
        //alert(1);
    }).attr({
        id:"edit_btn_"+blockID,
        zIndex: 50,
        cursor: 'pointer',
        display:"none",
    }).add();

}

