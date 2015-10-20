$(document).ready(function () {

  new Chartist.Pie('.ct-chart', {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 100,
    startAngle: 270,
    total: 200,
    showLabel: false
  });
});

