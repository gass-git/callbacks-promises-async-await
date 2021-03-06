/**
 * Functions running in parallel with other functions 
 * are called asynchronous.
 * 
 * A good example is setTimeout()
 */

// --- EXAMPLE ---

// function f() is passed as a parameter & will be called after 3 seconds
setTimeout(f, 2000)

function f() {
  // do something
  console.log('show this text')
}

// --- EXAMPLE 2 ---

const url = 'https://jsonplaceholder.typicode.com/posts/1'

function getData(callbackOne, callbackTwo) {
  fetch(url)
    .then((resp) => {
      return resp.json()
    })
    .then((respObj) => {
      callbackOne(respObj)
      callbackTwo(respObj)
    })
    .catch((error) => {
      showResponse(error)
    })
}

function showResponse(respObj) {
  console.log(respObj)
}

function showTitle(respObj) {
  document.write(respObj.title)
}

getData(showResponse, showTitle)


// --- EXAMPLE 3 ---

const posts_url = 'https://jsonplaceholder.typicode.com/posts'

fetch(posts_url)
  .then((resp) => {
    return resp.json()
  })
  .then((arr) => {
    let filteredArr = arr.filter((item) => item.id <= 3)
    return filteredArr
  })
  .then((filteredArr) => {
    filteredArr.forEach((item) => {
      console.log(item.body)
    })
  })
  .catch((error) => {
    console.log(error)
  })