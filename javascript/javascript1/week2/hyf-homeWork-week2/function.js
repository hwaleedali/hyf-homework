//Code for Class

const class07Students = [];
function addStudentToClass(studentName){
if(!class07Students.includes(studentName)){
    if(class07Students.length < 6 || studentName === 'Queen'){
        class07Students.push(studentName);
    }else if (class07Students.length >= 6){
        console.log('Could not add more')
    }else{
        console.log('wrong')
    }
}else{
    console.log(`${studentName} is already in class `)
}
}
addStudentToClass('Alex');
addStudentToClass('Selena');
addStudentToClass('Ali');
addStudentToClass('Morgan')
addStudentToClass('Mie')
addStudentToClass('hughs');
addStudentToClass('Queen')


console.log(class07Students)
function getNumberOfStudents() {
      return class07Students.length;
    }
    console.log(('Total Number of Students are'), getNumberOfStudents());
    
