# Random Joke Generator

## 사용 API
[icanhazdadjoke](https://icanhazdadjoke.com/api)

Fetching a random joke as JSON:
```js
$ curl -H "Accept: application/json" https://icanhazdadjoke.com/
{
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
}
```

### 데이터 값 확인
```js
function getJoke () {
  const jokeData = fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
    }
  })
  console.log(jokeData)
}
```

![](https://velog.velcdn.com/images/0seo8/post/a31d00c6-39b1-446f-9343-14e591c5f3fa/image.png)

```js
async function getJoke () {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
    }
  })
  const jokeObj = await jokeData.json();
  console.log(jokeObj)
}
```
![](https://velog.velcdn.com/images/0seo8/post/d0b48e06-dc0f-4eff-9079-38cbec4d4ae6/image.png)
