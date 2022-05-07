# customer cursor
30days30submits 중 customer cursor 강의를 보면서 정리한 글입니다.

**기본코드**

**html**
```
  <section class="container">
    <h1>Hello World?</h1>
  </section>

  <div class="cursor"></div>
```

**css**
```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
section{
  min-height: 100vh;
  background-color: rgb(41, 42, 46);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.cursor {
  position: absolute;
  left: 0;
  top: 0;
  border: 1.5px solid white;
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
```

## 1. 마우스의 움직임에 따라 div.cursor 움직이기.

### 1-1. mouseover이벤트

```js
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  console.log(e)
})
```

```
MouseEvent {isTrusted: true, screenX: 152, screenY: 314, clientX: 172, clientY: 260, …}
```
콜솔창에 출력된 MouseEvent의 객체를 열어보면 PageX,PageY 메소드를 확인할 수 있습니다. 이를 이용해 마우스의 움직임에 따라 div요소가 움직이도록 만들면 됩니다.

```js
window.addEventListener('mousemove', (e) => {
  console.log(e.pageX, e.pageY)
})
```
출력결과를 확인해보면 마우스의 움직임에 따라 값이 변하는 것을 확인할 수 있습니다.

```js
window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px'
  cursor.style.top = e.pageY + 'px'
})
```

## 2. 마우스커서 div.cursor중앙 위치시키기

<img src="https://images.velog.io/images/0seo8/post/2d8dad14-39bb-45ed-8b20-422897317c8b/image.png" />

마우스의 움직임에 따라 커서 요소가 동적으로 움직이게 되었지만 마우스가 커서요소의 중앙에 위치하지 않는 것을 확인할 수 있습니다.

이 문제는 css을 통해 수정할 수 있습니다. div.cursor요소에 `transfor: translate(-50%, -50%);`를 줍니다.

```css
.cursor {
  position: absolute;
  left: 0;
  top: 0;
  border: 1.5px solid white;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  transform: translate(-50%, -50%);  
}
```

## 3. 문제점 보완

index.html에 section요소를 하나 더 추가한 후(높이를 키우기 위해서) 마우스를 스크롤해보면, 마우스가 스크롤되는 순간에는 cursor요소가 움직이지 않고 멈춰있는 것을 확인할 수 있습니다.

<img src="https://images.velog.io/images/0seo8/post/87021874-1707-48ee-a955-3d01046edf12/ezgif.com-gif-maker%20(1).gif" width="500px"> 

이 문제점은 scroll이벤트를 활용해 해결할 수 있습니다.

```js
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px'
  cursor.style.top = e.pageY + 'px'
})

window.addEventListener('scroll', () => {
  cursor.style.top = scrollY + 'px'
})
```
하지만 위와 같이 코드를 작성하는 경우 스크롤을 하면 커서가 화면 상단에 위치해버리지만 아래 코드와 같이 콘솔창에 scrollY값을 확인해보면 커서는 화면 상단에 붙어있지만 스크롤이 일어날때 그 값도 변하고 있는 것을 확인할 수 있습니다.

```js
window.addEventListener('scroll', () => {
  cursor.style.top = scrollY + 'px'
  console.log(scrollY)
})
```
## 4. 커서와 상단 사이에 간격구하기

이는 아래 그림과 같이 요소에서의 top위치와 window에서의 top위치가 다르기 때문에 발생하는 문제로 커서요소의 top위치와 윈도우 창 상이의 간격을 구해 해결할 수 있습니다.`cursor.offsetTop - scrollY`
<img src="https://images.velog.io/images/0seo8/post/1b94c868-4653-4629-ae55-700082bb8ca6/image.png" width="400px">

이렇게 구해낸 커서와 상단 사이의 간격을 setAttrbute를 통해 cursor의 data-fromTop값으로 설정을 합니다. 이렇게 설정한 값을 스크롤이 생길 때마다 가져와 스크롤의 변경과 함께 커서요소가 동적으로 움직일 수 있도록 설정해줍니다.

```js
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
});

window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
});
```

<img src="https://images.velog.io/images/0seo8/post/3b1e8ba6-dd12-4f10-ab45-bff2e8f2c099/image.png" width="500px;">

>**offsetTop**
부모 요소에게서 상대적인 top좌표를 반환합니다. 여기서 중요한건 position이 relative인 부모 요소 만을 찾아서 기준으로 삼습니다. 만약에 부모 요소중에 position이 relative가 없다면 최상위 dom을 기준으로한 좌표를 반환합니다. 즉 절대좌표입니다.

>**스크롤 크기(scrollWidth/scrollHeight/scrollLeft/scrollTop)**
어떤 요소는 코드를 실행하지 않아도 자동으로 스크롤바가 추가됩니다(예: `html`). 하지만 다른 요소는 스크롤을 하기 위해 css Of overflow 속성을 거쳐야 합니다.
일반적으로 `html` 요소가 웹에 있다고 믿어집니다. 브라우저의 보기에서 요소를 스크롤합니다. (ie6 이전 버전은 하이브리드 모드에서 실행 중이었습니다. `body`, 이것은 또한 뷰포트의 크기를 계산하는 위의 코드입니다. if,else 왜 ) 따라서 세로 스크롤 막대가 있는 페이지의 총 높이는 document.documentElement.scrollHeight입니다.


## 5. click 시 클래스 부여

클릭이 생길 때 미리 정의한 click클래스의 스타일이 적용될 수 있도록 cursor요소에 click클래스를 추가합니다.

```js
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
```
>**Dom Reflow**
“리플로우”는 모든 엘리먼트의 위치와 길이 등을 다시 계산하는 것으로 문서의 일부 혹은 전체를 다시 렌더링합니다.
단일 엘리먼트 하나를 변경해도, 하위 엘리먼트나 상위 엘리먼트 등에 영향을 미칠 수 있습니다.


---

참고자료

[그래서 Top 이 어딘데? getBoundingClientRect().top element.offsetTop 차이점](https://dane-itview.tistory.com/entry/%EA%B7%B8%EB%9E%98%EC%84%9C-Top-%EC%9D%B4-%EC%96%B4%EB%94%98%EB%8D%B0-getBoundingClientRecttop-elementoffsetTop-%EC%B0%A8%EC%9D%B4%EC%A0%90)
[
How To Make A Custom Cursor For Website](https://www.youtube.com/watch?v=de4W0EHMuUs&list=PLRv_Gd5w9e7m7wokXmB9fGtGYw100UKc0&index=1)