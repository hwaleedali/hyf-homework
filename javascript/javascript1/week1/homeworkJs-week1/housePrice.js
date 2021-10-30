console.log('A house price estimate.')

//estmation for peter
const houseWidth1 = 8;
const houseDepth1 = 10;
const houseHeight1 = 10;
const gardenSize1 = 100;
const houseCost1 = 2500000;
const volumeInMeters1 = houseWidth1 * houseDepth1 * houseHeight1;
let housePrice1 = volumeInMeters1 * 2.5 * 1000 + gardenSize1 * 300;
if (housePrice1 >= houseCost1){
    console.log(`House price is ${housePrice1} ,Peter is paying too much for house.`)
}else if(housePrice1 === houseCost1){
    console.log(`House price is ${housePrice1} ,Peter is paying Right Amount for house.`)
}else {
    console.log(`House price is ${housePrice1} ,Peter is paying too little for house.`)
}
const houseWidth2 = 5;
const houseDepth2 = 11;
const houseHeight2 = 8;
const gardenSize2 = 70;
const houseCost2 = 1000000;
const volumeInMeters2 = houseWidth2 * houseDepth2 * houseHeight2;
let housePrice2 = volumeInMeters2 * 2.5 * 1000 + gardenSize2 * 300;

if (housePrice2 >= houseCost2){
    console.log(`House price is ${housePrice2} ,Julia is paying too much for house.`)
}else if(housePrice2 === houseCost2){
    console.log(`House price is ${housePrice2} ,Julia is paying Right Amount for house.`)
}
else {
    console.log(`House price is ${housePrice2} ,Julia is paying too little for house.`)

}