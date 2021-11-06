//Code for Weather Wear

console.log('Weather wear');
function temp(temprature){
    if (temprature <= 2){
  return 'Jacket is needed';
}else {
    return 'Its not that cold'
}
}
const clothesToWear = temp(1);
console.log(clothesToWear); 