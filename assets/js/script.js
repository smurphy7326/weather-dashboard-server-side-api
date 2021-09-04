// Javascript Section

var apiKey = '&appid=0a5ea24ba2753ed94588e70528660e8a';

var inputEl = document.querySelector('#input');
var searchBtnEl = document.querySelector('#searchButton');
var citiesListel = document.querySelector('#citiesList');

// Shows the History for the city
var cityHistory = localStorage.getItem(cityStore)

var URLWeather = 'https://api.openweathermap.org/2.5/weather?q=' + cityName + 'units=imperial' + apiKey;

var URLForecast = 'https://api.openweathermap.org/2.5/forecast?q=' + cityName + 'units=imperial' + apiKey;

// puts the city in history

function citiesHistory () {
    localStorage.setItem('cityStore', inpoutEL.value);
}

