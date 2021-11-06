console.log('Candy Helper');
const boughtCandyPrices = [];

function addCandy(candyType,weight){
    
    let candyPrice
    if (candyType === 'sweet'){
        candyPrice = 0.5 * weight;
        boughtCandyPrices.push(candyPrice)

    }else if (candyType === 'chocolate'){
        candyPrice = 0.7 * weight;
        boughtCandyPrices.push(candyPrice)

    }else if (candyType === 'toffee'){
        candyPrice = 1.1 * weight;
        boughtCandyPrices.push(candyPrice)

    }else if (candyType === 'chewing-gum'){
        candyPrice = 0.03 * weight;
        boughtCandyPrices.push(candyPrice)

    }
}
addCandy("sweet", 20);
addCandy("toffee",30)
amounyToSpend = Math.random() * 100;
    function canBuyMoreCandy(amounyToSpend){
        let totalPrice = 0;
        for (let i = 0; i < boughtCandyPrices.length; i++) {
            totalPrice = totalPrice + boughtCandyPrices[i];
        }
        console.log(amounyToSpend,totalPrice)
        if ( totalPrice < amounyToSpend){
            return true;
      }
            return false;
    }    
        const value = canBuyMoreCandy(amounyToSpend)
        if (value === true){
            console.log('You can buy more, Please do it!!!')
        }else {
            console.log('NOOOOO, enough candy for you!')
        }
