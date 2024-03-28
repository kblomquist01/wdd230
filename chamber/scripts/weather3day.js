
// select HTML elements in the document
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const tomorrowCaptionDesc = document.querySelector('#tomorrow-fig');
const tomorrowHumidity = document.querySelector('#tomorrowHumidity');
const day2Temp = document.querySelector('#day2-temp');
const day2CaptionDesc = document.querySelector('#day2-fig');
const day2Humidity = document.querySelector('#day2Humidity');


const url3day = 'https://api.openweathermap.org/data/2.5/forecast?lat=29.76&lon=-95.36&units=imperial&appid=4439142fa247e17f2fe26d2c4aea3366';


async function apiFetch() {
    try {
      const response = await fetch(url3day);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults3Day(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  
function displayResults3Day(data) {
    //console.log(data.list[3].main.temp); // testing only
    let day = data.list[3];
    tomorrowTemp.innerHTML = `${day.main.temp}&deg;F`;
    const iconsrctomorrow = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    let desc = day.weather[0].description;
    tomorrowCaptionDesc.innerHTML = desc + `<img id="tomorrow-weather-icon" src="" alt="">`;
    const tomorrowWeatherIcon = document.querySelector('#tomorrow-weather-icon');
    tomorrowWeatherIcon.setAttribute('src', iconsrctomorrow);
    tomorrowWeatherIcon.setAttribute('alt', desc);
    tomorrowHumidity.innerHTML = `${day.main.humidity}%`
    calcWindChill(day.main.temp, day.wind.speed, "tommorow-WC")

    day = data.list[11];
    day2Temp.innerHTML = `${day.main.temp}&deg;F`;
    const iconsrc3Day = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    desc = day.weather[0].description;
    day2CaptionDesc.innerHTML = desc + `<img id="day2-weather-icon" src="" alt="">`;
    const day2WeatherIcon = document.querySelector('#day2-weather-icon');
    day2WeatherIcon.setAttribute('src', iconsrc3Day);
    day2WeatherIcon.setAttribute('alt', desc);
    day2Humidity.innerHTML = `${day.main.humidity}%`
    calcWindChill(day.main.temp, day.wind.speed, "day2-WC")
  }
  
  apiFetch();
  