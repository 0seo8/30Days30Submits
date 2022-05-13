const get = target => document.querySelector(target)

const displayKey = get('.key h2')
const displayKeyCode = get('.keyCode h2')
const KeyCodeDiv = get('.keyCode')
const overlay = get('.overlay')

window.addEventListener('keydown', (e) => {
  overlay.classList.add('hide')
  displayKey.innerText = e.key;
  displayKeyCode.innerText = e.keyCode;
  // 스페이스(32)를 누른경우
  if(e.keyCode === 32) {
    displayKey.innerText = `'space`;
  }
})

KeyCodeDiv.addEventListener('click', (e) => {
  const textArea = document.createElement('textarea')
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.value = KeyCodeDiv.querySelector('h2').innerText
  document.body.appendChild(textArea)
  textArea.select()
  //복사명령
  document.execCommand('copy')
  //제거
  document.body.removeChild(textArea)
  KeyCodeDiv.querySelector('p').innerText = 'Copied'
  setTimeout(()=>{
    KeyCodeDiv.querySelector('p').innerText = 'Click To Copy'
  },2000)
})