
const content = document.querySelector('#content')

const sideBarModule = ()=>{
    const bar = document.createElement('div');
    bar.classList.add('sideBar');
    
    const closeHolder = document.createElement('div');
    closeHolder.classList.add('closeHolder');
    closeHolder.id = ('closeHolder');
    closeHolder.innerHTML = `
        <div class="container">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    `
    bar.appendChild(closeHolder);
    
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu')

    const menuTextContainer = document.createElement('div');
    menuTextContainer.classList.add('menuTextContainer');
    menuTextContainer.id = 'mainMenuTextContainer'
    mainMenu.appendChild(menuTextContainer);
    
    const menuIconContainer = document.createElement('div');
    menuIconContainer.classList.add('menuIconContainer');
    menuIconContainer.id = 'mainMenuIconContainer'
    menuIconContainer.innerHTML = `
    <a class = 'navIcon' id = 'navIconInbox'>
        <i class="fas fa-inbox"></i>    
    </a>
    <a class = 'navIcon' id = 'navIconStar'>
        <i class="far fa-star"></i>    
    </a>
    <a class = 'navIcon' id = 'navIconArrows'>
        <i class="fas fa-retweet"></i>
    </a>
    
    `
   
    mainMenu.appendChild(menuIconContainer);

    bar.appendChild(mainMenu)
    
    const projects = document.createElement('div');
    projects.classList.add('projects')

    const projectsTextContainer = document.createElement('div');
    projectsTextContainer.classList.add('menuTextContainer');
    projectsTextContainer.id = 'projectsTextContainer'
    
    projects.appendChild(projectsTextContainer);
    
    const projectsIconContainer = document.createElement('div');
    projectsIconContainer.classList.add('menuIconContainer');
    projectsIconContainer.id = 'projectsIconContainer'
    projectsIconContainer.innerHTML = `
    <a class = 'navIcon' id = 'navIconInbox'>
        <i class="fas fa-folder"></i>
    </a>
    <a class = 'navIcon' id = 'navIconStar'>
        <i class="fas fa-folder"></i>  
    </a>
    <a class = 'navIcon' id = 'navIconArrows'>
        <i class="fas fa-folder"></i>
    </a>
    `
    
    projects.appendChild(projectsIconContainer);


    bar.appendChild(projects)
    
    const sideFooter = document.createElement('div');
    sideFooter.classList.add('sideFooter')
    bar.appendChild(sideFooter);
    
    const main = document.querySelector('.main')
    content.insertBefore(bar,main);

    const container = document.querySelector('.container')
    container.classList.toggle("change");
    
    const toggleSide = () =>{
        const sideBar = document.querySelector('.sideBar')
        container.classList.toggle("change");
        sideBar.classList.toggle('close')
        main.classList.toggle('fullScreen')
    }
    container.addEventListener('click', toggleSide)
};


export{
    sideBarModule
}