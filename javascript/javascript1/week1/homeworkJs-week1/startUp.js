console.log('Startup name generator');

const firstWords = ['Js' , 'front-end', 'full-stack', 'IT', 'Cph','Digital'];
const secondWord = ['firma' , 'corporate', 'develepor' , 'support' , 'united', 'solutions'];


const arrayNumber1 = Math.floor(Math.random()*6);
const arrayNumber2 = Math.floor(Math.random()*6);
const startupName = firstWords[arrayNumber1] +" " + secondWord[arrayNumber2];

console.log(`Start-up Name: ${startupName} contains ${startupName.length} characters`);