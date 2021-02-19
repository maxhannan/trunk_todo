


const todoList = (()=>{
    let base_id = 0;
    const todosArray =  [];
    const getArray = () => [...todosArray];
    const todoFactory = (task,duedate,description,priority = 1,sectionId = 0)=>{
        // gives unique id to each object, regardless of index in list
        const id = base_id;
        base_id ++
        const getId = () => id;
        let completed = false;
        const newTodo = {
            task,
            duedate,
            priority,
            description,
            completed,
            sectionId,
            getId
        }
        todosArray.push(newTodo)
        return newTodo
    }

    const getArraySection = (section)=>{
        // returns a filtered array of todos
        return todoList.getArray()
            .filter(todo => todo.sectionId === section);
    }

    const updateTodo = (id,prop, newVal) =>{
        todosArray.forEach(todo =>{
            if(todo.getId() === id){
                switch(prop){
                    case 'task':
                        todo.task = newVal;
                        break;
                    case 'duedate':
                        todo.duedate = newVal;
                        break;
                    case 'priority':
                        todo.priority = newVal;
                        break;
                    case 'description':
                        todo.description = newVal;
                        break;
                    case 'completed':
                        todo.completed = newVal;
                        break;
                }  
            }
        })
    }

    const deleteTodo = (id)=>{
        todosArray.forEach(todo =>{
            if(todo.id === id){
                todosArray.splice(todosArray.indexOf(todo),1);
            }
        })
    }
    
    return{
        todoFactory,
        getArray,
        updateTodo,
        deleteTodo,
        getArraySection
    }
})();

export{
    todoList
}


