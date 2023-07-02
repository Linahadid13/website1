var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 400);

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2014", "2015", "2016", "2017", "2018", "2019", " 2020", "2021"],
    datasets: [
      {
        label: "عدد المتضررين",
        data: [8706, 6148, 0, 3887, 615, 6653, 4676, 3781],
        borderWidth: 1,
        // borderWidth: 1, // works
        borderColor: "#A0051B",
        Color: "#A0051B",
        fill: true,

        backgroundColor: gradient,
        pointBackgroundColor: "#A0051B",
      },
    ],
  },

  options: {
    scaleShowValues: true,
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: false,
          },
        },
      ],
    },
  },
});
