async function fetchWeatherData() {
    try {
        const response = await fetch('/weather');
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    const weatherDetailsDiv = document.getElementById('weatherDetails');
    weatherDetailsDiv.innerHTML = '';

    const currentWeather = data.data.timelines[0].intervals[0].values;

    // Create and append temperature element
    const temperatureDiv = document.createElement('div');
    temperatureDiv.className = 'weather-item';
    temperatureDiv.textContent = `Temperature: ${currentWeather.temperature}°F`;
    weatherDetailsDiv.appendChild(temperatureDiv);

    // Create and append wind speed element
    const windSpeedDiv = document.createElement('div');
    windSpeedDiv.className = 'weather-item';
    windSpeedDiv.textContent = `Wind Speed: ${currentWeather.windSpeed} mph`;
    weatherDetailsDiv.appendChild(windSpeedDiv);

    // Create and append cloud cover element
    const cloudCoverDiv = document.createElement('div');
    cloudCoverDiv.className = 'weather-item';
    cloudCoverDiv.textContent = `Cloud Cover: ${currentWeather.cloudCover}%`;
    weatherDetailsDiv.appendChild(cloudCoverDiv);

    // ... Add more elements for other data points if needed
}

// Ensure fetchWeatherData is called when the window loads
window.onload = fetchWeatherData;

