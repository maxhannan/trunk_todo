import {todoList} from './todoModel'

todoList.todoFactory('This is a test','Fri Feb 19 2021 00:00:00 GMT-0600 (CST)','This is a description.',1,'tester');
todoList.todoFactory('Shop for Xmas Gifts','Thu Dec 23 2021 00:00:00 GMT-0600 (CST)','This is a description.',2,'tester');

todoList.todoFactory('This is a test','Sat Feb 20 2021 00:00:00 GMT-0600 (CST)','This is a description.',1,'tester');
todoList.todoFactory('Shop for Xmas Gifts','Tue Dec 14 2021 00:00:00 GMT-0600 (CST)','This is a description.',2,5);

todoList.todoFactory('This is a test','Fri Feb 26 2021 00:00:00 GMT-0600 (CST)','This is a description.',1,5);
todoList.todoFactory('Shop for Xmas Gifts','Fri Feb 19 2021 00:00:00 GMT-0600 (CST)','This is a description.',2,5);

todoList.todoFactory('This is a test','Tue Dec 14 2021 00:00:00 GMT-0600 (CST)','This is a description.',1,5);
todoList.todoFactory('Shop for Xmas Gifts','Tue Dec 14 2021 00:00:00 GMT-0600 (CST)','This is a description.',2,5);

todoList.updateTodo(3,'completed',true)
todoList.updateTodo(4,'completed',true)
todoList.updateTodo(7,'completed',true)

