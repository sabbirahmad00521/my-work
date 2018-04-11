

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["BTC to Alt", "Alt to Alt", "Alt to BTC"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#95a5a6",
        "#34495e"
      ],
      data: [21, 37, 43]
    }]
  }
});

