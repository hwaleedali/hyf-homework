console.log('Giphy App')

const gameKey = "l0WR32JDLPFxrIz5aO1eNhzoB6vvt9gE";
const inputInformation = document.querySelector('#info')
const inputInformation2 = document.querySelector('#info2')
const findButton = document.querySelector('#search')
const formInfo = document.querySelector('#formCall')
const imageInformation = document.querySelector('#imageInfo')


formInfo.addEventListener('submit',imageInfo)
function imageInfo(e){
    e.preventDefault()
    let searchName = inputInformation.value
    let searchNumber = inputInformation2.value
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${gameKey}&q=${searchName}&limit=${searchNumber}`)
        .then(response => response.json())
        .then(weatherData => {
            console.log(weatherData);
        for (let i = 0; i < weatherData.data.length; i++) {
            const gifIMG = document.createElement("img");
            gifIMG.src = weatherData.data[i].images.downsized.url;
            console.log(gifIMG)
        // imageInformation.innerHTML = `<img src ='${weatherData.data[i].images.downsized.url}'/>`
         imageInformation.appendChild(gifIMG)
      }
    })
}