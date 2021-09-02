// javascript section

const apiKey = '93d8043af196220c5f35d380f7c697f4'; // Openweather API Key
const submitBtn = document.getElementById('submitBtn');
const historyList = document.getElementById('historyContainer');
const currentWeather = document.getElementById('currentWeather');
currentWeather.style.display = 'none';
const cityIconEl = document.getElementById('cityIcon');
const cityTemperature = document.getElementById('cityTemperature');
const cityWind = document.getElementById('cityWind');
const cityHumid = document.getElementById('cityHumid');
const cityUV = document.getElementById('cityUV');

var dayForecast = [
dayOneForecast = [document.getElementById('dayOne'), document.getElementById('dayOneIcon'), document.getElementById('dayOneTemperature'), document.getElementById('dayOneWind'), document.getElementById('dayOneHumidity')],

dayTwoForecast = [document.getElementById('dayTwo'), document.getElementById('dayTwoIcon'), document.getElementById('dayTwoTemperature'), document.getElementById('dayTwoWind'), document.getElementById('dayTwoHumidity')],

dayThreeForecast = [document.getElementById('dayThree'), document.getElementById('dayThreeIcon'), document.getElementById('dayThreeTemperature'), document.getElementById('dayThreeWind'), document.getElementById('dayThreeHumidity')],

dayOFourForecast = [document.getElementById('dayFour'), document.getElementById('dayFourIcon'), document.getElementById('dayFourTemperature'), document.getElementById('dayFourWind'), document.getElementById('dayFourHumidity')],

dayFiveForecast = [document.getElementById('dayFive'), document.getElementById('dayFiveIcon'), document.getElementById('dayFiveTemperature'), document.getElementById('dayFiveWind'), document.getElementById('dayFiveHumidity')]];

// Storage for search history
var cityNameStorageList = JSON.parse(localStorage.getItem('cityName')) || [];

