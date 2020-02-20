
// select button
const searchButton = document.querySelector('button');
// register click event
searchButton.addEventListener('click', function () {
  const cityName = getCityName();
  // search api for city name
});

// take data from city input
function getCityName() {
  const cityInput = document.querySelector('input');
  return cityInput.value;
}
// make api call to api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// grab api key from env variable
const apiKey = 'fakeKeyHere';
// make second call for weather icon to: http://openweathermap.org/img/wn/10d@2x.png