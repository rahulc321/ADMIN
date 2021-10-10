//[Dashboard Javascript]

//Project:	CRMi - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	  var options = {
          series: [{
          name: 'Total Income',
          data: [44, 85, 60, 21, 71, 58, 45, 60, 38, 65, 40, 75 ]
        }],
          chart: {
          type: 'bar',
          height: 300,
		  toolbar: {
        	show: false,
		  }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            borderRadius: 3,
          },
        },
		colors:['#3596f7'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#income"), options);
        chart.render();
	
	
		
	
	  var options = {
          series: [{
          name: 'Total Income',
          data: [14, 45, 30, 1, 31, 28, 15, 30, 18, 25, 10, 25 ]
        }],
          chart: {
          type: 'bar',
          height: 300,
		  toolbar: {
        	show: false,
		  }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            borderRadius: 3,
          },
        },
		colors:['#ee3158'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#expense"), options);
        chart.render();
	
		
		var options = {
          series: [
          {
            name: "This Week",
            data: [435, 299, 339, 469, 392, 529, 339]
          },
          {
            name: "Last - Week",
            data: [312, 461, 314, 418, 317, 413, 513]
          }
        ],
          chart: {
          height: 300,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#3596f7', '#ee3158'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set', 'Sun'],
        },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " thousands"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#visitors"), options);
        chart.render();
	
		$('.product-div').slimScroll({
			height: '313px'
		  });
	
	
		Morris.Donut({
        element: 'donut-chart',
			data: [{
				label: "Close",
				value: 825,

			}, {
				label: "Pending",
				value: 345,
			}, {
				label: "Order",
				value: 905,
			}],
			resize: true,
			colors:['#05825f', '#ee3158', '#7047ee']
		});
	
	
		 
		var optionDonut = {
		  chart: {
			  type: 'donut',
			  width: '100%',
			  height: 390
		  },
		  dataLabels: {
			enabled: false,
		  },
		  plotOptions: {
			pie: {
			  customScale: 0.8,
			  donut: {
				size: '85%',
			  },
			},
			stroke: {
			  colors: undefined
			}
		  },
		  colors:['#7047ee', '#05825f', '#ffa800', '#3596f7', '#ee3158' ],
			
		  series: [21, 23, 19, 14, 6],
		  labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
		  			
			legend: {
			  position: 'bottom',
			  horizontalAlign: 'center',
			},
		}

		var donut = new ApexCharts(
		  document.querySelector("#sales-chart"),
		  optionDonut
		)
		donut.render();
	
		
	
	
		var options = {
          series: [{
            name: "Profit",
            data: [35, 41, 62, 42, 13, 18, 29]
          },
          {
            name: 'Sales',
            data: [87, 57, 74, 99, 75, 38, 62]
          }
        ],
          chart: {
          height: 240,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
		colors:['#7047ee', '#ee3158' ],
        stroke: {
          width: [5, 2],
          curve: 'smooth',
          dashArray: [0, 5]
        },
        legend: {
		  position: 'top',
		  horizontalAlign: 'center',
		},
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + "%"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + "%"
                }
              }
            }
          ]
        },
        };

        var chart = new ApexCharts(document.querySelector("#monthly-sales"), options);
        chart.render();
	
	
	
	
		 
		var optionDonut = {
		  chart: {
			  type: 'donut',
			  width: '100%',
			  height: 300
		  },
		  dataLabels: {
			enabled: false,
		  },
		  plotOptions: {
			pie: {
			  customScale: 0.8,
			  donut: {
				size: '65%',
			  },
			},
		  },
		  colors:['#6f57ea', '#ff7e6d', '#2ed4c7' ],
			
		  series: [40, 24, 36],
		  labels: ['Direct', 'Sponsored', 'Affiliate'],
		  			
			legend: {
			  show: false
			},
		}

		var donut = new ApexCharts(
		  document.querySelector("#profit-value"),
		  optionDonut
		)
		donut.render();
		
	
}); // End of use strict
