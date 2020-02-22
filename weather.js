
// select button
const searchButton = document.querySelector('button');

// register click event
searchButton.addEventListener('click', function () {
  const cityName = getCityName();
  // search api for city name
  getWeatherData(cityName);
});

// take data from city input
function getCityName() {
  const cityInput = document.querySelector('input');
  return cityInput.value;
}

// make api call to openweather api
function getWeatherData(cityName) {
  // eventually, grab api key from env variable
  const key = 'your key here';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((weatherData) => {
      appendWeatherData(weatherData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// add desired weather data to the dom
function appendWeatherData(weatherData) {
  console.log(weatherData);
  // `http://openweathermap.org/img/wn/${iconValue}@2x.png`
  // append image of the weather
}

// convert temp
// add temp val

// add desc. val

// append image