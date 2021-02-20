
import {isWithinInterval} from 'date-fns';
import {random} from 'lodash'
const todoList = (()=>{
    // MAIN ARRAY OF TODOS
    let todosArray = JSON.parse(localStorage.getItem('tdarr')) ||  [];

    // RETURNS COPY OF ARRAY SORTED BY DATE
    const getArray = () => {
        return ([...todosArray].sort((a,b) => new Date(b.duedate) - new Date(a.duedate)))
    }
    
    const todoFactory = (task,date,description,priority = 1,sectionId = 0)=>{
        // gives unique id to each object, regardless of index in list
        let duedate = new Date(date);
        const id = random(0,100000000000000)
        // INITIAL TASK COMPLETION
        let completed = false;

        const newTodo = {
            task,
            duedate,
            priority,
            description,
            completed,
            sectionId,
            id,
        }
        // ADD TODO TO ARRAY
        todosArray.push(newTodo)
        return newTodo
    }

    const getArraySection = (section)=>{
        // returns a filtered array of todos
        switch(section){
            case 'inbox':
                return  getArray()
                    .filter(todo => !todo.completed)
                break;
            case 'today':
                return getArray()
                    .filter(todo => !todo.completed)
                    .filter(todo => isToday(new Date(todo.duedate)));
                break;
            case 'upcoming':
                return inThisWeek()
                    .filter(todo => !todo.completed);
                break;
            case 'completed':
                return getArray()
                .filter(todo => todo.completed);
                break;
            default:
                return getArray()
                    .filter(todo => !todo.completed)
                    .filter(todo => todo.sectionId === section);
                break;
        } 
    }
    const getArrayIndex = (id)=>{
        // returns index of todo with that id 
        let result;
        let arr  = getArray();
        for(let ix = 0; ix < arr.length; ix++){
            if(arr[ix].id === Number(id)){
                result = todosArray.indexOf(arr[ix])
                break;
            }
        }
         return result   
    }
    // Checks if date is today
    const isToday = (someDate) => {
        const today = new Date()
        return someDate.getDate() == today.getDate() &&
          someDate.getMonth() == today.getMonth() &&
          someDate.getFullYear() == today.getFullYear()
    }
    // Checks if date is in the next week using date-FNS isWithinInterval
    const inThisWeek = (todo)=>{
        let today = new Date();
        let next = nextweek()
        let todayList = getArray()
            .filter(todo => isToday(new Date(todo.duedate)));
        let weekList = getArray()
            .filter(todo => isWithinInterval( new Date(todo.duedate),{ start: today, end: next }));
        return [ ...weekList,...todayList];
    }
    // Gets the date a week from today
    const nextweek = ()=>{
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        return nextweek;
    }
    // UPDATES TODOS AND RESETS LOCAL STORAGE
    const updateTodo = (ix,prop, newVal = '') =>{
        switch(prop){
            case 'task':
                todosArray[ix].task = newVal;
                break;
            case 'duedate':
                todosArray[ix].duedate = newVal;
                break;
            case 'completed':
                todosArray[ix].completed = !todosArray[ix].completed;
                break;
            case 'descrip':
                todosArray[ix].description = newVal;
                break;
            case 'priority':
                todosArray[ix].priority = newVal;
                break;
        } 
        localStorage.setItem('tdarr', JSON.stringify(todosArray));          
    }

    const deleteTodo = (index)=>{
        todosArray.splice(index,1);
        localStorage.setItem('tdarr', JSON.stringify(todosArray));   
    }

    const deleteSection = (section)=>{
        let garbageTodos = getArraySection(section);
        garbageTodos.forEach(todo => {
            deleteTodo(getArrayIndex(todo.id))
        });       
    }
    
    return{
        todoFactory,
        getArray,
        updateTodo,
        deleteTodo,
        getArraySection,
        getArrayIndex,
        deleteSection
    }
})();

export{
    todoList
}


