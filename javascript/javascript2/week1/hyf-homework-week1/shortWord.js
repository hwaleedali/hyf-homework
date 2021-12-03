console.log('Find Short Word of Array')

// const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
// const result = danishWords.filter(danishWords => danishWords.length <= 1); 
// console.log(`The Shortest Word in an Array is ${result}`)
// // returns 'ø'


const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortWord(danishWords){
    for (let i = 0; i < danishWords.length; i++){
        let danishLetter = danishWords[0];
        if(danishLetter.length > danishWords[i].length){
            danishLetter = danishWords[i];
            console.log( `The Shortest Word in an Array is ${danishLetter}`);
        }
    }
}
shortWord(danishWords);