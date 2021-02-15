
const content = document.querySelector('#content')


const mainContainerModule = ()=>{
    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add('main');
    
    const todoBox = document.createElement('div')
    todoBox.classList.add('todos');
    todoBox.innerHTML = '<h1> Testing...1.2.3.4.5<br>Testing...1.2.3.4.5</h1>'
    main.appendChild(todoBox)
    
    const formHol = document.createElement('div')
    formHol.classList.add('formHolder');

    const formCont = document.createElement('div')
    formCont.classList.add('formContainer');
    

    const inputBox = document.createElement('div')
    inputBox.classList.add('inputBox')
    formCont.appendChild(inputBox)

    const submitBtnBox = document.createElement('div')
    submitBtnBox.classList.add('submitBtnBox')
    submitBtnBox.innerHTML = `
    <a class = 'formBtn' id = 'formBtn'>
        <i class="fas fa-arrow-circle-up"></i>
    </a>
    `
    formCont.appendChild(submitBtnBox)

    formHol.appendChild(formCont)

    const bbh = document.createElement('div')
    bbh.classList.add('btmBtnHolder');
    bbh.innerHTML = `
        <a class = 'formOpener' id = 'formOpener'>
            <i class="fas fa-plus fa-2x"></i>
        </a>
    `
    formHol.appendChild(bbh)

    main.appendChild(formHol)
    content.appendChild(main);

    const toggleForm = ()=>{
        btmBtnHolder.classList.toggle('formOpen')
        formHolder.classList.toggle('formOpen')
        formContainer.classList.toggle('formOpen')
        todos.classList.toggle('formOpen')
        formOpener.classList.toggle('open')
    }
    

    const formHolder = document.querySelector('.formHolder')
    const formContainer = document.querySelector('.formContainer')
    const btmBtnHolder = document.querySelector('.btmBtnHolder')
    const formOpener = document.querySelector('.formOpener')
    const todos = document.querySelector('.todos')

    formOpener.addEventListener('click', toggleForm)
}

export{
    mainContainerModule
}