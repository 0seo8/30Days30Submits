const get = target => document.querySelector(target)
const icon = get('.icon')
const nav = get('nav')

icon.addEventListener('click', () => {
  icon.classList.toggle('close')
  nav.classList.toggle('show')
})