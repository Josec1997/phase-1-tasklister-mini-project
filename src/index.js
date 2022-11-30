document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector('form')
form.addEventListener('submit',(e) =>{
  e.preventDefault()
  handleInfo(e.target['new-task-description'].value)
})

const handleInfo = (text) => {
const paragraph = document.createElement('p')
paragraph.textContent= `${text}`
document.querySelector('#tasks').append(paragraph)
} 

});

// function removeTasks() {
//   document.removeEventById('list')\
//   }