import {viewController} from './viewController'
import {todoList} from './todoModel'
const sideBar = (()=>{
    const content = document.querySelector('#content')
    let addBtn;
    let container;
    let delBtns;
    let filters;
    let sections = JSON.parse(localStorage.getItem('sectARR')) || [];
    const bindEvents = ()=>{
        container = document.querySelector('.sidebarContent');
        addBtn = container.querySelector('.sideBarAdder');
        delBtns = container.querySelectorAll('.delBtnMenu')
        filters = container.querySelectorAll('.filter')

        filters.forEach(filter => filter.removeEventListener('click', viewController.handlePageChange))
        addBtn.removeEventListener('click', AddSection);
        delBtns.forEach(btn => btn.removeEventListener('click', delSection))

        filters.forEach(filter => filter.addEventListener('click', viewController.handlePageChange))
        addBtn.addEventListener('click', AddSection);
        delBtns.forEach(delBtn => delBtn.addEventListener('click', delSection))
    }
    // build sidebar
    const sideBarBuilder = function(){
        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar')

        const sidebarContent = document.createElement('div');
        sidebarContent.classList.add('sidebarContent')
        sidebarContent.innerHTML = `
            <div class="sideItem filter" id = 'inbox'>
                <h6>Inbox</h6>
                <i class="fas fa-inbox sideIcon"></i>
            </div>
            <div class="sideItem filter" id = 'today'> 
                <h6>Today</h6>
                <i class="far fa-star sideIcon"></i>
            </div>
            <div class="sideItem filter" id = 'upcoming'>
                <h6>Upcoming</h6>
                <i class="fas fa-retweet sideIcon"></i>
            </div>
            <div class="sideItem filter" id = 'completed'>
                <h6>Completed</h6>
                <i class="far fa-check-circle"></i>
            </div>
            <div class="sideItem sideBarAdder">
                    <i class="fas fa-folder-plus"></i>            
            </div>
        `
        sideBar.appendChild(sidebarContent);
        const main = document.querySelector('.main')
        
        content.insertBefore(sideBar,main)
        bindEvents();
        sections.forEach(section => sectionBuilder(section))
    }
    
    
    // add items to sidebar with button
    const AddSection = () =>{
        let sectionName;
        sectionName = prompt('Section Name');
       let validName = sectionName.length > 0 ? true: false;
       while(!validName){
        sectionName = prompt('Try Again')
        validName = sectionName.length > 1 ? true: false;
       }
       sections.push(sectionName)
       localStorage.setItem('sectARR', JSON.stringify(sections)); 
       sectionBuilder(sectionName)
    }

    const sectionBuilder =(sectionName)=>{
        const newSection = document.createElement('div');
        newSection.classList.add('sideItem')
        newSection.classList.add('filter')
        
        newSection.id = sectionName.toLowerCase().replace(/ +/g, "");;
        newSection.innerHTML = `
            <div class = 'delBtnMenu'>
                <i  class="fas fa-times menuDel"></i>
            </div>
            <h6>${sectionName}</h6>
            <i class="fas fa-folder"></i>   
        `
        
        container.insertBefore(newSection,addBtn);
        bindEvents();
    }

    const delSection = (e) =>{
        const garbage = e.target.closest('div').parentNode
        const header = (garbage.querySelector('h6').innerHTML)
        sections.splice(sections.indexOf(header),1)
        localStorage.setItem('sectARR', JSON.stringify(sections)); 
        const garbageID = garbage.id;
        todoList.deleteSection(garbageID);
        garbage.remove();
    }

    
    return{
        sideBarBuilder,
        AddSection
    }
})();
export{
    sideBar
}
