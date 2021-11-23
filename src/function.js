function displayWeather(response) {
  console.log(response);
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}˚C`;

  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = `Min: ${Math.round(response.data.main.temp_min)}˚C`;
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = `Max: ${Math.round(response.data.main.temp_max)}˚C`;

  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${response.data.name},`;

  let windInput = document.querySelector("#wind-input");
  windInput.innerHTML = `Wind: ${response.data.wind.speed} m/s`;

  let humidityInput = document.querySelector("#humidity-input");
  humidityInput.innerHTML = `Humidity: ${response.data.main.humidity}%`;
}

function search(event) {
  event.preventDefault();
  let apiKey = "f40bd075138412008e91923e9e9f4ad7";
  let city = document.querySelector("#city-input").value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = document.querySelector("#day");
day.innerHTML = `${days[now.getDay()]}`;

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = document.querySelector("#month");
month.innerHTML = `${months[now.getMonth()]}`;

let date = document.querySelector("#date");
date.innerHTML = `${now.getDate()}`;
