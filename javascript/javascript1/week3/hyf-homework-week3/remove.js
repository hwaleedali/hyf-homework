

const names = ["Peter", "Ahmad", "Yana", "kristina", "Rasmus", "Samuel", "katrine","Tala"];
const nameToRemove = "Ahmad";

for(let i = 0; i < names.length; i++){
  if(nameToRemove === names[i]){
    names.splice(i,1);
  }
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
console.log('Specified Name has been Deleted from Array')

  



       



