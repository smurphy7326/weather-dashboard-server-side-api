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

// Search History
function getHistoryList() {
    historyList.innerHTML = "";
    JSON.stringify(localStorage.getItem('cityName'));
    let i = 0;
    this.getHistoryList.forEach(function(i) {
        historyList.innerHTML += '<button class="list-item btn" type="submit" value="' + i + '">' + i + '</button>'
        });
    const btnListing = document.querySelectorAll('.list-item');
    btnListing.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            var cityInput = document.getElementById(cityName);
            cityInput.value = this.value;       // Ask BCS Helped with this part
            currentWeather.style.display = "";
            fetchRequest(); // fetch request was learned aboput in lesson 6
        })
    });
};

getHistoryList();

// function to clear the history in the browser
// Clear button not required but useful

function clearHistory() {
    localStorage.clear();
    location.reload();
};

