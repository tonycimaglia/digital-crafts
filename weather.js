
// select button
const searchButton = document.querySelector('button');

// register click event
searchButton.addEventListener('click', function () {
  const cityName = getCityName();
  // search api for city name
  getWeatherData(cityName);
  // apend weather data
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
      //make 2nd api call
      getWeatherImage(weatherData.weather[0].icon)
      return weatherData;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// make second call for weather icon to api
function getWeatherImage(iconValue) {
  fetch(`http://openweathermap.org/img/wn/${iconValue}@2x.png`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
