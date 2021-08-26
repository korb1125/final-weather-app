function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#speed");
    descriptionElement.innerHTML = response.data.weather[0].main;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "41824c8a74846b3921b2180280f99e63";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);