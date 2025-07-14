
async function getWeather() {

  const city = document.getElementById("cityInput").value.trim();

  const weatherBox = document.getElementById("weatherBox");

  if (city === "") {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {

    let res = await fetch(`https://api.weatherap.com/v1/current.json?key=a997bd490f3f4451af474913251307&q=${city}&aqi=yes`);
    let data = await res.json();

    if (data.error) {
      weatherBox.innerHTML = `<p>${data.error.message}</p>`;
      return;
    }

    weatherBox.innerHTML = `

      <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
      <img src="https:${data.current.condition.icon}" alt="weather icon" />
      <p><strong>${data.current.temp_c}°C</strong></p>
      <p>${data.current.condition.text}</p>
      <p>Humidity: ${data.current.humidity}%</p>
      
    `;



  } catch (error) {
    weatherBox.innerHTML = "<p>Error loading weather data.</p>";
    console.error(error);
  }
}
