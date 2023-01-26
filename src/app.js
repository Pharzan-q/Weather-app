var xValues = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var yValues = [10, 8, 5, 4, 4, 4, 5, 5, 3, 3, 3, 3];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 20 } }],
    },
  },
});

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a City");
city = city.toLowerCase().trim();

let cities = Object.keys(weather);
let citySearch = cities.includes(city);

if (citySearch === true) {
  let tempC = Math.round(weather[city].temp);
  let tempF = Math.round(weather[city].temp * (9 / 5) + 32);
  alert(
    `It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${weather[city].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
