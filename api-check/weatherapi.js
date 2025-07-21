// let city = "karachi";  

// fetch(`https://api.weatherapi.com/v1/current.json?key=a997bd490f3f4451af474913251307&q=${city}&aqi=yes`)
//   .then(response => response.json())
//   .then(data => {
//     console.log("🌤️ Weather in:", data.location.name);
//     console.log("📍 Country:", data.location.country);
//     console.log("🌡️ Temperature (C):", data.current.temp_c);
//     console.log("🌥️ Condition:", data.current.condition.text);
//   })
//   .catch(error => {
//     console.log("❌ Error:", error);
//   });








let city = "karachi"; 

fetch(`https://api.weatherapi.com/v1/current.json?key=a997bd490f3f4451af474913251307&q=${city}&aqi=yes`)
  .then(res => res.json())
  .then(data => {
    console.log(data); 
  })

  