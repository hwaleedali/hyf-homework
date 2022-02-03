console.log('JSON File')

const jsonObj = '{ "name":"Frank", "age":34}'
const jsObj = JSON.parse(jsonObj)
console.log(jsObj.name)

            // Weather App Code

const ApiKey = "a58ab0289af4a0da1d27a14550693de7";
let cityName;

// // api.openweathermap.org/data/2.5/weather?q={city name} & appid = {ApiKey}
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`)
//     .then(response => response.json())
//     .then(weatherData => {
//         console.log(weatherData);
//         // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
//     });
    const button = document.querySelector('#btnweather')
    const weatherInfo = document.querySelector('#info')
    const InputInfo = document.querySelector('#cityName')
    const header = document.querySelector('#heading')
    const paraGraph = document.querySelector('#info1')
    const windInfo = document.querySelector('#windInfo')
    const cityInfo = document.querySelector('#cityNameInfo')
    const formCall = document.querySelector('#formDesign')
    formCall.addEventListener('submit',weatherReport)
    function weatherReport(e){
        e.preventDefault()
        cityName = formCall.elements.query.value
        console.log(formCall)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`)
        .then(response => response.json())
        .then(weatherData => {
            console.log(weatherData);
            cityInfo.innerHTML = 'City:'+weatherData.name
            windInfo.innerHTML = 'Wind Speed:'+weatherData.wind.speed
            header.innerHTML = 'Temprature:'+weatherData.main.temp
            const sunset = weatherData.sys.sunset
            date = new Date(sunset * 1000);
            timestr = date.toLocaleTimeString();
            paraGraph.innerHTML = "Sunset : " + timestr + " .";
            const sunrise = weatherData.sys.sunrise
            date = new Date(sunrise * 1000);
            timestring = date.toLocaleTimeString();
            weatherInfo.innerHTML = "Sunrise : " + timestring + " .";
        });
    }


