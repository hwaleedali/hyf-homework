console.log('Voice Assistance')

const nameAssistance=[]
 const todoList=[]
 function getReply(command) {   

    if(command.includes('What is my name')){
        if (nameAssistance.length)
        console.log(`Your name is ${nameAssistance[0]}`)
      else
        console.log("Wait...I dont have your name") 
       }  
     if (command.includes('Hello my name is Benjamin'))
     {
         const splitCommand = command.split(' ')
         nameAssistance.push(splitCommand[4])
         console.log(`Nice to meet you ${nameAssistance[0]}`)
     }
     if (command.includes('Add fishing to my todo')){
         console.log('Add fishing to my to-do')
         todoList.push('fishing tommorow')
         console.log('fishing has been added to your to-do list.')              
     }
      if (command.includes('Add singing in the shower to my todo')){
          console.log('Add singing in shower in my to-do list.')
         todoList.push('singing in the shower')
         console.log('Adding singing in the shower on your to-do list')              
     }
     if(command.includes('Remove singing in the shower'))
     {
         console.log('I dont wanna sing in shower, remove from to-do.')
         todoList.pop()
         console.log('singing in shower is removed from your todo list')
     }
     if (command.includes('what is on my todo')){
         console.log('What is on my todo now.')

         console.log(`${todoList} is on your todo list.`);
     }
     if(command.includes('What day is it today?')){
         console.log('What Day is Today')
         const nameOfMonths = ["January", "February", "March", "April", "May",      "June", "July", "August", "September", "October", "November", "December"]

            const date = new Date().toLocaleDateString();
            console.log(date)
     }
     let opratorArray=[]
     let oprator
     if (command.includes('+')|| command.includes('-') ||command.includes('*')||command.includes('/')||command.includes('%')){
        opratorArray=command.split(' ')

        if(command.includes('+'))
        {
          oprator = Number(opratorArray[2])+ Number(opratorArray[4])
         console.log(`${opratorArray[2]} + ${opratorArray[4]} = ${oprator}`)
        }
        if(command.includes('-'))
        {
         oprator=Number(opratorArray[2])- Number(opratorArray[4])
         console.log(`${opratorArray[2]} - ${opratorArray[4]} = ${oprator}`)
        }
        if(command.includes('*'))
        {
         oprator=Number(opratorArray[2])* Number(opratorArray[4])
         console.log(`${opratorArray[2]} * ${opratorArray[4]} = ${oprator}`)
        }
        if(command.includes('/'))
        {
         oprator=Number(opratorArray[2])/ Number(opratorArray[4])
         console.log(`${opratorArray[2]} / ${opratorArray[4]} = ${oprator}`)
        }
        if(command.includes('%'))
        {
         oprator=Number(opratorArray[2]) % Number(opratorArray[4])
         console.log(`${opratorArray[2]} % ${opratorArray[4]} = ${oprator}`)
        }
     }
  if (command.includes('timer')){           
console.log('Set timer for 4 minutes')
function settingTimer(msg){
    console.log(msg)
}
setTimeout(settingTimer, 240000, 'Timer is done');
     }
}
 
 getReply('Hello my name is Benjamin')
 getReply('What is my name')
 getReply('Add fishing to my todo')
 getReply('Add singing in the shower to my todo')
 getReply('Remove singing in the shower')
 getReply('what is on my todo')
 getReply('What day is it today?')
 getReply("what is 3 % 3");
 getReply("what is 4 * 5");
 getReply('Set a timer for 4 minutes') 