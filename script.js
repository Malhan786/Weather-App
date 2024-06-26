const inputbox = document.getElementById("input_box");
const search_btn = document.getElementById("btn");
const weather_img = document.getElementById("weather_img");
const temprature = document.getElementById("temprature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind_speed");
const weather_body = document.getElementById("weather-body");

async function checkWeather(city) {
    const api_key = "ef8527815956253f03637069f36bf75f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City not found: ${city}`);
        }
        const weather_data = await response.json();
        weather_body.style.display = "flex";
        temprature.innerHTML = `${weather_data.main.temp} <sup>°C</sup>`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

        // Optionally update weather image if needed
        // weather_img.src = `http://openweathermap.org/img/wn/${weather_data.weather[0].icon}.png`;

        switch (weather_data.weather[0].main){
           case 'Clouds':
               weather_img.src = "cloud.png";
               break;
           case 'Clear':
               weather_img.src = "clear.png";
               break;
           case 'Snow':
               weather_img.src = "snow.png";
               break;
           case 'Mist':
               weather_img.src = "mist.png";
               break;
           case 'Rain':
               weather_img.src = "rain.png";
               break;
    }
    console.log(weather_data);

} catch (error) {
        console.error(error);
        weather_img.src=`404.png`;
        weather_body.style.display = "none";
        temprature.innerHTML = `Sorry City Not FOUND`;
        description.innerHTML = '';
        humidity.innerHTML = '';
        wind_speed.innerHTML = '';
    }


}
search_btn.addEventListener('click', () => {
    checkWeather(inputbox.value);
});
