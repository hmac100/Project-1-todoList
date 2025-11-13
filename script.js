    const form = document.getElementById('form')
    const input = document.getElementById('input')
    const addMsg = document.getElementById('add-msg')
    const taskList= document.getElementById('task-list')
    const clearBtn= document.getElementById('clear-btn')

    

form.addEventListener('submit',(e)=> {
    e.preventDefault()
   const task = input.value

   if(task === '') {
       addMsg.textContent= 'please add a task'
       return
    }   
       addMsg.textContent= ''
   


 // create li 
const listItem = document.createElement('li')
listItem.classList.add('task')

listItem.innerHTML = ` 
${task}
        <span>
           <button id="edit-task">📝</button>
           <button id="del-task">🗑️</button>
        </span>   
       `
taskList.appendChild(listItem)
 input.value = ""



})
// outside form
//delete 
taskList.addEventListener('click',(e)=> {
  const li = e.target.closest('li')
  if(!li){
    return
  } else {
    li.remove()
  }
  console.log(li)
})


// outside form
clearBtn.addEventListener('click', ()=> {
taskList.innerHTML = " "
})
