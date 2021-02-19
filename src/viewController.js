import {todoListMaster} from './todoList'
const viewController = (()=>{
  // cacheHTML
  let taskHeader,taskContainer, sideBar, menuOpen, adder, main;
  const cacheHtml = () =>{
     taskHeader = document.querySelector('.taskHeader')
     taskContainer = document.querySelector('.taskContainer')
     sideBar = document.querySelector('.sidebar')
     main = document.querySelector('.main')
     menuOpen = document.querySelector('.menuOpen')
     adder = document.querySelector('.adder')
  }

  // sleep function
  const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
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
  
  const handlePageChange = (e) =>{
    todoListMaster.todoListBuilder(e.target.closest('div').id);
    taskHeader = document.querySelector('.taskHeader')
    taskContainer = document.querySelector('.taskContainer')
    menuOpen = document.querySelector('.menuOpen')
    adder = document.querySelector('.adder')
    menuOpen.classList.add("change")
    taskContainer.classList.add('hidden')
    taskHeader.classList.add('hidden')
    adder.classList.toggle('hide')
    handleMenuOpen();
    
  }
 
  return{
    cacheHtml,
    handleAdd,
    handleMenuOpen,
    handlePageChange
  } 
})();

export{
  viewController
}
