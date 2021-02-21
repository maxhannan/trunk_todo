import { viewController } from './viewController'
const headerBuilder = (page) => {
  const main = document.querySelector('.main')
  // build header
  let iconStr
  if (page === 'Inbox') {
    iconStr = '<i class=" headerIcon fas fa-inbox sideIcon" style = "color: #30BCED; "></i>'
  } else if (page === 'Today') {
    iconStr = '<i class=" headerIcon far fa-star sideIcon" style = "color: yellow; "></i>'
  } else if (page === 'Upcoming') {
    iconStr = '<i class=" headerIcon fas fa-retweet sideIcon" style = "color: #FC5130; "></i>'
  } else if (page === 'Completed') {
    iconStr = '<i class=" headerIcon far fa-check-circle" style = "color: lightgreen; "></i>'
  } else {
    iconStr = '<i class=" headerIcon fas fa-folder" style = "color: white;"></i>'
  }
  const header = document.createElement('div')
  header.classList.add('header')
  header.innerHTML = `
      <div class="menuOpen">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
      </div>
      
      <div class="taskHeader" >${page} </div>
      ${iconStr}
      <div class="adder">
          <i class="fas fa-plus"></i>
      </div>
  `
  // FOR TESTING DELETE THIS
  const taskContainer = document.querySelector('.taskContainer')
  main.insertBefore(header, taskContainer)
  // main.appendChild(header)
  // header animations
  const menuOpen = document.querySelector('.menuOpen')
  const adder = document.querySelector('.adder')
  adder.addEventListener('click', viewController.handleAdd)
  menuOpen.addEventListener('click', viewController.handleMenuOpen)
}
export {
  headerBuilder

}
