import '../node_modules/@fortawesome/fontawesome-free/js/all';
// import { formModule } from './formModule';
// import { mainContainerModule } from './mainContainer';
// import { sideBarModule } from './sidebar';

// const pageload = (()=>{
//     // mainContainerModule();
//     // sideBarModule();
//     // formModule();
// })();

const sidebar = document.querySelector('.sideBar')
const sideClose = document.querySelector('.container')
const formBar = document.querySelector('.formBar')
const formClose = document.querySelector('.formClose')
const main = document.querySelector('.main')
let sideOpen = true;
let formOpen = false;
const toggleBars = (e)=>{
    let target = e.target.id
  
   
    if(target === 'sideBtn' ){
        if(!formOpen){
            main.classList.toggle('open')
        }
        if(formOpen){
            formOpen = !formOpen
        }
        sideOpen = !sideOpen
        sidebar.classList.toggle('closed');
        sideClose.classList.toggle("change");
        formBar.classList.add('closed');
    }else{
        if(!sideOpen){
            main.classList.toggle('open')
        }
        if(sideOpen){
            sideOpen = !sideOpen
        }
        
        
        formOpen = !formOpen
        formBar.classList.toggle('closed');
        sidebar.classList.add('closed')
    }

}
sideClose.addEventListener('click', toggleBars)
formClose.addEventListener('click', toggleBars)