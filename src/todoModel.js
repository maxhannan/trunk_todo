
import {isWithinInterval} from 'date-fns';

const todoList = (()=>{
    // let base_id = 0;
    let jarr = JSON.parse(localStorage.getItem('tdarr'))
    let todosArray = jarr ||  [];
    

    console.log(todosArray)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }
    const getArray = () => {
        //sorts array by date and returns copy
        console.log([...todosArray].sort((a,b) => new Date(b.duedate) - new Date(a.duedate)))
        return ([...todosArray].sort((a,b) => new Date(b.duedate) - new Date(a.duedate)))
    }
    
    const todoFactory = (task,date,description,priority = 1,sectionId = 0)=>{
        // gives unique id to each object, regardless of index in list
        let duedate = new Date(date);
        const id = getRandomInt(0,10000000)
        


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
                return getArray().
                filter(todo => !todo.completed)
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
                let todo = arr[ix]
                result = todosArray.indexOf(arr[ix])
                console.log({result})
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
        return [ ...weekList,...todayList];
    }
    const nextweek = ()=>{
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        return nextweek;
    }
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

    const deleteTodo = (ix)=>{
        todosArray.splice(ix,1);
        localStorage.setItem('tdarr', JSON.stringify(todosArray)); 
         
    }
    const deleteSection = (section)=>{
        let garbTodos = getArraySection(section);
        garbTodos.forEach(todo => {
            console.log(todo)
            deleteTodo(todo.id)
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


