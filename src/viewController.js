import { Sortable, Plugins } from '@shopify/draggable';
import { format } from 'date-fns'
import {todoDivFactory} from './todo'
import {todoList} from './todoModel'
const viewController = (()=>{
  // cacheHTML
  let taskHeader,taskContainer, sideBar, menuOpen, adder,main,taskList;
  const cacheHtml = () =>{
     taskHeader = document.querySelector('.taskHeader')
     taskContainer = document.querySelector('.taskContainer')
     sideBar = document.querySelector('.sidebar')
     main = document.querySelector('.main')
     menuOpen = document.querySelector('.menuOpen')
     adder = document.querySelector('.adder')
    taskList = document.querySelector('#taskList')
  }
  
  
  // sleep function
  const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // New Sortable instance for list
  const bindsort = ()=>{
    const sortable = new Sortable(document.querySelectorAll('ul'), {
      draggable: 'li',
      //hides mirror
      mirror: {
      //   appendTo: '.hidden'
        constrainDimensions: true,
        yAxis: true
      },
      swapAnimation: {
        duration: 200,
        easingFunction: 'ease',
        horizontal: false
      },
      plugins: [Plugins.SwapAnimation]
    });
    // Border while drag
    sortable.on('drag:start',(e) => e.data.source.style.border = '3px solid lightskyblue');
    // After reorder of elements, rebind events
    sortable.on('drag:stop',bindEvents);

  }
  
  const handleOpenTask = async(e)=>{
    
    let target = e.target.closest('li');
    let listItems = document.querySelectorAll('li');
    // Closes all other tasks
    listItems.forEach(li => {
      if(li != target){
        li.classList.remove('open'); 
        li.querySelector('.openArrow').classList.remove('openBtnOpen') 
      }
    })
    // Open task drawer
    e.target.closest('div').classList.toggle('openBtnOpen')
    target.classList.toggle('open')
  }

  const handleChange = (e) =>{
    const inputDiv = e.target.closest('li')
    const text = inputDiv.querySelector('.taskText')
    const date = inputDiv.querySelector('#date')
    // enable/disable text boxes on todos
    if(text.disabled){
      text.disabled = false;
    }else{
      text.disabled = true;
    }
    if(date.disabled){
      date.disabled = false;
      date.value = 'mm/dd/yy'
    }else{
      date.disabled = true;
    }

    text.classList.toggle('yellow')
    date.classList.toggle('yellow')
    e.target.closest('.edit').classList.toggle('yellow');
  }

  const handleCheck = function(e){
    let hol = e.target.closest('.taskHolder');
    let task = hol.querySelector('.taskText');
    // toggle checked class
    e.target.classList.toggle('checked');
    // Strike-through text
    task.classList.toggle('completed');
  }

  const handleMenuOpen = ()=>{
    // Hide Adder
    adder.classList.remove('add')
    adder.classList.toggle('hide')
    //Open Menu
    menuOpen.classList.toggle("change")
    sideBar.classList.toggle('openBar');
    main.classList.toggle('openSideBar')
    taskContainer.classList.toggle('hidden')
    taskHeader.classList.toggle('hidden')
  }

  const handleAdd = ()=>{
    // Animate adder
    adder.classList.toggle('add');
    // Make sure menu is closed
    menuOpen.classList.remove("change")
    sideBar.classList.remove('openBar')
    main.classList.remove('openSideBar')
    taskContainer.classList.remove('hidden')
    taskHeader.classList.remove('hidden')

    let list = todoList.getArray()
    let div = todoDivFactory(list[1]);
    taskList.appendChild(div);
  
    viewController.bindEvents();

  }
  
  const handleDel = function(e){
    let garbageDiv = e.target.closest('li')
    garbageDiv.remove();
    bindEvents();
  }

  const bindEvents = ()=>{
    // Removes and rebinds events on all tasks;
    const openBtns = document.querySelectorAll('.openArrow')
    const inputs = document.querySelectorAll('input')
    const checkers = document.querySelectorAll('.checker')
    const edit = document.querySelectorAll('.edit')
    const bins = document.querySelectorAll('.delBtn')
    // Remove Event Listeners
    checkers.forEach(check => check.removeEventListener('mousedown', handleCheck))
    edit.forEach(editBtn => editBtn.removeEventListener('mousedown', handleChange));
    openBtns.forEach(btn => btn.removeEventListener('mousedown', handleOpenTask))
    // listeners for task updates
    inputs.forEach(input => input.addEventListener('change', ()=>{
      const newVal = input.value;
      console.log(newVal)
      if(input.id === 'date'){
        let vals = input.value.split('/')
        console.log(vals)
        const day = Number(vals[0] -1)
        let result = format(new Date( vals[2], day, vals[1]), 'MMM do yy');
        input.value = result;
        console.log(result)
      }
    }));
    // Add Event Listeners
    bins.forEach(bin => bin.addEventListener('click', handleDel))
    checkers.forEach(check => check.addEventListener('mousedown', handleCheck))
    edit.forEach(editBtn => editBtn.addEventListener('mousedown', handleChange));
    openBtns.forEach(btn => btn.addEventListener('mousedown', handleOpenTask))
  }

  const handlePageChange = (e) =>{
    console.log(e.target.closest('div').id);
  }
 
  return{
    cacheHtml,
    bindEvents,
    bindsort,
    handleAdd,
    handleMenuOpen,
    handlePageChange
  } 
})();

export{
  viewController
}
