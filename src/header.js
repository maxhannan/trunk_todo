import{viewController} from './viewController'
const headerBuilder = (page)=>{
    const main = document.querySelector('.main')
    // build header
    const header = document.createElement('div');
    header.classList.add('header')
    header.innerHTML = `
        <div class="menuOpen">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div class="taskHeader">${page}</i></div>
        <div class="adder">
            <i class="fas fa-plus"></i>
        </div>
    `
    // FOR TESTING DELETE THIS
    const taskContainer = document.querySelector('.taskContainer');
    main.insertBefore(header,taskContainer)
    // main.appendChild(header)
    //header animations
    const menuOpen = document.querySelector('.menuOpen')
    const adder = document.querySelector('.adder')
    
    adder.addEventListener('click', viewController.handleAdd)
    menuOpen.addEventListener('click', viewController.handleMenuOpen);
}
export{
    headerBuilder

}
/* 
<div class="header">
    <div class="menuOpen">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
    <div class="adder">
        <i class="fas fa-plus"></i>
    </div>
</div> 
*/