let now = new Date();
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
  windInput.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} m/s`;

  let humidityInput = document.querySelector("#humidity-input");
  humidityInput.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let mainIcon = document.querySelector("#main-icon");
  mainIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;

  function farenheihtConversion() {
    let currentTemp = document.querySelector("#current-temperature");
    currentTemp.innerHTML = `${Math.round(
      (response.data.main.temp * 9) / 5 + 32
    )}˚F`;

    let minTemp = document.querySelector("#min-temp");
    minTemp.innerHTML = `Min: ${Math.round(
      (response.data.main.temp_min * 9) / 5 + 32
    )}˚F`;

    let maxTemp = document.querySelector("#max-temp");
    maxTemp.innerHTML = `Max: ${Math.round(
      (response.data.main.temp_max * 9) / 5 + 32
    )}˚F`;

    let windInput = document.querySelector("#wind-input");
    windInput.innerHTML = `Wind: ${Math.round(
      response.data.wind.speed / 2.237
    )} mph`;
  }
  let fButton = document.querySelector("#f-button");
  fButton.addEventListener("click", farenheihtConversion);

  function celciusConversion() {
    let currentTemp = document.querySelector("#current-temperature");
    currentTemp.innerHTML = `${Math.round(response.data.main.temp)}˚C`;

    let minTemp = document.querySelector("#min-temp");
    minTemp.innerHTML = `Min: ${Math.round(response.data.main.temp_min)}˚C`;

    let maxTemp = document.querySelector("#max-temp");
    maxTemp.innerHTML = `Max: ${Math.round(response.data.main.temp_max)}˚C`;

    let cityName = document.querySelector("#city");
    cityName.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

    let windInput = document.querySelector("#wind-input");
    windInput.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} m/s`;

    let humidityInput = document.querySelector("#humidity-input");
    humidityInput.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  }
  let cButton = document.querySelector("#c-button");
  cButton.addEventListener("click", celciusConversion);

  function displayForecast(response) {
    console.log(response);
    let day1Max = document.querySelector("#day-1-max");
    day1Max.innerHTML = `Max: ${Math.round(response.data.daily[1].temp.max)}˚C`;
    let day1Min = document.querySelector("#day-1-min");
    day1Min.innerHTML = `Min: ${Math.round(response.data.daily[1].temp.min)}˚C`;

    let icon1 = document.querySelector("#icon-one");
    icon1.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
    );

    let day2Max = document.querySelector("#day-2-max");
    day2Max.innerHTML = `Max: ${Math.round(response.data.daily[2].temp.max)}˚C`;
    let day2Min = document.querySelector("#day-2-min");
    day2Min.innerHTML = `Min: ${Math.round(response.data.daily[2].temp.min)}˚C`;

    let icon2 = document.querySelector("#icon-two");
    icon2.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
    );

    let day3Max = document.querySelector("#day-3-max");
    day3Max.innerHTML = `Max: ${Math.round(response.data.daily[3].temp.max)}˚C`;
    let day3Min = document.querySelector("#day-3-min");
    day3Min.innerHTML = `Min: ${Math.round(response.data.daily[3].temp.min)}˚C`;

    let icon3 = document.querySelector("#icon-three");
    icon3.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
    );

    let day4Max = document.querySelector("#day-4-max");
    day4Max.innerHTML = `Max: ${Math.round(response.data.daily[4].temp.max)}˚C`;
    let day4Min = document.querySelector("#day-4-min");
    day4Min.innerHTML = `Min: ${Math.round(response.data.daily[4].temp.min)}˚C`;

    let icon4 = document.querySelector("#icon-four");
    icon4.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
    );

    let day5Max = document.querySelector("#day-5-max");
    day5Max.innerHTML = `Max: ${Math.round(response.data.daily[5].temp.max)}˚C`;
    let day5Min = document.querySelector("#day-5-min");
    day5Min.innerHTML = `Min: ${Math.round(response.data.daily[5].temp.min)}˚C`;

    let icon5 = document.querySelector("#icon-five");
    icon5.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
    );

    let day6Max = document.querySelector("#day-6-max");
    day6Max.innerHTML = `Max: ${Math.round(response.data.daily[6].temp.max)}˚C`;
    let day6Min = document.querySelector("#day-6-min");
    day6Min.innerHTML = `Min: ${Math.round(response.data.daily[6].temp.min)}˚C`;

    let icon6 = document.querySelector("#icon-six");
    icon6.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`
    );

    let day7Max = document.querySelector("#day-7-max");
    day7Max.innerHTML = `Max: ${Math.round(response.data.daily[7].temp.max)}˚C`;
    let day7Min = document.querySelector("#day-7-min");
    day7Min.innerHTML = `Min: ${Math.round(response.data.daily[7].temp.min)}˚C`;

    let icon7 = document.querySelector("#icon-seven");
    icon7.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.daily[7].weather[0].icon}@2x.png`
    );

    function farenheihtConversionForecast() {
      let day1Max = document.querySelector("#day-1-max");
      day1Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[1].temp.max * 9) / 5 + 32
      )}˚F`;
      let day1Min = document.querySelector("#day-1-min");
      day1Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[1].temp.min * 9) / 5 + 32
      )}˚F`;

      let day2Max = document.querySelector("#day-2-max");
      day2Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[2].temp.max * 9) / 5 + 32
      )}˚F`;
      let day2Min = document.querySelector("#day-2-min");
      day2Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[2].temp.min * 9) / 5 + 32
      )}˚F`;

      let day3Max = document.querySelector("#day-3-max");
      day3Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[3].temp.max * 9) / 5 + 32
      )}˚F`;
      let day3Min = document.querySelector("#day-3-min");
      day3Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[3].temp.min * 9) / 5 + 32
      )}˚F`;

      let day4Max = document.querySelector("#day-4-max");
      day4Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[4].temp.max * 9) / 5 + 32
      )}˚F`;
      let day4Min = document.querySelector("#day-4-min");
      day4Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[4].temp.min * 9) / 5 + 32
      )}˚F`;

      let day5Max = document.querySelector("#day-5-max");
      day5Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[5].temp.max * 9) / 5 + 32
      )}˚F`;
      let day5Min = document.querySelector("#day-5-min");
      day5Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[5].temp.min * 9) / 5 + 32
      )}˚F`;

      let day6Max = document.querySelector("#day-6-max");
      day6Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[6].temp.max * 9) / 5 + 32
      )}˚F`;
      let day6Min = document.querySelector("#day-6-min");
      day6Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[6].temp.min * 9) / 5 + 32
      )}˚F`;

      let day7Max = document.querySelector("#day-7-max");
      day7Max.innerHTML = `Max: ${Math.round(
        (response.data.daily[7].temp.max * 9) / 5 + 32
      )}˚F`;
      let day7Min = document.querySelector("#day-7-min");
      day7Min.innerHTML = `Min: ${Math.round(
        (response.data.daily[7].temp.min * 9) / 5 + 32
      )}˚F`;
    }
    let fButton = document.querySelector("#f-button");
    fButton.addEventListener("click", farenheihtConversionForecast);

    function celciusConversionForecast() {
      let day1Max = document.querySelector("#day-1-max");
      day1Max.innerHTML = `Max: ${Math.round(
        response.data.daily[1].temp.max
      )}˚C`;
      let day1Min = document.querySelector("#day-1-min");
      day1Min.innerHTML = `Min: ${Math.round(
        response.data.daily[1].temp.min
      )}˚C`;

      let day2Max = document.querySelector("#day-2-max");
      day2Max.innerHTML = `Max: ${Math.round(
        response.data.daily[2].temp.max
      )}˚C`;
      let day2Min = document.querySelector("#day-2-min");
      day2Min.innerHTML = `Min: ${Math.round(
        response.data.daily[2].temp.min
      )}˚C`;

      let day3Max = document.querySelector("#day-3-max");
      day3Max.innerHTML = `Max: ${Math.round(
        response.data.daily[3].temp.max
      )}˚C`;
      let day3Min = document.querySelector("#day-3-min");
      day3Min.innerHTML = `Min: ${Math.round(
        response.data.daily[3].temp.min
      )}˚C`;

      let day4Max = document.querySelector("#day-4-max");
      day4Max.innerHTML = `Max: ${Math.round(
        response.data.daily[4].temp.max
      )}˚C`;
      let day4Min = document.querySelector("#day-4-min");
      day4Min.innerHTML = `Min: ${Math.round(
        response.data.daily[4].temp.min
      )}˚C`;

      let day5Max = document.querySelector("#day-5-max");
      day5Max.innerHTML = `Max: ${Math.round(
        response.data.daily[5].temp.max
      )}˚C`;
      let day5Min = document.querySelector("#day-5-min");
      day5Min.innerHTML = `Min: ${Math.round(
        response.data.daily[5].temp.min
      )}˚C`;

      let day6Max = document.querySelector("#day-6-max");
      day6Max.innerHTML = `Max: ${Math.round(
        response.data.daily[6].temp.max
      )}˚C`;
      let day6Min = document.querySelector("#day-6-min");
      day6Min.innerHTML = `Min: ${Math.round(
        response.data.daily[6].temp.min
      )}˚C`;

      let day7Max = document.querySelector("#day-7-max");
      day7Max.innerHTML = `Max: ${Math.round(
        response.data.daily[7].temp.max
      )}˚C`;
      let day7Min = document.querySelector("#day-7-min");
      day7Min.innerHTML = `Min: ${Math.round(
        response.data.daily[7].temp.min
      )}˚C`;
    }
    let cButton = document.querySelector("#c-button");
    cButton.addEventListener("click", celciusConversionForecast);

    let precipitationInput = document.querySelector("#precipitation-input");
    precipitationInput.innerHTML = `Precipitation: ${Math.round(
      response.data.minutely[now.getMinutes()].precipitation
    )} mm/hr`;
  }
  function forecastSearch() {
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
