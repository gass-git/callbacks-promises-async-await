/**
 * ECMAScript 2017
 * The async and await keywords were added to the JavaScript
 * specification in the ECMAScript 2017 release, the 8th
 * version of the specification.
 * 
 * "async and await make promises easier to write"
 */

// --- EXAMPLE ---

const users_url = 'https://jsonplaceholder.typicode.com/users'

const usersName = []

async function fetchData() {
  const resp = await fetch(users_url)
  const data = await resp.json()
  return data
}

fetchData()
  .then((data) => {
    for (obj of data) {
      usersName.push(obj.name)
    }
  })
  .then(() => {
    console.log(usersName)
  })

// --- EXAMPLE with arrow function ---

const fetchDataTwo = async () => {
  const resp = await fetch(users_url)
  const data = await resp.json()
  console.log(data)
}

// fetchDataTwo()