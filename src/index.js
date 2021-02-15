import '../node_modules/@fortawesome/fontawesome-free/js/all';
const closer = document.querySelector('#closer')
const sideBar = document.querySelector('.sideBar')
const main = document.querySelector('.main')

const toggleSide = () =>{
    sideBar.classList.toggle('close')
    main.classList.toggle('fullScreen')
    closer.classList.toggle('closed')
}
closer.addEventListener('click', toggleSide)
