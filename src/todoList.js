import {headerBuilder} from './header'
import {todoList} from './todoModel'
import {todoController} from './todo'
import { Datepicker } from 'vanillajs-datepicker';
import { Sortable, Plugins } from '@shopify/draggable';
import { viewController } from './viewController';
const todoListMaster = (()=>{
    const todoListBuilder = (section)=>{
        // alert('building')
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
        })
        bindsort();
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
    }
      
    return{
        todoListBuilder,
    }
})()

export{
    todoListMaster
}

