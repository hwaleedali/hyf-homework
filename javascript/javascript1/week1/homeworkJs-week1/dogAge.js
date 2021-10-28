console.log('A dog age calculator');

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true){
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`)
}else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)

}
