# 자바스크립트로 타이머 만들기

## setInterval
```js
let countDown = setInterval(func|code, [delay], [arg1], [arg2], ...)
```
- 지정한 함수를 주기적으로 실행하게 만들어줍니다. 호출을 중단하려면 clearInterval(countDown)를 실행하면 됩니다.
- 프로젝트에서는 해당 값이 0보다 같거나 작아지는 경우 clearInterval함수가 실행되도록 설정해놓았습니다.

![](https://velog.velcdn.com/images/0seo8/post/69ad2740-684f-4099-bdb5-62a5db25b8fe/image.png)

## 60초가 지나는 경우 분단위로 올리기
```js
const min = second / 60;
const sec = second % 60;
```
- Math없이 사용을 하는 경우 소수값을 가지게 되는 문제가 생깁니다. 따라서 Math.floor을 이용해 정수값만을 가질 수 있도록 설정을 해줍니다.

## 00:00 과 같이 표시되게 하기
```js
`${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
```
- 삼항연산자를 이용해 해당 값이 10보다 작은 경우 01:08과 같이 표시될 수 있도록 설정합니다.

## TIMEOUT
- displayTime함수를 만들어 00:00초가 되는 경우 TIMEOUT이라는 문구를 내보내게 만듭니다.