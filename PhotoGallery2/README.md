

## 1. [object-fit속성](https://developer.mozilla.org/ko/docs/Web/CSS/object-fit)

- CSS object-fit 속성은 `<img>`나 `<video>` 요소와 같은 대체 요소의 콘텐츠 크기를 어떤 방식으로 조절해 요소에 맞출 것인지 지정합니다.
- object-position 속성을 사용해 대체 요소 콘텐츠가 콘텐츠 박스 내에 위치할 지점을 바꿀 수 있습니다.
- fill(박스크기) / contain(가로세로유지 + 맞춤조절) / cover(박스크기+잘라내기) /none / scale-down(none과 contain중 대체 콘텐츠 크기가 더 작아지는 것으로)

## 2. [box-shadow](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)

## 3. 반응형 디자인을 위한 grid
```css
.gallery {
  width: 100%;
  display: grid;     
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## 4. [Pexels](https://www.pexels.com/ko-kr/)API

