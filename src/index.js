import '../node_modules/@fortawesome/fontawesome-free/js/all';
import {viewController} from './viewController'
import {todoList} from './todoModel'
import{sideBar} from './sidebar'
import {headerBuilder} from './header'
import {todoDivFactory} from './todo'

sideBar.sideBarBuilder();
headerBuilder('inbox');

viewController.cacheHtml();
viewController.bindEvents();
viewController.bindsort();


// TEST CODE

todoList.todoFactory('This is a test','07/12/1998','HELLO WORLD',1,5);
todoList.todoFactory('Shop for Xmas Gifts','12/25/2021','HELLO WORLD',2,5);
todoList.todoFactory('This is a test','07/12/1998','HELLO WORLD',3,5);
todoList.todoFactory('Shop for Xmas Gifts','12/25/2021','HELLO WORLD',2,5);
todoList.todoFactory('This is a test','07/12/1998','HELLO WORLD',1,5);
todoList.todoFactory('Shop for Xmas Gifts','12/25/2021','HELLO WORLD',2,5);
todoList.todoFactory('This is a test','07/12/1998','HELLO WORLD',3,5);
todoList.todoFactory('Shop for Xmas Gifts','12/25/2021','HELLO WORLD',2,5);
todoList.todoFactory('This is a test','07/12/1998','HELLO WORLD',1,5);
todoList.todoFactory('Shop for Xmas Gifts','12/25/2021','HELLO WORLD',2,5);
todoList.todoFactory('This is a test','07/12/1998','HELLO WORLD',3,5);
todoList.todoFactory('Shop for Xmas Gifts','12/25/2021','HELLO WORLD',2,5);

todoList.updateTodo(3,'completed',true)
todoList.updateTodo(4,'completed',true)
todoList.updateTodo(7,'completed',true)

