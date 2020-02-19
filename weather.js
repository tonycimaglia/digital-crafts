
// select button
const searchButton = document.querySelector('button');
// register click event
searchButton.addEventListener('click', function() {
  console.log('click event registered');
});

// take data from city input
// make api call to api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// make second call for weather icon to: http://openweathermap.org/img/wn/10d@2x.png