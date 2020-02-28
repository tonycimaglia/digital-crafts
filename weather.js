
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', function () {
  const cityName = getCityName();
  getWeatherData(cityName);
});

const cityInput = document.querySelector('input');

cityInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
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

      if (dataIsValid) appendWeatherData(weatherData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

function validateData(weatherData) {
  if (weatherData.cod === 200) {
    return true
  }
  return false;
}

// add desired weather data to the dom
function appendWeatherData(weatherData) {
  const description = weatherData.weather[0].description;
  setDescription(description);

  const temp = weatherData.main.temp;
  setTemp(temp);

  const weatherIcon = weatherData.weather[0].icon;
  appendImage(weatherIcon);
}

function setTemp(temp) {
  const tempElement = document.querySelector('.temperature');
  tempElement.innerHTML = `${temp}&deg;`;
};

function setDescription(description) {
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
