/**
 * Callbacks are functions that are passed to other 
 * functions as a parameter, and it will be called after
 * the main function finishes doing their other stuffs.
 */

// --- EXAMPLE one ---

function after() {
  console.log('some text')
}

function before(callback) {
  let a = 1
  for (let i = 1; i < 1000000000; i++) {
    a += a * i
  }

  /** 
   * execute the function passed as a parameter 
   * once the loop has been resolved.
   **/
  callback()
}

before(after)

