const apiKey = '1fa39e47cb93924d473a9f891ee77d78';
const url = `https://api.openweathermap.org/data/2.5/weather`;

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            displayWeatherData(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    locationElement.textContent = data.name;
    temperatureElement.textContent = `${data.main.temp}°C`;
    descriptionElement.textContent = data.weather[0].description;
}
const searchButton = document.getElementById('searchButton');
const locationInput = document.getElementById('locationInput');

document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('locationSelect');

    locationSelect.addEventListener('change', () => {
        const city = locationSelect.value;
        fetchWeatherData(city);
    });
});
const excelFile = 'OPTION.xlsx';
const xhr = new XMLHttpRequest();
xhr.open('GET', excelFile, true);
xhr.responseType = 'arraybuffer';