import { format } from 'date-fns'
import {todoListMaster} from './todoList'
import {headerBuilder} from './header'
import {todoList} from './todoModel'

import { Datepicker } from 'vanillajs-datepicker';
import { Sortable, Plugins } from '@shopify/draggable';
import { viewController } from './viewController';
const todoController = (()=>{
    const todoDivFactory = (todo,ul,edit = false)=>{
        let color;
        if(todo.priority === 1){
         color = 'green';
        }else if(todo.priority === 2){
            color = 'yellow';
        }else{
            color = 'red';
        }
        let vals = todo.duedate
        
        let result = format(new Date(vals), 'MM/dd/yyyy');
        const todoDiv = document.createElement('li')
        todoDiv.id = todo.getId();
        if(edit){
            todoDiv.classList.add('open')
        }
        todoDiv.innerHTML = `
                <div class="taskHolder">
                    <div class="checker ${todo.completed ? 'checked': ''}"></div>
                    <div class="task">
                        <input type="text"  id = 'task' class="taskText ${edit ? 'yellow' : ''} ${todo.completed ? 'completed': ''}" value = '${todo.task}' ${edit ? '' : 'disabled'}>
                    </div>
                    <div class="edit opt">
                    <i class="fas fa-edit"></i>
                </div>
                     <div class="delBtn opt">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
                <div class="optContainer">
                <div class ='dueDate'>
                <input type="text" class='date ${edit ? 'yellow' : ''}' id="date" value="${result}" ${edit ? '' : 'disabled'}>
            </div>
            <div class="flag opt">
            <i style = 'color:${color};'class="fas fa-flag"></i>
        </div>
        <div class="openArrow opt">
            <i class="fas fa-sort-down ${edit ? 'openBtnOpen' : ''}"></i>
        </div>
                    
                </div>
                <div class = 'contentHolder'>
                    <textarea class="descripText" cols="40" rows="5">${todo.description}</textarea>
                </div>
        `
        ul.prepend(todoDiv)
        addEvents(todoDiv)
    }

    const addEvents = (div)=>{
        let dateInp = div.querySelector('#date');
        let openBtn = div.querySelector('.openArrow');
        let textInp = div.querySelector('.taskText')
        let checker = div.querySelector('.checker')
        let editBtn = div.querySelector('.edit')
        let bin = div.querySelector('.delBtn');
        bin.addEventListener('click', handleDel)
        checker.addEventListener('mousedown', handleCheck)
        
        openBtn.addEventListener('mousedown', handleOpenTask)
        editBtn.addEventListener('mousedown', handleChange)

        const datepicker = new Datepicker(dateInp, {
            autohide: true,
        }); 

        dateInp.addEventListener('changeDate',handleDateChange)

        textInp.addEventListener('input', handleDateChange)
    }
    const handleDel = function(e){
        let garbageDiv = e.target.closest('li')
        garbageDiv.remove();
    }
    const handleCheck = function(e){
        let hol = e.target.closest('.taskHolder');
        let task = hol.querySelector('.taskText');
        // toggle checked class
        e.target.classList.toggle('checked');
        // Strike-through text
        task.classList.toggle('completed');
    }

    const handleDateChange  = (e)=>{
      const id = e.target.closest('li').id
      let type = e.target.id
      let newVal;
      let prop;

      switch(type){
        case 'date':
            prop = 'duedate';
            newVal = e.detail.date
            break
        case 'task':
            prop = 'task'
            newVal = e.target.value     
            break     
      }
      todoList.updateTodo(id, prop, newVal)

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
    
    const handleChange = (e, div = '') =>{
        const inputDiv = e.target.closest('li')
        const text = inputDiv.querySelector('.taskText')
        const date = inputDiv.querySelector('#date')
        // enable/disable text boxes on todos
        let finished;
        if(text.disabled){
          text.disabled = false;
        }else{
            finished = true;
          text.disabled = true;
        }
        if(date.disabled){
          date.disabled = false;
          // date.value = 'mm/dd/yy'
        }else{
          finished = true;
          date.disabled = true;
        }
        
        text.classList.toggle('yellow')
        date.classList.toggle('yellow')
        e.target.closest('.edit').classList.toggle('yellow');
        if(finished){
            todoListMaster.todoListBuilder(viewController.getcurrent());
        }
    }
    return{
        todoDivFactory
    }


})();

    
     
        // adds event listeners
        

   
      


export{
    todoController
}
