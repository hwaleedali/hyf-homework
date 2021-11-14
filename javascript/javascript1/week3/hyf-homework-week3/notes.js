console.log('Access Notes')

const notes = [];

function saveNote(content, id) {
   let newObject = {
       content : content,
       id : id
   }
  notes.push(newObject)
}

saveNote("Pick up groceries", 1)
saveNote("Do laundry", 2)

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
   for(let i = 0; i <= notes.length; i++){
    
      if ( notes[i].id === id ){
        return notes[i]
    }
  }
}
  
  const firstNote = getNote(1);
  console.log(firstNote)
  
function logOutNotesFormatted(){
    for (const element of notes) {  
        console.log("ID: " + element.id + " has Note on => " + element.content +" ")
    }
}
logOutNotesFormatted();