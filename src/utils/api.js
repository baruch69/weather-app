const apiKey = "a5a47c18197737e8eeca634cd6acb581"


export const fetchLocationId = async city => {
  const response = await fetch(`https://search.reservamos.mx/api/v2/places?q=${city}`);
  const locations = await response.json();
  return locations[0];
};

export const fetchWeather = async(lat, long) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
  );
  const result = await response.json()
  return result
};
