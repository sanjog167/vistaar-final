(function($) {
    "use strict";

    if($('#mountain').length > 0) {
        var options1 = {
            series: [
                {
                    name: 'series1',
                    data: [0, 60, 42, 100, 30, 50, 0]
                }, 
                {
                    name: 'series2',
                    data: [0, 50, 30, 70, 45, 55, 0]
                }, 
                {
                    name: 'series3',
                    data: [0, 42, 35, 60, 34, 48, 0]
                }
            ],
            chart: {
                height: 120,
                sparkline: {
                    enabled: !0
                },
                type: 'area',
            },
            fill: {
                colors: ['#029ed7', '#1bc5eb', '#abdbf1'],
                opacity: 0
            },
            stroke: {
                show: false,
                curve: 'straight'
            },
            tooltip: {
                enabled: false
            }
        };
    
        new ApexCharts(document.querySelector("#mountain"), options1).render();
    }   

    if($('#earnings_mountain').length > 0) {
        var options2 = {
            series: [
                {
                    name: 'series1',
                    data: [0, 300, 100, 500, 900, 50]
                }, 
                {
                    name: 'series2',
                    data: [0, 350, 200, 700, 250, 600]
                }, 
                {
                    name: 'series3',
                    data: [0, 700, 35, 60, 34, 48]
                }
            ],
            chart: {
                height: 400,
                type: 'area',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                colors: ['#029ed7', '#1bc5eb', '#abdbf1'],
                opacity: 0
            },
            stroke: {
                show: false,
                curve: 'smooth'
            },
            legend: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            xaxis: {
                categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };
    
        new ApexCharts(document.querySelector("#earnings_mountain"), options2).render();
    }   

    // Line chart 1
    if($('#line_1').length) {
        var options3 = {
          chart: {
            type: "line",
            height: 120,
            sparkline: {
              enabled: !0
            }
          },
          series: [{
              data: [3844, 3855, 3841, 3867]
          }],
          stroke: {
            width: 2,
            curve: "smooth"
          },
          markers: {
            size: 0
          },
          colors: ["#727cf5"],
          xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
          }
        };
        new ApexCharts(document.querySelector("#line_1"),options3).render();
    }

    if($('#progress_chart').length) {
        var options4 = {
            series: [
                {
                    name: "Deposit",
                    data: [5, 10, 41, 35, 51, 49, 62]
                },
                {
                    name: "Withdraw",
                    data: [50, 20, 35, 20, 75, 30, 60]
                },
                {
                    name: "Send Money",
                    data: [15, 30, 15, 40, 55, 20, 40]
                },
                {
                    name: "Deposit Money",
                    data: [5, 60, 20, 45, 15, 55, 25]
                }
            ],                
            chart: {
                height: 450,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#000',
                    opacity: 0.15
                },
                toolbar: {
                    show: false,
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors:["#fb7636", '#24b314', '#027ad7', '#8452e7'],
            xaxis: {
                categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            legend: {
                offsetX: 0,
                offsetY: 15,
                floating: false,
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

       new ApexCharts(document.querySelector("#progress_chart"), options4).render();
    }

    if($('#activity_chart').length) {
        var options4 = {
            series: [
                {
                    name: "Desktops",
                    data: [20, 90, 30, 80, 35, 120]
                }
            ],                
            chart: {
                height: 350,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#7a37ff',
                    opacity: 0.15
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors:["#9967fd"],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 7,
                        fillColor: '#5f10fd',
                        strokeColor: '#5f10fd',
                        size: 5
                    }, 
                    {
                        seriesIndex:3,
                        dataPointIndex: 1,
                        fillColor: '#000',
                        strokeColor: '#eee',
                        size: 4
                    }
                ],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

       new ApexCharts(document.querySelector("#activity_chart"), options4).render();
    }

    if($('#statistics').length) {
        var options5 = {
            series: [
                {
                    name: "Desktops",
                    data: [0, 1000, 500, 2100]
                }
            ],                
            chart: {
                height: 435,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#000',
                    opacity: 0.15
                },
                toolbar: {
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:["#f3466c"],
            xaxis: {
                categories: ['January 2015', 'January 2016', 'January 2017', 'January 2020'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#statistics"), options5).render();
    }

    if($('#sales').length) {
        var options5 = {
            series: [
                {
                    name: "Desktops",
                    data: [0, 1000, 500, 2100]
                }
            ],                
            chart: {
                height: 375,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#8452e7',
                    opacity: 0.15
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:["#f3466c"],
            xaxis: {
                categories: ['January 2015', 'January 2016', 'January 2017', 'January 2020'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#sales"), options5).render();
    }

    if($('#revenue_chart').length) {
        var options6 = {
            series: [
                {
                    name: "day",
                    data: [100, 400, 350, 200, 100, 300, 350, 250, 100, 150, 350, 200]
                },
                {
                    name: "month",
                    data: [100, 400, 150, 300, 150, 400, 100, 300, 100, 400, 200, 300]
                },
                {
                    name: "year",
                    data: [200, 300, 150, 400, 200, 200, 350, 250, 400, 300, 150, 250]
                }
            ],                
            chart: {
                height: 250,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:["#f3466c", "#8452e7", "#23d1f1"],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#revenue_chart"), options6).render();
    }

    // Visitor Chart
    if($("#visitors").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c", "#fb7636"],
            series: [44, 55, 41, 17],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 380,
                parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Search Engine', 'Social Media', 'Direct link', 'Bookmarks Click'],
            legend: {
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                position: 'bottom',
                width: '100%',
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                markers: {
                    radius: 12,
                    width: 12,
                    height: 12,
                    offsetX: -10
                },
                formatter: function(val, opts) {
                    return [val, "<span>"+opts.w.globals.series[opts.seriesIndex]+"%</span>"]
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#visitors"), options7).render();
    }

    // Traffic Sources
    if($("#traffic_sources").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c"],
            series: [44, 55, 41],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 360,
                parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Search Engine', 'Social Media', 'Direct link'],
            legend: {
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                position: 'bottom',
                width: '100%',
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                markers: {
                    radius: 12,
                    width: 12,
                    height: 12,
                    offsetX: -10
                },
                formatter: function(val, opts) {
                    return [val, "<span>"+opts.w.globals.series[opts.seriesIndex]+"%</span>"]
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#traffic_sources"), options7).render();
    }

    // Yearly Eearning Chart
    if($("#yearly_earning").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c", "#fb7636"],
            series: [44, 55, 41, 17],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 380,
                parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Search Engine', 'Social Media', 'Direct link', 'Bookmarks Click'],
            legend: {
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                position: 'bottom',
                width: '100%',
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                markers: {
                    radius: 12,
                    width: 12,
                    height: 12,
                    offsetX: -10
                },
                formatter: function(val, opts) {
                    return [val, "<span>"+opts.w.globals.series[opts.seriesIndex]+"%</span>"]
                }
            },
            title: {
                text: 'Yearly Earning',
                align: 'left',
                margin: 0,
                floating: false,
                offsetX: 0,
                offsetY: 15,     
                style: {
                    fontFamily:  'Roboto, sans-serif',
                    fontSize:  '1.8rem',
                    fontWeight: '500',
                    color:  '#3d4859',
                    lineHeight: '1.8rem'
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#yearly_earning"), options7).render();
    }

    if($("#yearly_earning_02").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c", "#fb7636"],
            series: [5415, 2355, 1241],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 450,
                // parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Deposit', 'Expese', 'Payable'],
            legend: {
                fontSize: '18px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                position: 'bottom',
                width: '100%',
                offsetY: 20,
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                labels: {
                    colors: "#7d7d7d",
                    useSeriesColors: false
                },
                markers: {
                    radius: 0,
                    width: 0,
                    height: 0,
                    offsetX: 0
                },
                formatter: function(val, opts) {
                    return [val+" :", "<span>$"+opts.w.globals.series[opts.seriesIndex]+"</span>"]
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#yearly_earning_02"), options7).render();
    }

    // Order Chart
    if($('#order_chart').length) {
        var options8 = {
            colors: ["#8452e7", "#f3466c"],
            series: [76],
            chart: {
                type: 'radialBar',
                offsetY: 0,
                sparkline: {
                    enabled: true
                }, 
                height: 350,
                parentHeightOffset: 0
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#fefefe",
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: '22px'
                        }
                    },
                    hollow: {
                        margin: 5,
                        size: '35%',
                        background: 'transparent',
                    },
                }                
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "",
                    type: "vertical",
                    gradientToColors: ["#f3466c"],
                    stops: [0, 100]
                }
            }
        };
  
        var chart = new ApexCharts(document.querySelector("#order_chart"), options8);
        chart.render();  
    }
    
    // Order Chart 02
    if($('#order_chart_02').length) {

        var options = {
            series: [44, 55, 67, 83],
            chart: {
                type: 'radialBar',
                height: 280,
                parentHeightOffset: 0,
            },
            plotOptions: {
                radialBar: {
                    // hollow: {
                    //     size: '40%'
                    // },
                    track: {
                        margin: 10, 
                        strokeWidth: '100%',
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            };
  
          var chart = new ApexCharts(document.querySelector("#order_chart_02"), options);
          chart.render();
    }

    // Order Chart 02
    if($('#device-chart').length) {

        var options = {
            series: [44, 55, 67],
            chart: {
                type: 'radialBar',
                height: 280,
                parentHeightOffset: 0,
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '40%'
                    },
                    track: {
                        margin: 10, 
                        strokeWidth: '100%',
                    }
                }
            },
            labels: ['Desktop', 'Mobile', 'Tablet'],
          };
  
          var chart = new ApexCharts(document.querySelector("#device-chart"), options);
          chart.render();
    }

    if($('#revenue_chart_02').length) {
        var options = {
            series: [
                {
                    data: [44, 140, 88, 185, 65, 159, 20, 109, 99, 160, 29, 100]
                }
            ],
            chart: {
            type: 'bar',
            height: 380,
            parentHeightOffset: 0
          },
          colors: ['#8452e7'],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '15%',
              endingShape: 'flat',
              colors: {
                    ranges: [{
                        from: 0,
                        to: 100,
                        color: "#f3466c"
                    }]
                },
            },
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false,
          },
          stroke: {
            show: false,
          },
          grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            }
          },
          yaxis: {
            labels: {
                show: true,
                align: 'center',
                style: {
                    colors: "#7e7e7e",
                    fontSize: '1.2rem',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
                offsetX: -10,
                offsetY: 0
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            enabled: false
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#revenue_chart_02"), options);
          chart.render();
    }

    if ($('#daily_transaction').length) {
        var options = {
        series: [
            {
                name: 'Deposite',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Send Money',
                data: [11, 32, 45, 32, 34, 52, 41]
            }
        ],
        chart: {
            height: 350,
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                tools: {
                    download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        };

        var chart = new ApexCharts(document.querySelector("#daily_transaction"), options);
        chart.render();
    }
    
    // Browsers chart

    // Line chart 1
    if($('#line_2').length) {
        var options3 = {
          chart: {
            type: "line",
            height: 40,
            sparkline: {
              enabled: !0
            }
          },
          series: [{
              data: [3844, 3855, 3841, 3867]
          }],
          stroke: {
            width: 2,
            curve: "smooth"
          },
          markers: {
            size: 0
          },
          colors: ["#ea4335"],
          xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
          }
        };
        new ApexCharts(document.querySelector("#line_2"),options3).render();
    }

    if($('#crypto_chart').length) {
        var options4 = {
            series: [
                {
                    name: "Buy",
                    data: [50, 20, 35, 20, 75, 30, 60]
                },
                {
                    name: "Sell",
                    data: [5, 60, 20, 45, 15, 55, 25]
                }
            ],                
            chart: {
                height: 450,
                type: 'area',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#000',
                    opacity: .05
                },
                toolbar: {
                    show: false,
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:['#23d1f1', '#8452e7'],
            xaxis: {
                categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            legend: {
                offsetX: 0,
                offsetY: 15,
                floating: false,
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

       new ApexCharts(document.querySelector("#crypto_chart"), options4).render();
    }

    // Gradient Box Line chart
    function barChart(sel, opts) {
        var options = {
            series: [
                {
                    data: opts.value
                }
            ],
            chart: {
                type: 'bar',
                height: 80,
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                }
            },
            colors: [opts.colors[0]],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    endingShape: 'flat',
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 50,
                            color: opts.colors[1]
                        }]
                    },
                },
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
          
            stroke: {
                show: false,
            },
            grid: {
                show: false,
                },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: false,
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            }            
        };
  
          var chart = new ApexCharts(document.querySelector(sel), options);
          chart.render();
    }

    // const bar1_colors = ['#8452e7', '#f3466c']

    const bar1_opts = {
        value: [44, 140, 88, 185, 65, 159, 20, 109, 99, 160, 29, 100],
        colors: ['#8452e7', '#f3466c']
    }
    const bar2_opts = {
        value: [100, 50, 88, 40, 30, 98, 24, 109, 39, 140, 29, 115],
        colors: ['#23d1f1', '#1197e6']
    }

    if($('.bar-chart').length) {
        barChart('#bar1', bar1_opts)
        barChart('#bar2', bar2_opts)
        barChart('#bar3', bar1_opts)
        barChart('#bar4', bar2_opts)
    }

    // Gradient Box Area chart

    function areaChart (sel, opts) {
        var options = {
            series: opts.series,
            chart: {
                height: 50,
                sparkline: {
                    enabled: !0
                },
                width: '100%',
                type: 'area',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: opts.colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 1,
            },
            grid: {
                show: false
            },
            legend: {
                show: false
            }, 
            xaxis: {
                labels : {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
            },
            yaxis: {
                labels : {
                    show: false
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };
    
        var chart = new ApexCharts(document.querySelector(sel), options);
        chart.render();
    }

    const area1 = {
        series: [
            {
                name: 'New',
                data: [0, 100, 30, 90, 10, 95, 20]
            }, 
            {
                name: 'Active',
                data: [50, 5, 70, 30, 110, 10, 50]
            }
        ],
        colors: ['#f3466c', '#fb7636']
    }
    const area2 = {
        series: [
            {
                name: 'New',
                data: [50, 5, 70, 30, 110, 10, 50]
            }, 
            {
                name: 'Active',
                data: [0, 200, 48, 70, 23, 140, 70]
            }
        ],
        colors: ['#1197e6', '#3358cb']
    }
    const area3 = {
        series: [
            {
                name: 'New',
                data: [150, 10, 200, 90, 100, 40, 70]
            }, 
            {
                name: 'Active',
                data: [10, 120, 50, 90, 40, 150, 50]
            }
        ],
        colors: ['#8452e7', '#4d5ed0']
    }
    const area4 = {
        series: [
            {
                name: 'New',
                data: [60, 160, 30, 190, 20, 95, 55]
            }, 
            {
                name: 'Active',
                data: [90, 5, 70, 30, 110, 10, 130]
            }
        ],
        colors: ['#027ad7', '#23d1f1']
    }

    if($('.area-chart').length) {
        areaChart('#trnx-chart1', area1)
        areaChart('#trnx-chart2', area2)
        areaChart('#trnx-chart3', area3)
        areaChart('#trnx-chart4', area4)
    }


    /**
     * Sample charts
     * 
     */
    
    // Line chart basic
    if($('#line-chart-basic').length) {
        var lcbOpts = {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
    //   title: {
    //     text: 'Product Trends by Month',
    //     align: 'left'
    //   },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
        }; 
        
        var chart = new ApexCharts(document.querySelector("#line-chart-basic"), lcbOpts);
        chart.render();
    }
    
    if($('#line-chart-gradient').length) {
        var lcgOpts = {
            series: [{
            name: 'Likes',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
          }],
            chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: 7,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
          },
        fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          markers: {
            size: 4,
            colors: ["#FFA41B"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
              size: 7,
            }
          },
          yaxis: {
            min: -10,
            max: 40,
            title: {
              text: 'Engagement',
            },
          }
        };

        var chart = new ApexCharts(document.querySelector("#line-chart-gradient"), lcgOpts);
        chart.render();
    }
    
    if($('#area-chart-basic').length) {
        var acbOpts = {
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }],
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            labels: ['Apples', 'Oranges', 'Berries', 'Grapes', 'Mango', 'Banana', 'Lychee'],
            xaxis: {
                type: 'category',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        };

        var chart = new ApexCharts(document.querySelector("#area-chart-basic"), acbOpts);
        chart.render();
    }
    
    // Area chart - spline
    if($('#area-chart-spline').length) {
        var options = {
            series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
            chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        };

        var chart = new ApexCharts(document.querySelector("#area-chart-spline"), options);
        chart.render();
    }

    if($('#bar-chart-basic').length) {
        var options = {
            series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }],
            chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        };

        var chart = new ApexCharts(document.querySelector("#bar-chart-basic"), options);
        chart.render();
    }

    if($('#bar-chart-grouped').length) {
        var options = {
            series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
          }, {
            data: [53, 32, 33, 52, 13, 44, 32]
          }],
            chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
          },
        };

        var chart = new ApexCharts(document.querySelector("#bar-chart-grouped"), options);
        chart.render();
    }
    
    if($('#pie-chart-basic').length) {
        var options = {
            series: [44, 55, 13, 43, 22],
            chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        };
    
        var chart = new ApexCharts(document.querySelector("#pie-chart-basic"), options);
        chart.render();
    }
    
    if($('#donut-chart-basic').length) {
        var options = {
            series: [44, 55, 41, 17, 15],
            chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        };

        var chart = new ApexCharts(document.querySelector("#donut-chart-basic"), options);
        chart.render();
    }

    if($('#radial-chart-basic').length) {
        var options = {
            series: [70],
            chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Cricket'],
        };

        var chart = new ApexCharts(document.querySelector("#radial-chart-basic"), options);
        chart.render();
    }

    if($('#radial-chart-multiple').length) {
        var options = {
            series: [44, 55, 67, 83],
            chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        };

        var chart = new ApexCharts(document.querySelector("#radial-chart-multiple"), options);
        chart.render();
    }

    if($('#radar-chart-basic').length) {
        var options = {
            series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          }],
            chart: {
            height: 350,
            type: 'radar',
          },
           xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
          }
        };

        var chart = new ApexCharts(document.querySelector("#radar-chart-basic"), options);
        chart.render();
    }

    if($('#radar-chart-polygon').length) {
        var options = {
            series: [{
            name: 'Series 1',
            data: [20, 100, 40, 30, 50, 80, 33],
          }],
            chart: {
            height: 350,
            type: 'radar',
          },
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                  colors: ['#f8f8f8', '#fff']
                }
              }
            }
          },
          colors: ['#FF4560'],
          markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return val
              }
            }
          },
          xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
          },
          yaxis: {
            tickAmount: 7,
            labels: {
              formatter: function(val, i) {
                if (i % 2 === 0) {
                  return val
                } else {
                  return ''
                }
              }
            }
          }
        };

        var chart = new ApexCharts(document.querySelector("#radar-chart-polygon"), options);
        chart.render();
    }

    /**
     * Chartjs - options
    */
    if($('#barChartjs-basic').length) {
        var ctx = document.getElementById('barChartjs-basic');
        var barChartBasic = new Chart(ctx, {
            type: 'bar',
            responsive: true,
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        });
    }

    if($('#chartjs-horizontalBar').length) {
        var ctx = document.getElementById('chartjs-horizontalBar').getContext('2d');
        window.chartjsHorizontalBar = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each horizontal bar to be 2px wide
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    }
                },
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: false,
                    text: 'Chart.js Horizontal Bar Chart'
                }
            }
        });
    }

    if($('#chartjs-lineBasic').length) {
        var ctx = document.getElementById('chartjs-lineBasic').getContext('2d');
        window.lineBasic = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Apple',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    data: [12, 30, 3,50, 2, 30, 18],
                    fill: false,
                }, {
                    label: 'Banana',
                    fill: false,
                    backgroundColor: [
                        'rgba(23, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(123, 233, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(23, 224, 255, 0.2)',
                        'rgba(253, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(55, 99, 132, 1)',
                        'rgba(54, 38, 235, 1)',
                        'rgba(255, 109, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 56, 255, 1)',
                        'rgba(155, 159, 64, 1)'
                    ],
                    data: [30, 15, 33, 16, 55, 21, 40],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        });
    }

    if($('#chartjs-pointChart').length) {
        var ctx = document.getElementById('chartjs-pointChart').getContext('2d');
        window.lineBasic = new Chart(ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Orange',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    fill: false,
                    borderDash: [5, 5],
                    pointRadius: 10,
                    pointHoverRadius: 10,
                    data: [12, 30, 3,50, 2, 30, 18],
                }, {
                    label: 'Lichee',
                    fill: false,
                    backgroundColor: [
                        'rgba(23, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(123, 233, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(23, 224, 255, 0.2)',
                        'rgba(253, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(55, 99, 132, 1)',
                        'rgba(54, 38, 235, 1)',
                        'rgba(255, 109, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 56, 255, 1)',
                        'rgba(155, 159, 64, 1)'
                    ],
                    fill: false,
                    borderDash: [5, 5],
                    pointRadius: 10,
                    pointHoverRadius: 10,
                    data: [30, 15, 33, 16, 55, 21, 40],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        });
    }

    if($('#chart-area-line-boundaries').length) {
        var ctx = document.getElementById('chart-area-line-boundaries').getContext('2d');
        window.lineBoundaries = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    data: [30, 15, 33, 16, 55, 21, 40],
                    pointRadius: 4,
                    label: 'Dataset',
                    fill: true
                }]
            },
            options: Chart.helpers.merge(options, {
                title: {
                    // text: 'fill: ' + boundary,   
                    display: false
                },
                maintainAspectRatio: true,
                spanGaps: false,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: false,
                            maxRotation: 0
                        }
                    }]
                }
            })
        });
    }

    if($('#radarChart').length) {
        var ctx = document.getElementById('radarChart').getContext('2d');
        window.radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    data: [30, 15, 33, 16, 55, 21, 40],
                    pointRadius: 4,
                    label: ['Apple, Banana, Orange'],
                    fill: true
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Radar Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
            }
        });
    }

    if($('#chart-doughnut').length) {
        var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

		var config = {
            type: 'doughnut',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			},
			options: {
                responsive: true,
                maintainAspectRatio: false,
				legend: {
                    display: false,
				},
				title: {
					display: false,
					text: 'Chart.js Doughnut Chart'
                },
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};

        var ctx = document.getElementById('chart-doughnut').getContext('2d');
        window.myDoughnut = new Chart(ctx, config);

    }

    if($('#chart-pie').length) {
		// var randomScalingFactor = function() {
		// 	return Math.round(Math.random() * 100);
		// };

		var pieconfig = {
			type: 'pie',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			},
			options: {
                responsive: true,
                legend: {
                    display: false,
				},
			}
		};

        var ctx = document.getElementById('chart-pie').getContext('2d');
        window.pieChart = new Chart(ctx, pieconfig);

    }

    if($('#chart-polar').length) {
        // var randomScalingFactor = function() {
		// 	return Math.round(Math.random() * 100);
		// };

		var chartColors = window.chartColors;
		var color = Chart.helpers.color;
		var config = {
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
					label: 'My dataset' // for legend
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			},
			options: {
				responsive: true,
				legend: {
                    display: false,
				},
				title: {
					display: false,
					text: 'Chart.js Polar Area Chart'
				},
				scale: {
					ticks: {
						beginAtZero: true
					},
					reverse: false
				},
				animation: {
					animateRotate: false,
					animateScale: true
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('chart-polar');
			window.myPolarArea = Chart.PolarArea(ctx, config);
		};
    }

})(jQuery);