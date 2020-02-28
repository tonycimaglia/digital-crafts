
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', function () {
  const cityName = getCityName();
  getWeatherData(cityName);
});

const cityInput = document.querySelector('input');

cityInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) { // checks if user hits enter on the city input
    const cityName = getCityName();
    getWeatherData(cityName);
  }
});

function getCityName() {
  return cityInput.value;
};

let dataIsValid = false;

function getWeatherData(cityName) {
  const key = 'your api key here';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((weatherData) => {
      dataIsValid = validateData(weatherData);
      dataIsValid ? appendWeatherData(weatherData) : appendErrorMessage();
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      clearSearchText();
    });;
};

function validateData(weatherData) {
  if (weatherData.cod === 200) {
    return true
  }
  return false;
};

// add desired weather data to the dom
function appendWeatherData(weatherData) {
  toggleWeatherDataVisibility('show');

  const location = weatherData.name
  setElementText(location, '.location');

  const description = weatherData.weather[0].description;
  setElementText(description, '.description');

  const temp = Math.round(weatherData.main.temp);
  setTemp(temp);

  const weatherIcon = weatherData.weather[0].icon;
  appendImage(weatherIcon);
};

function appendErrorMessage() {
  toggleWeatherDataVisibility('hide');
  const errorMessage = `Can't find data for ${cityInput.value}`;
  setElementText(errorMessage, '.description');
}

function setElementText(stringVal, className) {
  const node = document.querySelector(className);
  node.textContent = stringVal;
};

function setTemp(temp) {
  const tempElement = document.querySelector('.temperature');
  tempElement.innerHTML = `${temp}&deg;`;
};


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
};

function toggleWeatherDataVisibility(action) {
  const weatherElements = document.querySelectorAll('.weatherData');
  if (action === 'show') {
    weatherElements.forEach((element) => {
      element.style.display = 'block';
    });
  }
  if (action === 'hide') {
    weatherElements.forEach((element) => {
      element.style.display = 'none';
    });
  }
}

function clearSearchText() {
  cityInput.value = '';
};