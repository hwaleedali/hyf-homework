console.log('Spirit Animal Name and Generator')

const spiritAnimalName = ["The fullmoon wolf",
"The crying butterfly",
"The clever lion ",
"the brave eagle ",
"The mighty gorilla ",
"The bewitching raven ",
"The stock trading bull",
"The democratic donkey",
"The social media influencer flamingo",
"The kung fu panda"]


// buttonQurey.addEventListener('click', clickButton())
function clickButton(){
     const output = document.querySelector('#demo');
    const input = document.querySelector('#myText')
    
    // using trim to avoid space as an input

    const inputValue = input.value.trim()
    const randomValue = Math.floor(Math.random() * spiritAnimalName.length)
    output.innerHTML = `${inputValue} + ${spiritAnimalName[randomValue]}`
    if(inputValue.length === 0){
        output.innerHTML = 'Type Something First Please!!!'
    }else{
        output.innerHTML = `${inputValue} + ${spiritAnimalName[randomValue]}`

    }
}
   function generateSpirit(){
    const output = document.querySelector('#demo');
    const input = document.querySelector('#myText')
    const randomValue = Math.floor(Math.random() * spiritAnimalName.length)   
    output.innerHTML = `${spiritAnimalName[randomValue]}`
   }