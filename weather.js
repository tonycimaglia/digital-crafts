
// select button
const searchButton = document.querySelector('button');
// register click event
searchButton.addEventListener('click', function () {
  const cityName = getCityName();
  console.log(cityName);
  getWeatherData(cityName);
  // search api for city name
});

// take data from city input
function getCityName() {
  const cityInput = document.querySelector('input');
  return cityInput.value;
}


  // make api call to api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
function getWeatherData( cityName ) {
  // eventually, grab api key from env variable
  var key = 'fakekeyhere';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
    .then((response) => {
    return response.json();
  })
    .then((myJson) => {
    console.log(myJson);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// make second call for weather icon to: http://openweathermap.org/img/wn/10d@2x.png
