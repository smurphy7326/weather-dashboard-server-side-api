// javascript section

const apiKey = '0a5ea24ba2753ed94588e70528660e8a'; // Openweather API Key Default Key made when signed up for an account
const submitBtn = document.getElementById('submitBtn');
const historyList = document.getElementById('historyContainer');
const weatherCol = document.getElementById('weatherCol');
currentWeather.style.display = 'none';
const cityNameDateEl = document.getElementById('cityNameDate');
const cityIconEl = document.getElementById('cityIcon');
const cityTemperature = document.getElementById('cityTemperature');
const cityWind = document.getElementById('cityWind');
const cityHumidity = document.getElementById('cityHumidity');
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

// submit button event 

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var cityInput = document.getElementById('cityName').value;
    if(cityInput === '') {
        alert("Please Enter City Name")
    } else {
        weatherCol.style.display = '';
        fetchRequest();
    }
});


// List Button
const listBtn = document.querySelectorAll('.list-item');
    listBtn.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            var cityInput = document.getElementById('cityName').value;
            cityInput.value = this.value;
            weatherCol.style.display = '';
            fetchRequest();
        })
    });

// Fetch request to openweather for the cards

function fetchRequest() {
    var cityInput = document.getElementById(cityName).value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=' + apiKey)
    .then(function(lonlatresponse){
        if(lonlatresponse.ok) {
        cityNameStorageList();
        return lonlatresponse.json()
        } else {
            alert('Error:' + lonlatresponse.statusText);
        }
    }
    )
    .then(function(lonlatresponse) {
        var currentLon = lonlatresponse.coord.lon;
        var currentLat = lonlatresponse.coord.lat;
        return fetch('https://api.openweathermap.org.data/2.5/onecall?lat=' + currentLat + '&lon' + currentLon + '&units=imperial' + '&appid=' + apiKey)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        // calling on the information to allow it to be displayed 
        var currentDate = parseInt(response.current.dt);
        var currentIcon = response.current.weahter[0].icon;
        var currentTemp = response.current.temp;
        var currentWind = response.current.wind_speed;
        var currentHumid = response.current.humidity;
        var currentUV = response.current.uvi;

        var forcastingData = [
            dayOneForecastingData = [reponse.daily[0].dt, response.daily[0].weather[0].icon, response.daily[0].temp.day, response.daily[0].windSpeed, response.daily[0].humidity],

            dayTwoForecastingData = [reponse.daily[1].dt, response.daily[1].weather[0].icon, response.daily[1].temp.day, response.daily[1].windSpeed, response.daily[1].humidity],

            dayThreeForecastingData = [reponse.daily[2].dt, response.daily[2].weather[0].icon, response.daily[2].temp.day, response.daily[2].windSpeed, response.daily[2].humidity],

            dayFourForecastingData = [reponse.daily[3].dt, response.daily[3].weather[0].icon, response.daily[3].temp.day, response.daily[3].windSpeed, response.daily[3].humidity],

            dayFiveForecastingData = [reponse.daily[4].dt, response.daily[4].weather[0].icon, response.daily[4].temp.day, response.daily[4].windSpeed, response.daily[4].humidity]];
        
//Current Day

// Ask BCS helped with this part
    
    cityNameDateEl.innerHTML = cityInput + ' ' + moment.unix(currentDate).format('M/D/YYYY') + '<img id="cityIcon" src="https://openweathermap.org/img/wn/' + currentIcon + '@2x.png"></img>';
    cityTemperature.innnerHTML = "Temp: " + currentTemp + "˚F";
    cityWind.innerHTML = 'Wind: ' + currentWind + 'MPH';
    cityHumid.innerHTML = 'Humidity: ' + currentHumid + '%';
    cityUV.innerHTML = 'UV Index: ' + currentUV;
            if (currentUV <= 2) {
                cityUV.className = 'UVGreen';
            }
            if (currentUV > 2 && currentUV <= 5) {
                cityUV.className = 'UVYellow';
            }
            if (currentUV > 5 && currentUV <= 7) {
                cityUV.className = 'UVRed';
            }
            if (currentUV > 10) {
                cityUV.className = 'UVPurple';
            }

// Five Day Forecast 
            dayForecast.forEach((element, i) => {
                const day = forecastData[i];
                dayForecast[i][0].innerHTML = moment.unix(day[0]).format('M/D/YYYY');
                dayForecast[i][1].setAttribute('src', 'https://openweathermap.org/img/wn/' + day[1] + '@2x.png')
                dayForecast[i][2].innerHTML = 'Temp: ' + day[2] + '˚F';
                dayForecast[i][3].innerHTML = 'Wind: ' + day[3] + 'MPH';
                dayForecast[i][4].innerHTML - 'Humidity: ' + day[4] + '%';
            })
    })
};

function cityNameStorageList() {
    var cityInput = document.getElementById('cityname').value;
    cityNameStorageArr.push(cityInput);
    localStorage.setItem('citynames', JSON.stringify(cityNameStorageArr));
    renderHistoryList();
};