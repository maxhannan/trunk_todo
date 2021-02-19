import '../node_modules/@fortawesome/fontawesome-free/js/all';
import './style.css'
import '../node_modules/vanillajs-datepicker/sass/datepicker.scss'
import './tester'
import {viewController} from './viewController'
import {todoListMaster} from './todoList'
import{sideBar} from './sidebar'




sideBar.sideBarBuilder();
todoListMaster.todoListBuilder('inbox');
viewController.cacheHtml();
