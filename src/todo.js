import { format } from 'date-fns'
import { todoListMaster } from './todoList'
import { todoList } from './todoModel'
import { Datepicker } from 'vanillajs-datepicker'
import { viewController } from './viewController'

const todoController = (() => {
  const todoDivFactory = (todo, ul, edit = false) => {
    let color
    if (todo.priority === 0) {
      color = 'white'
    } else if (todo.priority === 1) {
      color = 'green'
    } else if (todo.priority === 2) {
      color = 'yellow'
    } else {
      color = 'red'
    }

    const vals = todo.duedate
    const result = format(new Date(vals), 'MM/dd/yyyy')
    const todoDiv = document.createElement('li')
    todoDiv.id = todo.id
    if (edit) {
      todoDiv.classList.add('open')
    }
    todoDiv.innerHTML = `
      <div class="taskHolder">
        <div class="checker ${todo.completed ? 'checked' : ''}"></div>
        <div class="task">
            <input type="text"  id = 'task' class="taskText ${edit ? 'yellow' : ''} 
            ${todo.completed ? 'completed' : ''}" 
            value = '${todo.task}' ${edit ? '' : 'disabled'}>
        </div>
        <div class="edit opt ${edit ? 'yellow' : ''}">
        <i class="far fa-edit"></i>
      </div>
        <div class="delBtn opt">
          <i class="far fa-times-circle"></i>
        </div>
      </div>
      <div class="optContainer">
        <div class ='dueDate'>
            <input type="text" class='date ${edit ? 'yellow' : ''}' id="date" value="${result}" ${edit ? '' : 'disabled'}>
        </div>
        <div id = '${todo.priority}' class="flag opt">
          <i style = 'color:${color};' id = 'flag' class="far fa-flag"></i>
        </div>
        <div  class="openArrow opt">
          <i class="fas fa-chevron-down ${edit ? 'openBtnOpen' : ''}"></i>
        </div>
        </div>
        <div class = 'contentHolder'>
          <textarea id = 'descrip' class="descripText" cols="40" rows="5">${todo.description}</textarea>
        </div>
    `
    ul.prepend(todoDiv)
    addEvents(todoDiv)
  }

  const addEvents = (div) => {
    const dateInp = div.querySelector('#date')
    const openBtn = div.querySelector('.openArrow')
    const textInp = div.querySelector('.taskText')
    const checker = div.querySelector('.checker')
    const editBtn = div.querySelector('.edit')
    const bin = div.querySelector('.delBtn')
    const descrip = div.querySelector('.descripText')
    const flag = document.querySelector('.flag')

    flag.addEventListener('mousedown', handleFlags)
    bin.addEventListener('click', handleDel)
    checker.addEventListener('mousedown', handleCheck)
    openBtn.addEventListener('mousedown', handleOpenTask)
    editBtn.addEventListener('mousedown', handleChange)

    const datepicker = new Datepicker(dateInp, {
      autohide: true
    })

    dateInp.addEventListener('changeDate', handleUpdate)
    descrip.addEventListener('input', handleUpdate)
    textInp.addEventListener('input', handleUpdate)
  }

  const handleFlags = (e) => {
    const liId = e.target.closest('li').id
    const ix = todoList.getArrayIndex(liId)
    const colors = ['white', 'green', 'yellow', '#FC5130']
    const target = e.target.closest('div')
    const priority = target.id
    let newPriority = Number(priority) + 1
    if (newPriority > 3) {
      newPriority = 0
    }
    todoList.updateTodo(ix, 'priority', newPriority)
    target.id = newPriority
    target.querySelector('#flag').style.color = colors[newPriority]
  }

  const handleDel = (e) => {
    const garbageDiv = e.target.closest('li')
    const liId = garbageDiv.id
    const ix = todoList.getArrayIndex(liId)
    todoList.deleteTodo(ix)
    garbageDiv.remove()
  }

  const handleCheck = async (e) => {
    const id = e.target.closest('li').id
    const ix = todoList.getArrayIndex(id)
    const hol = e.target.closest('.taskHolder')
    const task = hol.querySelector('.taskText')
    // toggle checked class
    e.target.classList.toggle('checked')
    // Strike-through text
    task.classList.toggle('completed')
    todoList.updateTodo(ix, 'completed')
    await viewController.sleep(2000)
    const current = viewController.getcurrent()
    const currentTitle = current.querySelector('h6').innerHTML
    const currentId = current.id
    todoListMaster.todoListBuilder(currentTitle, currentId)
  }

  const handleUpdate = (e) => {
    const id = e.target.closest('li').id
    const type = e.target.id
    const ix = todoList.getArrayIndex(id)
    let newVal
    let prop

    switch (type) {
      case 'date':
        prop = 'duedate'
        newVal = e.detail.date
        break
      case 'task':
        prop = 'task'
        newVal = e.target.value
        break
      case 'descrip':
        prop = 'descrip'
        newVal = e.target.value
        break
    }
    todoList.updateTodo(ix, prop, newVal)
  }

  const handleOpenTask = async (e) => {
    const target = e.target.closest('li')
    const listItems = document.querySelectorAll('li')
    // Closes all other tasks
    listItems.forEach(li => {
      if (li !== target) {
        li.classList.remove('open')
        li.querySelector('.openArrow').classList.remove('openBtnOpen')
      }
    })
    // Open task drawer
    e.target.closest('div').classList.toggle('openBtnOpen')
    target.classList.toggle('open')
  }

  const handleChange = (e, div = '') => {
    const inputDiv = e.target.closest('li')
    const text = inputDiv.querySelector('.taskText')
    const date = inputDiv.querySelector('#date')
    // enable/disable text boxes on todos
    let finished
    if (text.disabled) {
      text.disabled = false
    } else {
      text.disabled = true
    }
    if (date.disabled) {
      date.disabled = false
    } else {
      finished = true
      date.disabled = true
    }
    text.classList.toggle('yellow')
    date.classList.toggle('yellow')
    e.target.closest('.edit').classList.toggle('yellow')
    if (finished) {
      const current = viewController.getcurrent()
      console.log(current)
      console.log(current.id)
      const currentTitle = current.querySelector('h6').innerHTML
      const currentId = current.id
      todoListMaster.todoListBuilder(currentTitle, currentId)
    }
  }
  return {
    todoDivFactory
  }
})()

export {
  todoController
}
