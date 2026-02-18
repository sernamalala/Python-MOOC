const APIKEY = "74e717413728982751d9a8ba43685298";

// Example of API call:
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=74e717413728982751d9a8ba43685298

const APIURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=London,uk&APPID=${APIKEY}`;

async function checkWeather() {
  const response = await fetch(APIURL);
  var data = await response.json();

  console.log(data);
}

checkWeather();
