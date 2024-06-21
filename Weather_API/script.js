const apiKey = "c0571bc1b4c666e014daf43ed2a3da56";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "clear.png";
      break;
    case "Rain":
      weatherIcon.src = "rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "mist.png";
      break;
    case "Snow":
      weatherIcon.src = "snow.png";
      break;
    case "Thunderstorm":
      weatherIcon.src = "thunderstorm.png";
      break;
    default:
      weatherIcon.src = "default.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
