import { todoListMaster } from './todoList'
import { formControl } from './formControl'

const viewController = (() => {
  // keeps track of current page
  let currentPage
  // returns state of current page
  const getcurrent = () => {
    // returns homepage if not defined, for use on inital load, gets reassigned in handlePageChange
    if (typeof currentPage === 'undefined') {
      return document.querySelector('#inbox')
    }
    return currentPage
  }
  // cacheHTML
  let taskHeader, taskContainer, sideBar, menuOpen, adder, main
  const cacheHtml = () => {
    taskHeader = document.querySelector('.taskHeader')
    taskContainer = document.querySelector('.taskContainer')
    sideBar = document.querySelector('.sidebar')
    main = document.querySelector('.main')
    menuOpen = document.querySelector('.menuOpen')
    adder = document.querySelector('.adder')
  }
  // sleep function
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const handleMenuOpen = () => {
    // Hide Adder
    adder.classList.remove('add')
    adder.classList.toggle('hide')
    // formBar.classList.remove('openBar')
    // Open Menu
    menuOpen.classList.toggle('change')
    sideBar.classList.toggle('openBar')
    main.classList.toggle('openSideBar')
    taskContainer.classList.toggle('hidden')
    taskHeader.classList.toggle('hidden')
  }

  const handleAdd = () => {
    menuOpen.classList.remove('change')
    sideBar.classList.remove('openBar')
    formControl()
  }

  const handlePageChange = (e) => {
    currentPage = e.target.closest('div')
    console.log(currentPage)
    const pageId = currentPage.id
    const pageName = currentPage.querySelector('h6').innerHTML

    todoListMaster.todoListBuilder(pageName, pageId)
    cacheHtml()
    menuOpen.classList.add('change')
    taskContainer.classList.add('hidden')
    taskHeader.classList.add('hidden')
    adder.classList.toggle('hide')
    handleMenuOpen()
  }

  return {
    cacheHtml,
    handleAdd,
    handleMenuOpen,
    handlePageChange,
    getcurrent,
    sleep
  }
})()

export {
  viewController
}
