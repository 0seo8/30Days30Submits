const get =target => document.querySelector(target)

const form = get('form')
const factDiv = get('.number-fact')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = e.target.querySelector('input[type="number"]').value;
  const loadText = 'Wait a little bit ⌛'
  factDiv.innerHTML = loadText;
  const baseURL = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
  fetch(baseURL + number, {
    method: "get",
    headers: {'x-requested-with': 'text/plain'}
  })
    .then(res=>res.text())
    .then(text => factDiv.innerHTML = text)

})