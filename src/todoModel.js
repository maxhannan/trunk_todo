
import {isWithinInterval} from 'date-fns';

const todoList = (()=>{
    let base_id = 0;
    const todosArray =  [];
    const getArray = () => {
        //sorts array by date and returns copy
        return [...todosArray].sort((a, b) => a.duedate- b.duedate);
    }
    
    const todoFactory = (task,date,description,priority = 1,sectionId = 0)=>{
        // gives unique id to each object, regardless of index in list
        let duedate = new Date(date);
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
        switch(section){
            case 'inbox':
                return getArray();
                break;
            case 'today':
                return getArray().filter(todo => isToday(new Date(todo.duedate)));
                break;
            case 'upcoming':
                return inThisWeek();
                break;
            case 'completed':
                return getArray().filter(todo => todo.completed);
                break;
            default:
                return getArray().filter(todo => todo.sectionId === section);
                break;
        }
       
    }
    const getArrayIndex = (id)=>{
        // returns index of array with that id 
        let result;
        let arr = getArray();
        for(let ix = 0; ix < arr.length; ix++){
            if(arr[ix].getId() === Number(id)){
                let todo = arr[ix]
                result = {todo,ix} 
                break;
            }
        }
         return result   
    }
    const isToday = (someDate) => {
        const today = new Date()
        return someDate.getDate() == today.getDate() &&
          someDate.getMonth() == today.getMonth() &&
          someDate.getFullYear() == today.getFullYear()
    }
    const inThisWeek = (todo)=>{
        let today = new Date();
        let next = nextweek()
        let todayList = getArray()
            .filter(todo => isToday(new Date(todo.duedate)));
        let weekList = getArray()
            .filter(todo => isWithinInterval( new Date(todo.duedate),{ start: today, end: next }));
        return [...todayList, ...weekList];
    }
    const nextweek = ()=>{
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        return nextweek;
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
        getArraySection,
        getArrayIndex
    }
})();

export{
    todoList
}


