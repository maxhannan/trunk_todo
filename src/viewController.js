import { Sortable, Plugins } from '@shopify/draggable';
const viewController = (()=>{
  // cacheHTML
  const taskHeader = document.querySelector('.taskHeader')
  const taskContainer = document.querySelector('.taskContainer')
  const sideBar = document.querySelector('.sidebar')
  const menuOpen = document.querySelector('.menuOpen')
  const adder = document.querySelector('.adder')
  const main = document.querySelector('.main')
  
  // sleep function
  const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // New Sortable instance for list
  const bindsort = ()=>{
    const sortable = new Sortable(document.querySelectorAll('ul'), {
      draggable: 'li',
      swapAnimation: {
        duration: 200,
        easingFunction: 'ease-in-out',
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
      console.log(input.value)
    }));
    console.log(bins)
    // Add Event Listeners
    bins.forEach(bin => bin.addEventListener('click', handleDel))
    checkers.forEach(check => check.addEventListener('mousedown', handleCheck))
    edit.forEach(editBtn => editBtn.addEventListener('mousedown', handleChange));
    openBtns.forEach(btn => btn.addEventListener('mousedown', handleOpenTask))
  }
 
  // Event listeners for static elements. 
  adder.addEventListener('click', handleAdd)
  menuOpen.addEventListener('click', handleMenuOpen);

  return{
    bindEvents,
    bindsort
  } 
})();

export{
  viewController
}
