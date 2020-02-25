
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
};

let dataIsValid = false;
// make api call to openweather api
function getWeatherData(cityName) {
  // in a later lesson, we can get the api key from an env variable using node / .env
  const key = 'your api key here';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((weatherData) => {
      dataIsValid = validateData(weatherData);
      if (dataIsValid) appendWeatherData(weatherData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

function validateData(weatherData) {
  if (weatherData.code === '404' || '401') {
    return false
  }
  return true;
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
  const tempElement = document.querySelector('.temperature');
  tempElement.innerHTML = `${temp}&deg;`;
};

function appendDescription(description) {
  const descriptionElement = document.querySelector('.description');
  descriptionElement.textContent = description;
};

// append image to dom
function appendImage(iconName) {
  const weatherImage = document.querySelector('img');
  if (weatherImage === null) {
    createImageElement(iconName)
  } else {
    setImage(iconName, weatherImage)
  }
};

function createImageElement(iconName) {
  const weatherImage = document.createElement('img');
  setImage(iconName, weatherImage)
  const imageContainer = document.querySelector('.icon');
  imageContainer.appendChild(weatherImage);
};

function setImage(iconName, weatherImage) {
  weatherImage.src = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
  weatherImage.alt = 'A picture of the current weather';
}
