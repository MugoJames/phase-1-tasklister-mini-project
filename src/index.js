document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form=document.querySelector("#create-task-form")
  const tasks=document.querySelector("#tasks")
  console.log(tasks)
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const taskDescription=document.querySelector("#new-task-description")
    const taskValue =taskDescription.value
    if(taskValue == ""){
      alert("Please write a to do")
    }
    else{

      const taskList =document.createElement("li");
      const deleteButton =document.createElement('button')
      taskList.textContent=taskValue
      deleteButton.textContent='x'
      tasks.appendChild(taskList)
      taskList.appendChild(deleteButton)
      deleteButton.addEventListener('click',()=>{
        taskList.remove()

      })
    }
    form.reset()

  })

});
