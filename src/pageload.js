
import {viewController} from './viewController'
import {todoListMaster} from './todoList'
import{sideBar} from './sidebar'


const pageLoad = () =>{
    sideBar.sideBarBuilder();
    todoListMaster.todoListBuilder('inbox');
    viewController.cacheHtml();
}
export{
    pageLoad
}