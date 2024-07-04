const key = "cebcd482eda57fa9a6714c1c2ba91885";

function updateWeatherDisplay(data) {
  document.querySelector(".city_name").innerHTML = `Tempo em ${data.name}`;
  document.querySelector(".temperature").innerHTML = `${Math.floor(
    data.main.temp
  )}°C`;
  document.querySelector(
    ".forecast"
  ).innerHTML = `${data.weather[0].description}`;
  document.querySelector(
    ".moisture"
  ).innerHTML = `Umidade: ${data.main.humidity}%`;
  document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    );
    const data = await response.json();
    updateWeatherDisplay(data);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
  }
}

function searchCity() {
  const city = document.querySelector(".input_city").value;
  fetchWeatherData(city);
}
