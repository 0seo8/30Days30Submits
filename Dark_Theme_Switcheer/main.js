const get = target=>document.querySelector(target)
const input = get('input')

input.addEventListener('change', e => {
  if(e.target.checked) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
})