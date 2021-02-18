import '../node_modules/@fortawesome/fontawesome-free/js/all';
import {viewController} from './viewController'
import {todoList} from './todoModel'

viewController.bindEvents();
viewController.bindsort();

todoList.todoFactory('test1','2','3',4,5);
todoList.todoFactory('test2','2','3',4,5);
todoList.todoFactory('test3','2','3',4,2);
todoList.todoFactory('test4','2','3',4,1);
todoList.updateTodo(3,'completed',true)


console.table(todoList.getArray())
console.table(todoList.getArraySection(5))
console.table(todoList.getArraySection(2))
console.table(todoList.getArraySection(1))



