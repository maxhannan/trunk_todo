import '../node_modules/@fortawesome/fontawesome-free/js/all';
import { Sortable, Plugins } from '@shopify/draggable';
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const sortable = new Sortable(document.querySelectorAll('ul'), {
  draggable: 'li',
  swapAnimation: {
    duration: 200,
    easingFunction: 'ease-in-out',
    horizontal: false
  },
  // mirror: {
  //   appendTo: '.hidden'
  // },
  
  plugins: [Plugins.SwapAnimation]
});
const handleOpenTask = (e)=>{
 let target = e.target.closest('li');
 let listItems = document.querySelectorAll('li');
 listItems.forEach(li => {
   if(li != target){
     li.classList.remove('open'); 
     li.querySelector('.openArrow').classList.remove('openBtnOpen') 
   }
  })
 e.target.closest('div').classList.toggle('openBtnOpen')
 target.classList.toggle('open')
}
const handleChange = (e) =>{
  console.log(e.target.value)
  e.target.disabled = true;
}
const handleCheck = function(e){
  e.target.classList.toggle('checked')
  console.log(e.target)
  let hol = e.target.closest('.taskHolder')
  let task = hol.querySelector('.taskText')
  task.classList.toggle('completed')
}
const handleMenuOpen = async()=>{
  menuOpen.classList.toggle("change")
  sideBar.classList.toggle('openBar')
  adder.classList.remove('add')
  
  main.classList.toggle('openSideBar')
  taskContainer.classList.toggle('hidden')
  taskHeader.classList.toggle('hidden')
  
}
const bindEvents = ()=>{
  const openBtns = document.querySelectorAll('.openArrow')
  const inputs = document.querySelectorAll('input')
  const checkers = document.querySelectorAll('.checker')
  const taskBox = document.querySelectorAll('.task')
  
  // console.log(checkers)
  checkers.forEach(check => check.removeEventListener('mousedown', handleCheck))
  inputs.forEach(inp => inp.removeEventListener('change', handleChange))
  openBtns.forEach(btn => btn.removeEventListener('mousedown', handleOpenTask))

  checkers.forEach(check => check.addEventListener('mousedown', handleCheck))
  inputs.forEach(inp => inp.addEventListener('change', handleChange))
  taskBox.forEach(tb => tb.addEventListener('dblclick', (e)=>{e.target.disabled = false;}))
  openBtns.forEach(btn => btn.addEventListener('mousedown', handleOpenTask))
  
}
const taskHeader = document.querySelector('.taskHeader')
const taskContainer = document.querySelector('.taskContainer')
const sideBar = document.querySelector('.sidebar')
const menuOpen = document.querySelector('.menuOpen')
const adder = document.querySelector('.adder')
const main = document.querySelector('.main')
bindEvents();

adder.addEventListener('click', ()=>{
  adder.classList.toggle('add')
  menuOpen.classList.remove("change")
  sideBar.classList.remove('openBar')
  main.classList.remove('openSideBar')
  taskContainer.classList.remove('hidden')
  taskHeader.classList.remove('hidden')
})
menuOpen.addEventListener('click', handleMenuOpen);
sortable.on('drag:start',(e) => e.data.source.style.border = '3px solid lightskyblue');
sortable.on('drag:stop',bindEvents);