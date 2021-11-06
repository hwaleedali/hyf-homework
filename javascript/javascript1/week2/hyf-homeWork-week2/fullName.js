console.log('Full Name on Ticket')

function getFullname (firstname,surname,useFormalName){
    
    if( useFormalName){
      return 'Lord' +" "+ firstname +" "+ surname;
}
        return firstname +" "+ surname;''
}
const personName = getFullname('Benjamin','Hughes',true)
console.log(personName);
 const fullname1 = getFullname('Morten','Kaltoft');
 const fullname2 = getFullname('Fabio','Rasmus');

 console.log(fullname1);
 console.log(fullname2);