console.log('Js 2 homework week 3')
       
// step 1
setTimeout(() => {
    console.log("Called after 2.5 seconds")
}, 2500);

    // OR
// window.addEventListener('load',alreadyLoaded)
// function alreadyLoaded() {
//     setTimeout(() => {
//         console.log("Called after 2.5 seconds")
//     }, 2500);  
// }

//         // step 2

function loadString(delay,stringToLog) {
    setTimeout(() => {
        console.log(stringToLog)
    }, delay);
}
loadString(5000,"Called after 5 seconds");

//         // step 3

const firstButton = document.querySelector('#btn1')
firstButton.addEventListener('click',() =>{
    loadString(5000,"Button clicked after 5 seconds");
})

        // step 

const forEarth = (() => {
    console.log('Earth')
})
// forEarth()

const forSaturn= (() => {
    console.log('Saturn')
})
// forSaturn()

 function planetLogFunction(callBack){
    return callBack()
}
planetLogFunction(forEarth)
function planetLogFunction(callBack){
    return callBack()
}
planetLogFunction(forSaturn)

//                 // step 5

const logButton = document.querySelector('#btn2')
logButton.addEventListener('click',getLocation)
const buttonText = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        buttonText.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    buttonText.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
//                 // step 6 Optiional
let buttonMap = document.getElementById("get-location");
let locationlink = document.querySelector('#locationlink');
buttonMap.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    locationlink.href= `https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;output=embed`;
    locationlink.innerText= ` Your location is ${lat}° Lattitude by ${ long}° Longitude`
  });
});


//                 // step 7
function runAfterDelay(delay,callback){
    setTimeout(() => {
        return callback()
    }, delay);
}
runAfterDelay(3000,forEarth)

function runAfterDelay(delay,callback){
    setTimeout(() => {
        return callback()
    }, delay);
}
runAfterDelay(10000,forSaturn)

//                 // step 8

let count = 0;
const doubleClick = document.querySelector('#btn3')
doubleClick.addEventListener('click',clickme)
function clickme(){ 
    count++;

    if(count > 1){
     console.log('Double Clicked Now')  
    }else if (count = 1){
        console.log('Clicked Once')  
    }
    setTimeout(() => {
        doubleClick.removeEventListener('click',clickme)
        
    },5000);
}

//                 // step 9


function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
        if(shouldTellFunnyJoke){
            logFunnyJoke()
        }else {
            logBadJoke()
        }
}
const logFunnyJoke = (()=>{
    console.log('Chunemi have funny jokes')
})
const logBadJoke = (()=>{
    console.log('Hafiz have some bad jokes')
}) 

jokeCreator(true,logFunnyJoke,logBadJoke)

// Create an array with 3 items. All items should be functions. 
// Iterate through the array and call all the functions.

const myArr = [
    function(string){
        console.log('First Function of an Array')
},
function(){
    console.log('Second Function of an Array')
},
function (){
     console.log('Third Function of an Array') 
}]
myArr.forEach(function (func) {
    func(); 
  });

//   Create a function as a const and try creating 
//   a function normally. Call both functions. 

const callFunction = function callingFunction() {
    console.log('Function with const')
}
callFunction()

function normalFunction() {
    console.log('Normal Function')
}
normalFunction()

  const functionObj = {
    FuncOne: function(msg) {
    console.log(msg);
 },
  }
  
functionObj.FuncOne("First Property of Object");


