/**
 * A Promise is a proxy for a value not necessarily known when
 * the promise is created. It allows you to associate handlers
 * with an asynchronous action's eventual success value or 
 * failure reason.
 * 
 * This lets asynchronous methods return values like synchronous 
 * methods: instead of immediately returning the final value, the 
 * asynchronous method returns a promise to supply the value at 
 * some point in the future.
 */

// --- EXAMPLES ---

function getData() {
  const promise = new Promise((resolve, reject) => {
    let success = true

    setTimeout(() => {
      if (success) resolve('this string is some')
      else reject('some error')
    }, 4000)
  })

  return promise
}

getData()
  .then((data) => console.log(`original data: ${data}`))
  .catch((error) => console.log(error))


// --- THENABLES ---

getData()
  .then((data) => {
    let txt = `${data} random data`
    return txt
  })
  .then((txt) => {
    let modifiedTxt = `${txt} modified`
    return modifiedTxt
  })
  .then((modifiedTxt) => {
    console.log(modifiedTxt)
  })
  .catch((error) => {
    console.log(error)
  })