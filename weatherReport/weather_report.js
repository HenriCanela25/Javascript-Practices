function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const city = document.getElementById('city').value;
    const apiKey = '';
    
    if (city) {
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp}</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

const weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', showweatherDetails);