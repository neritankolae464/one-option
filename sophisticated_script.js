/**
 * Filename: sophisticated_script.js
 * Content: A sophisticated JavaScript code demonstrating a weather forecasting system.
 * 
 * Description:
 * This script fetches weather data from an API, processes the data, and provides weather forecasts
 * for the next 5 days, including temperature, humidity, wind speed, and weather conditions.
 * The code is modular and follows best practices like separation of concerns and error handling.
 * 
 * To execute the code, simply run this JavaScript file in a Node.js environment.
 */

// Importing required modules
const axios = require('axios');
const moment = require('moment');

// Constants
const API_KEY = 'your_api_key_here';
const CITY = 'New York';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`;

// Function to fetch weather data from API
async function fetchWeatherData() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

// Function to process weather data and generate forecasts
function generateForecasts(weatherData) {
  const forecasts = [];
  
  // Group weather data by date
  const groupedData = weatherData.list.reduce((acc, data) => {
    const date = moment(data.dt_txt).format('YYYY-MM-DD');
    if (!acc[date]) acc[date] = [];
    acc[date].push(data);
    return acc;
  }, {});
  
  // Calculate forecasts for each date
  for (const date in groupedData) {
    const weatherList = groupedData[date];
    const temperatures = weatherList.map(data => data.main.temp);
    const humidity = weatherList.reduce((sum, data) => sum + data.main.humidity, 0) / weatherList.length;
    const maxTemperature = Math.max(...temperatures);
    const minTemperature = Math.min(...temperatures);
    const averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
    const windSpeed = weatherList[0].wind.speed;
    const weatherConditions = weatherList[0].weather[0].description;
    
    forecasts.push({
      date: moment(date).format('MMMM Do YYYY'),
      maxTemperature: Math.round(maxTemperature),
      minTemperature: Math.round(minTemperature),
      averageTemperature: Math.round(averageTemperature),
      humidity: Math.round(humidity),
      windSpeed: Math.round(windSpeed),
      weatherConditions: weatherConditions,
    });
  }
  
  return forecasts;
}

// Function to display weather forecasts
function displayForecasts(forecasts) {
  console.log(`Weather forecasts for ${CITY}:`);
  for (const forecast of forecasts) {
    console.log('---------------------------');
    console.log('Date:', forecast.date);
    console.log('Max Temperature:', forecast.maxTemperature);
    console.log('Min Temperature:', forecast.minTemperature);
    console.log('Average Temperature:', forecast.averageTemperature);
    console.log('Humidity:', forecast.humidity);
    console.log('Wind Speed:', forecast.windSpeed);
    console.log('Weather Conditions:', forecast.weatherConditions);
  }
  console.log('---------------------------');
}

// Start the weather forecasting process
(async () => {
  const weatherData = await fetchWeatherData();
  if (weatherData) {
    const forecasts = generateForecasts(weatherData);
    displayForecasts(forecasts);
  }
})();