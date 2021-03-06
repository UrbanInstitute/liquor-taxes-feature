/**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

//GRAPH STYLES FROM NINE CHARTS: https://github.com/UrbanInstitute/wealth-inequality-charts

// Load the fonts
Highcharts.createElement('link', {
    // href: 'http://fonts.googleapis.com/css?family=Lato:400,600',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    lang: {
      thousandsSep: ','
    },
    colors: ["#008bb0", "#fcb64b", "#000", "#ec008b", "#6d6d6d", "#c6c6c6", "#ec008c",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: "Avenir, sans-serif"
        },
        marginTop: 0,
        marginBottom: 40
    },
    title: {
        style: {
            fontSize: '18px',
            color: '#000'
        },
        align: 'left'
    },
    tooltip: {
        backgroundColor: '#3f4f56',
        borderWidth: 0,
        opacity: .5,
        shape: 'square',
        style: {
            color: '#ffffff',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        align: 'left'
    },
    legend: {
        itemStyle: {
            fontWeight: 500,
            fontSize: '12px',
            color: '#000'
        }
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    xAxis: {
        lineColor: "#000",
        lineWidth: 1,
        gridLineWidth: 0,
        gridLineColor: 'rgba(217,217,217,1)',
        labels: {
            style: {
                fontSize: '12px'
            }
        },

        tickmarkPlacement: 'on'
    },
    yAxis: {
        minorTickInterval: 'none',
        gridLineColor: 'rgba(219,219,216,0.5)',

        title: {

        },
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        },
        area: {
            fillOpacity: 0.5
        },
        series: {
            marker: {
                enabled: false,
                radius: 3,
                lineWidth: 2,
                symbol: 'circle',
                fillColor: '#ffffff',
                lineColor: null
            },
            connectNulls: true

        }

    },
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

var years = ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"];

var crosshairs = {
                    color: 'rgb(159,159,159)',
                    dashStyle: 'solid',
                    width: 1
                }

$(document).ready(function () {
    $(function () {
        $('#percentileFamilyIncome').highcharts({

            chart: {
                marginTop: 100,
                marginBottom: 40

            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
            },

            title: {
                text: 'Illinois alcohol tax rates surged after two measures enacted in 1999 and 2009'
            },
            subtitle: {
                text: '',
                x: 0,
                y: 0
            },
            xAxis: [{
                lineColor: '#fff',
                gridLineWidth: '0',
                lineWidth: 2,
                tickInterval: 1,
                categories: years,
                plotLines: [{
                    className: "line-1",
                    value: 18,
                    color: '#f0573e', 
                    width: 2,
                    dashStyle: "Dash"},
                    {className: "line-2",
                    value: 28,
                    color: '#f0573e', 
                    width: 2,
                    dashStyle: "Dash"
                        }],
                labels: {
                    step: 2,
                    x: 0,
                    y: 20,
                    rotation: 0
                }
            },{
                offset: -104,
                gridLineWidth: '0',
                lineWidth: 1,
                tickInterval: 1,
                categories: years,
                plotLines: [{
                    className: "line-1",
                    value: 17,
                    color: '#f0573e', 
                    width: 2,
                    dashStyle: "Dash"},
                    {className: "line-2",
                    value: 27,
                    color: '#f0573e', 
                    width: 2,
                    dashStyle: "Dash"
                        }],
                labels: {
                    step: 2,
                    x: 0,
                    y: 20,
                    rotation: 0
                }
            }],

            yAxis: {
                // min: -3,
                // max: 6,
                // tickInterval: 1,
                // min: -100,
                // max: 150,
                // tickInterval: 25,
                title: {
                    text: 'Percent from median tax rate',
                    rotation: 0,
                    align: 'high',
                    offset: -120,
                    y: -15,
                    style: {
                        color: '#000',
                        fontStyle: 'italic'
                    }
                },
                labels: {
                    format: '{value:,.0f}', 
                 }
            },
            tooltip: {
                useHTML: true,
                crosshairs: crosshairs,
                shared: true,
                valueDecimals: 0,
                valueSuffix: '%'
            },
            credits: {
                enabled: false,
                text: "",
                href: ""
            },
            legend: {
                enabled: true,
                floating: 'true',
                align: 'center',
                verticalAlign: 'left',
                layout: 'horizontal',
                borderWidth: 0,
                itemDistance: 9,
                y: 40
            },
            series: [
            {
                name: 'Spirits',
                // data: [-1.003198621,-0.980337998,-1.133918288,-1.32267846,-1.301749069,-1.324117807,-1.29292673,-1.25776916,-1.364168193,-1.637842114,-2.00209551,-1.958921636,-1.91674323,-1.877240863,-1.851996738,-1.821148359,-1.793021606,-1.764397431,1.496090304,1.482764271,1.47123814,1.443105768,0.86595626,0.857887636,0.85260436,0.838174688,0.769680111,0.804052396,5.137408678,4.999067074,4.904307221,4.850742105,4.789467138,4.8]
                data: [-18.7986308,-19.0918011,-22.0736011,-25.490535,-25.594312,-26.5003384,-26.781426,-27.0679978,-29.5757959,-34.2432494,-39.518803,-39.5871872,-39.5589061,-39.552312,-39.7322416,-39.7398145,-39.5503706,-39.5142029,33.7486786,34.2119402,34.4668212,34.4800368,18.7081044,19.1300642,19.5974132,19.7782109,18.519475,19.4927109,126.06237,125.2006563,125.0935633,125.7229048,126.3559751,128]

            },{
                name: 'Beer',
                // data: [-0.119429466,-0.115442679,-0.111783481,-0.133736326,-0.131271208,-0.165380941,-0.160265273,-0.154722759,-0.149878663,-0.172115598,-0.173345567,-0.169432935,-0.169284334,-0.165812223,-0.159836526,-0.157156353,-0.155169696,-0.152775772,-0.00476568,-0.003833845,-0.003328633,-0.003240994,-0.002458401,-0.001603838,-0.000720058,-0.000386409,-0.002529627,-0.000860254,0.042423102,0.040635252,0.039785683,0.039810192,0.039758688,0.041]
                data: [-44.0541748,-44.2561622,-44.3777318,-49.7061112,-49.7761606,-56.2677014,-56.4349485,-56.6054587,-56.865175,-60.9917581,-61.7792436,-61.8224586,-62.2864814,-62.2823669,-61.9141249,-61.9189106,-61.7991925,-61.7763366,-1.9176357,-1.5779105,-1.3909978,-1.3813063,-1.0765796,-0.7249465,-0.335489,-0.1848242,-1.2337708,-0.4227409,20.5457236,20.0862226,20.0291162,20.3647068,20.7022859,21.5789474]

            },
            {
                name: 'Wine',
                // data: [-0.46224369,-0.446505022,-0.432173869,-0.458637506,-0.506669127,-0.514527567,-0.498694777,-0.481529339,-0.53246439,-0.59490374,-0.582925373,-0.569758869,-0.557732112,-0.546292827,-0.537470416,-0.528457062,-0.521799809,-0.513753948,0.155829544,0.15560735,0.155020923,0.152088128,0.064359698,0.065423336,0.066768232,0.066281158,0.056515154,0.062603683,0.769618479,0.748454723,0.702849324,0.695640442,0.667097157,0.67]
                data: [-48.1213475,-48.3086507,-48.4213824,-50.7761939,-53.7940677,-54.9202076,-55.0926079,-55.268372,-58.7698296,-62.1898684,-62.3252544,-62.3678521,-62.3502353,-62.3461277,-62.4582088,-62.4629261,-62.3449184,-62.3223889,19.3335433,19.7468755,19.9742861,19.9860773,7.7822341,8.1653568,8.5896911,8.7538482,7.6109661,8.4946256,105.6995904,104.9154964,96.0401335,96.5882441,91.6635023,93.0555556]

            }]

        });







        $('tspan:contains("13,730")').attr("y", 0);
        $('tspan:contains("11,030")').css('fill', '#ec008c');
        $('tspan:contains("134,230")').css('fill', '#1696d2');

    });
});

