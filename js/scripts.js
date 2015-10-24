$(document).ready(function () {

  var ctx = $("#myChart").get(0).getContext("2d");
  var options = {
    pointLabelFontFamily : "'Raleway', sans-serif",
    pointLabelFontSize: 16,
    pointLabelFontStyle: 100,
    pointLabelFontColor : "#8C4646",
    showTooltips: false,
    angleLineColor : "rgba(88,140,126,0.1)",
    scaleLineColor: "rgba(88,140,126,0.2)"
  }
  var data = {
    labels: [
      "PHP",
      "Wordpress",
      "Javascript",
      "Client consultation",
      "Designer consultation",
      "Agile",
      "Drupal",
      "Unit testing",
      "Git",
      "RESTful API development"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(242,174,114,0.1)",
            strokeColor: "#F2E394",
            pointColor: "#8C4646",
            pointStrokeColor: "#F2E394",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#F2E394",
            data: [90, 40, 90, 70, 80, 85, 100, 60, 95, 65]
        }
    ]
};


  var myNewChart = new Chart(ctx).Radar(data, options);
});

