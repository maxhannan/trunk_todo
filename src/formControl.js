import {todoController} from './todo'
import {viewController} from './viewController'
import {todoList} from './todoModel'

const formControl = ()=>{
    let todoDefault = todoList.todoFactory('new task',new Date(),'enter description.',0,viewController.getcurrent());
    let ul = document.querySelector('ul');
    todoController.todoDivFactory(todoDefault,ul,true)
}

export{
    formControl
}


