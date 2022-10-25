// statistic html script

// get all movie
let allMovie = [`inception`, `got`, `lotr`, `hotd`];

// loop through local storage to get all the values of the movie
let movieObj = {};
allMovie.map((element) => {
  let lengthMovie = JSON.parse(localStorage.getItem(element));
  if (lengthMovie == null) {
    lengthMovie = 0;
  } else {
    lengthMovie = lengthMovie.length;
  }
  movieObj[element] = lengthMovie;
});

let label = Object.keys(movieObj);
let values = Object.values(movieObj);

// creating the bar chart
const configBarChart = {
  type: "bar",
  data: {
    labels: label,
    datasets: [
      {
        data: values,
        label: `No of seats taken`,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
const barChart = new Chart(document.getElementById("barChart"), configBarChart);

// creating the pie chart
const data = {
  labels: label,
  datasets: [
    {
      label: "Movie dataset",
      data: values,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(25,25,112, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      hoverOffset: 4,
      hoverBorderColor: "rgba(210,105,30)",
      borderColor: "black",
    },
  ],
};
const configPieChart = {
  type: "pie",
  data: data,
};
const pieChart = new Chart(document.getElementById("pieChart"), configPieChart);
