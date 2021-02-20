
import {todoController} from './todo'
import {viewController} from './viewController'
import {todoList} from './todoModel'
import {todoListMaster} from './todoList'
import { Datepicker } from 'vanillajs-datepicker';

const formControl = ()=>{
    let todoDefault = todoList.todoFactory('new task',new Date(),'enter description.',1,viewController.currentPage);
    // alert(todoDefault.getId())
    let ul = document.querySelector('ul');
    todoController.todoDivFactory(todoDefault,ul,true)
  
   
}

export{
    formControl
    
}









// const content = document.querySelector('#content')
// // build form
// const formBar = document.createElement('div');
// formBar.classList.add('formBar')
// // formBar.classList.add('openBar')
// formBar.innerHTML = 'hello'
// // hide and show form 
// content.appendChild(formBar)

// form validation


// form submit


