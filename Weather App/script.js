const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")

btn.addEventListener("click",()=>{
    let city = input.value; // for getting value of input text
    getWeather(city);
});

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c367b6e6e52ebad5aa1d9d21dfb79676'}`)

    .then(response => response.json()) // returns value in json formate
    .then(data => {
        console.log(data);
        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon" />`;

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

        let weatherTemp = data.main.temp; // converting kelivin into celsius
        weatherTemp=  weatherTemp - 273; // formula of conversion
        const temp = weatherTemp.toFixed(2) // for reducing its decimal upto 2 
        temperature.innerHTML= `${temp}°C`;

        const weatherDesc = data.weather[0].description; // weather[0] is the location where description is located
        description.innerHTML= weatherDesc;
        
    })

    .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please check the city name.");
    });
}
