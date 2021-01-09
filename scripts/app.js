const hamburger = document.querySelector('.hamburger')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navItems = document.querySelector('.nav-items')
hamburger.addEventListener('click', () => {
  navItems.classList.toggle('menu-open')
  open.classList.toggle('invisible')
  close.classList.toggle('invisible')
})