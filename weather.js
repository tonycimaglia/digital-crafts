
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
  // if we want to, grab api key from env variable
  const key = 'your key here';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${key}`)
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
  const description = weatherData.weather[0].description;
  appendDescription(description);

  const temp = weatherData.main.temp;
  appendTemp(temp);

  const weatherIcon = weatherData.weather[0].icon;
  appendImage(weatherIcon);
}

function appendTemp(temp) {

}

function appendDescription(description) {

}

// append image to dom
function appendImage(description) {
  // we will reuse the link from the old fetch call for the image
  // `http://openweathermap.org/img/wn/${iconValue}@2x.png`
}
