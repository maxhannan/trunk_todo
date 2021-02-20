import {headerBuilder} from './header'
import {todoList} from './todoModel'
import {todoController} from './todo'
import { Datepicker } from 'vanillajs-datepicker';
import { Sortable, Plugins } from '@shopify/draggable';
import { viewController } from './viewController';
const todoListMaster = (()=>{
    const todoListBuilder = (section)=>{
        // clear html
        const main = document.querySelector('.main');
        main.innerHTML = ''
        // build new todolist
        const newList = document.createElement('div');
        newList.classList.add('taskContainer');
        let ul = document.createElement('ul');
        ul.classList.add('taskList')
        newList.appendChild(ul)
        main.appendChild(newList);
        // build new header with correct name
        headerBuilder(section);
        // get todo section
        let todos = todoList.getArraySection(section)
    
        todos.forEach(todo =>{
          todoController.todoDivFactory(todo,ul);
            // ul.appendChild(div);
            // // adds event listeners
            // let dateInp = div.querySelector('#date');
            // let openBtn = div.querySelector('.openArrow');
            // let textInp = div.querySelector('.taskText')
            // let checker = div.querySelector('.checker')
            // let editBtn = div.querySelector('.edit')
            // let bin = div.querySelector('.delBtn');
    
            // bin.addEventListener('click', handleDel)
            // checker.addEventListener('mousedown', handleCheck)
            
            // openBtn.addEventListener('mousedown', handleOpenTask)
            // editBtn.addEventListener('mousedown', handleChange)
    
            // const datepicker = new Datepicker(dateInp, {
            //     autohide: true,
            // }); 
    
            // dateInp.addEventListener('changeDate',handleDateChange)

            // textInp.addEventListener('change', (e)=> {
            //     const id = e.target.closest('li').id
            //     const newVal = e.target.value;
            //     todoList.updateTodo(id, 'task', newVal)
            // })
        })

        bindsort();
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
      const newVal = e.detail.date
      todoList.updateTodo(id, 'duedate', newVal)
      todoListBuilder(viewController.getcurrent());
      const target = document.getElementById(id);
      let dateInp = target.querySelector('#date');
      let textInp = target.querySelector('.taskText');
      let editBtn = target.querySelector('.edit')
      textInp.disabled = false;
      dateInp.disabled = false;
      textInp.classList.toggle('yellow')
      dateInp.classList.toggle('yellow')
      editBtn.classList.toggle('yellow');
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
        if(text.disabled){
          text.disabled = false;
        }else{
          text.disabled = true;
        }
        if(date.disabled){
          date.disabled = false;
          // date.value = 'mm/dd/yy'
        }else{
          date.disabled = true;
        }
    
        text.classList.toggle('yellow')
        date.classList.toggle('yellow')
        e.target.closest('.edit').classList.toggle('yellow');
    }

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
    }
      
    return{
        todoListBuilder,
        handleChange,
        handleDel,
        handleCheck,
        handleOpenTask

    }
})()

export{
    todoListMaster
}

