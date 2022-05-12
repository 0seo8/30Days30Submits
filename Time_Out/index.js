const get  = target => document.querySelector(target)
const timeH = get('h1')
let timeSecond = 5

displayTime(timeSecond)

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond)
  if(timeSecond<=0 || timeSecond<1) {
    endTime()
    clearInterval(countDown)
  }
},1000)

function displayTime(second) {
  const min = Math.floor(second / 60); //Math없이 사용을 하는 경우 소수값을 가지게 되는 문제가 생깁니다.
  const sec = Math.floor(second % 60);
  //00:00과 같이 표시를 하기 위해 삼항연산자 사용
  timeH.innerHTML =`${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
}

function endTime() {
  timeH.innerHTML= 'TIME OUT'
}