import { format } from 'date-fns'
import {todoListMaster} from './todoList'
import {todoList} from './todoModel'
import { Datepicker } from 'vanillajs-datepicker';
import { viewController } from './viewController';

const todoController = (()=>{
    const todoDivFactory = (todo,ul,edit = false)=>{
        let color;
        if(todo.priority === 0){
            color = 'white';
        }else if(todo.priority === 1){
         color = 'green';
        }else if(todo.priority === 2){
            color = 'yellow';
        }else{
            color = 'red';
        }
        let vals = todo.duedate
        console.log({todo})
        let result = format(new Date(vals), 'MM/dd/yyyy');
        const todoDiv = document.createElement('li')
        todoDiv.id = todo.id;
        if(edit){
            todoDiv.classList.add('open')
        }
        todoDiv.innerHTML = `
                <div class="taskHolder">
                    <div class="checker ${todo.completed ? 'checked': ''}"></div>
                    <div class="task">
                        <input type="text"  id = 'task' class="taskText ${edit ? 'yellow' : ''} 
                        ${todo.completed ? 'completed': ''}" 
                        value = '${todo.task}' ${edit ? '' : 'disabled'}>
                    </div>
                    <div class="edit opt ${edit ? 'yellow' : ''}">
                    <i class="far fa-edit"></i>
                </div>
                     <div class="delBtn opt">
                        <i class="far fa-times-circle"></i>
     
                    </div>
                </div>
                <div class="optContainer">
                    <div class ='dueDate'>
                        <input type="text" class='date ${edit ? 'yellow' : ''}' id="date" value="${result}" ${edit ? '' : 'disabled'}>
                    </div>
                    <div id = '${todo.priority}' class="flag opt">
                        
                        <i style = 'color:${color};' id = 'flag' class="far fa-flag"></i>
                    </div>
                    <div  class="openArrow opt">
                        <i class="fas fa-chevron-down ${edit ? 'openBtnOpen' : ''}"></i>

                    </div>
                </div>
                <div class = 'contentHolder'>
                    <textarea id = 'descrip' class="descripText" cols="40" rows="5">${todo.description}</textarea>
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
        let descrip = div.querySelector('.descripText')
        let flag = document.querySelector('.flag')

        flag.addEventListener('mousedown', handleFlags)
        bin.addEventListener('click', handleDel)
        checker.addEventListener('mousedown', handleCheck)
        
        openBtn.addEventListener('mousedown', handleOpenTask)
        editBtn.addEventListener('mousedown', handleChange)

        const datepicker = new Datepicker(dateInp, {
            autohide: true,
        }); 

        dateInp.addEventListener('changeDate',handleUpdate)
        descrip.addEventListener('input', handleUpdate)
        textInp.addEventListener('input', handleUpdate)
    }
    const handleFlags =(e)=>{
        const li_id = e.target.closest('li').id
        const ix = todoList.getArrayIndex(li_id)
        const colors = ['white', 'green', 'yellow', 'red'];
        let target = e.target.closest('div')
        let priority = target.id 
        let newPriority = Number(priority) + 1
        
        console.log({priority,newPriority})
        if(newPriority > 3){
           newPriority = 0;
        }
        todoList.updateTodo(ix, 'priority', newPriority);
        target.id = newPriority
        target.querySelector('#flag').style.color = colors[newPriority]
    }

    const handleDel = function(e){
        let garbageDiv = e.target.closest('li')
        const li_id = garbageDiv.id
        const ix = todoList.getArrayIndex(li_id)
        todoList.deleteTodo(ix);
        garbageDiv.remove();
    }

    const handleCheck = async function(e){
        const id = e.target.closest('li').id
        let ix = todoList.getArrayIndex(id)
        let hol = e.target.closest('.taskHolder');
        let task = hol.querySelector('.taskText');
        // toggle checked class
        e.target.classList.toggle('checked');
        // Strike-through text
        task.classList.toggle('completed');
        todoList.updateTodo(ix, 'completed')
        await viewController.sleep(2000)
        todoListMaster.todoListBuilder(viewController.getcurrent());

    }

    const handleUpdate  = (e)=>{
      const id = e.target.closest('li').id
      let type = e.target.id
      let ix = todoList.getArrayIndex(id)
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
        case 'descrip':
            prop = 'descrip'
            newVal = e.target.value     
            break  

      }
      todoList.updateTodo(ix, prop, newVal)

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
            console.log({finished})
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
