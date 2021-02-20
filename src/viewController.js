import {todoListMaster} from './todoList'
const viewController = (()=>{
  // keeps track of current page
  let currentPage = 'inbox';
  // cacheHTML
  let taskHeader,taskContainer, sideBar, menuOpen, adder, main, formBar;
  const cacheHtml = () =>{
     taskHeader = document.querySelector('.taskHeader')
     taskContainer = document.querySelector('.taskContainer')
     sideBar = document.querySelector('.sidebar')
     main = document.querySelector('.main')
     menuOpen = document.querySelector('.menuOpen')
     adder = document.querySelector('.adder')
     formBar = document.querySelector('.formBar')
  }

  // sleep function
  const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleMenuOpen = ()=>{
    // Hide Adder
    adder.classList.remove('add')
    adder.classList.toggle('hide')
    formBar.classList.remove('openBar')
   
    //Open Menu
    menuOpen.classList.toggle("change")
    sideBar.classList.toggle('openBar');
    main.classList.toggle('openSideBar')
    taskContainer.classList.toggle('hidden')
    taskHeader.classList.toggle('hidden')
  }

  const handleAdd = ()=>{
    // alert(currentPage)
    // Animate adder
    adder.classList.toggle('add');
    // Make sure menu is closed
    menuOpen.classList.remove("change")
    menuOpen.classList.toggle("hidden")
    
    sideBar.classList.remove('openBar')
  

    formBar.classList.toggle('openBar')
    main.classList.toggle('openSideBar')
    taskContainer.classList.toggle('hidden')
    taskHeader.classList.toggle('hidden')

  }
  
  const handlePageChange = (e) =>{
    currentPage = e.target.closest('div').id
    todoListMaster.todoListBuilder(e.target.closest('div').id);
    cacheHtml();
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
    handlePageChange,
    currentPage
  } 
})();

export{
  viewController
}
