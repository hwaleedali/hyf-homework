console.log('Find Danish Letters in a String')

const danishString = "Jeg har en blå bil";

function danishWordCount(){ // returns {total: 1, å: 1}
    let count =''
    let count1 =''
    let count2=''

    const danishLetter = danishString.split('')
    const danishWords = ['æ','ø','å']
for (let i = 0; i < danishLetter.length; i++){
    
       if(danishLetter[i] === 'æ'){
        count++;
       }else if (danishLetter[i] === 'ø'){
        count1++;
       }else if (danishLetter[i] === 'å'){
        count2++;
       }      

    }
    let totalCount = count + count1 + count2;

    console.log('String has ' + totalCount +' Danish Letters. æ = ' + count +' ø = ' + count1 +' å = ' + count2 +'')
    
}
danishWordCount();

const danishString2 = "Blå grød med røde bær";
function danishWordCount1(){ // returns {total: 1, å: 1}
    let count3 = 0;
    let count4 =0;
    let count5= 0;

    const danishLetter1 = danishString2.split('')
    const danishWords1 = ['æ','ø','å']
for (let i = 0; i < danishLetter1.length; i++){
    
       if(danishLetter1[i] === 'æ'){
        count3++;
       }else if (danishLetter1[i] === 'ø'){
        count4++;
       }else if (danishLetter1[i] === 'å'){
        count5++;
       }      

    }
    let totalCount1 = count3 + count4 + count5;

    console.log('String has ' + totalCount1 +' Danish Letters. æ = ' + count3 +' ø = ' + count4 +' å = ' + count5 +'')
    
}
danishWordCount1();
