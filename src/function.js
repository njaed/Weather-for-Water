function displayWeather(response) {
  console.log(response);
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}˚C`;

  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = `Min: ${Math.round(response.data.main.temp_min)}˚C`;

  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = `Max: ${Math.round(response.data.main.temp_max)}˚C`;

  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  let windInput = document.querySelector("#wind-input");
  windInput.innerHTML = `Wind: ${response.data.wind.speed} m/s`;

  let humidityInput = document.querySelector("#humidity-input");
  humidityInput.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;

  function displayForecast(response) {
    console.log(response);
    let day1 = document.querySelector("#day-1");
    day1.innerHTML = `${Math.round(response.data.daily[1].temp.day)}˚C`;
    let day2 = document.querySelector("#day-2");
    day2.innerHTML = `${Math.round(response.data.daily[2].temp.day)}˚C`;
    let day3 = document.querySelector("#day-3");
    day3.innerHTML = `${Math.round(response.data.daily[3].temp.day)}˚C`;
    let day4 = document.querySelector("#day-4");
    day4.innerHTML = `${Math.round(response.data.daily[4].temp.day)}˚C`;
    let day5 = document.querySelector("#day-5");
    day5.innerHTML = `${Math.round(response.data.daily[5].temp.day)}˚C`;
    let day6 = document.querySelector("#day-6");
    day6.innerHTML = `${Math.round(response.data.daily[6].temp.day)}˚C`;
    let day7 = document.querySelector("#day-7");
    day7.innerHTML = `${Math.round(response.data.daily[7].temp.day)}˚C`;
  }
  function forecastSearch(event) {
    let apiKey = "f40bd075138412008e91923e9e9f4ad7";
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayForecast);
  }
  forecastSearch(response);
}
function weatherSearch(event) {
  event.preventDefault();
  let apiKey = "f40bd075138412008e91923e9e9f4ad7";
  let city = document.querySelector("#city-input").value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", weatherSearch);
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = document.querySelector("#day");
day.innerHTML = days[now.getDay()];
document.querySelector("#day-one").innerHTML = days[now.getDay() + 1];
document.querySelector("#day-two").innerHTML = days[now.getDay() + 2];
document.querySelector("#day-three").innerHTML = days[now.getDay() + 3];
document.querySelector("#day-four").innerHTML = days[now.getDay() + 4];
document.querySelector("#day-five").innerHTML = days[now.getDay() + 5];
document.querySelector("#day-six").innerHTML = days[now.getDay() + 6];
document.querySelector("#day-seven").innerHTML = days[now.getDay() + 7];

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
