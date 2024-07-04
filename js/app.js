const key = "cebcd482eda57fa9a6714c1c2ba91885";

function addToScreen(dados) {
  document.querySelector(".city_name").innerHTML = `Tempo em ${dados.name}`;
  document.querySelector(".temperature").innerHTML = `${Math.floor(
    dados.main.temp
  )}°C`;
  document.querySelector(
    ".forecast"
  ).innerHTML = `${dados.weather[0].description}`;
  document.querySelector(".moisture").innerHTML = `Umidade: ${dados.main.humidity}%`
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCityApi(city) {
  const api = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  );
  const response = await api.json();

  console.log(response);

  addToScreen(response);
}

function searchCity() {
  const city = document.querySelector(".input_city").value;

  searchCityApi(city);
}
