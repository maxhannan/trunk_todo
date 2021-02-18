import '../node_modules/@fortawesome/fontawesome-free/js/all';

function handleOpenTask(e){
 let target = e.target.closest('li');
 let listItems = document.querySelectorAll('li');
 listItems.forEach(li => {
   if(li != target){
     li.classList.remove('open'); 
     li.querySelector('.openArrow').classList.remove('openBtnOpen') 
   }
  })
 console.log(target)
 e.target.closest('div').classList.toggle('openBtnOpen')

 target.classList.toggle('open')
}
function handleChange(e){
  console.log(e.target.value)
}
function  handleCheck(e){
  e.target.classList.toggle('checked')
  let hol = e.target.closest('.taskHolder')
  
  let task = hol.querySelector('.taskText')
  task.classList.toggle('completed')
}
const openBtns = document.querySelectorAll('.openArrow')
const inputs = document.querySelectorAll('input')
const checkers = document.querySelectorAll('.checker')
console.log(inputs)
checkers.forEach(check => check.addEventListener('click', handleCheck))
inputs.forEach(inp => inp.addEventListener('change', handleChange))
openBtns.forEach(btn => btn.addEventListener('click', handleOpenTask))