import { format } from 'date-fns'

const todoDivFactory = (todo)=>{
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
    todoDiv.innerHTML = `
            <div class="taskHolder">
                <div class="checker ${todo.completed ? 'checked': ''}"></div>
                <div class="task">
                    <input type="text" class="taskText ${todo.completed ? 'completed': ''}" value = '${todo.task}' disabled>
                </div>
                <div class ='dueDate'>
                    <input type="text" class='date' id="date" value="${result}" disabled>
                </div>
                <div class="grabLines opt">
                    <i class="fas fa-grip-lines"></i>
                </div>
            </div>
            <div class="optContainer">
                <div class="openArrow opt">
                    <i class="fas fa-sort-down"></i>
                </div>
                <div class="flag opt">
                    <i style = 'color:${color};'class="fas fa-flag"></i>
                </div>
                <div class="edit opt">
                    <i class="fas fa-edit"></i>
                </div>
                <div class="delBtn opt">
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
            <div class = 'contentHolder'>
                <textarea class="descripText" cols="40" rows="5">${todo.description}</textarea>
            </div>
    `
    return todoDiv
}

export{
    todoDivFactory
}
