import { todoController } from './todo'
import { viewController } from './viewController'
import { todoList } from './todoModel'

const formControl = () => {
  const todoDefault = todoList
    .todoFactory('new task', new Date(), 'enter description.', 0, viewController.getcurrent().id)
  const ul = document.querySelector('ul')
  todoController.todoDivFactory(todoDefault, ul, true)
}

export {
  formControl
}
