const list = document.querySelector('ul')
const form = document.querySelector('form')
const title = document.getElementById('title')
const id = document.getElementById('id')
const completed = document.getElementById('completed')

const getUsers = async url => {
   const responce = await fetch(url)
   const result = await responce.json()
   result.slice(0, 8).forEach(item => {
      const el = document.createElement('li')
      const title = document.createElement('h3')
      title.textContent = item.name
      el.classList.add('list__item')

      const elemBold = document.createElement('b')
      const spanEl = document.createElement('span')
      spanEl.textContent = 'username: '
      spanEl.classList.add('list__span')

      const id = document.createElement('span')
      id.textContent = `${item.username}`

      const wrapperCompleted = document.createElement('div')
      const webSiteSpan = document.createElement('span')
      webSiteSpan.textContent = 'website: '
      webSiteSpan.classList.add('list__span')

      const completed = document.createElement('a')
      completed.textContent = item.website
      completed.classList.add('list__item-complete')
      completed.setAttribute('href', '#')

      el.appendChild(title)
      el.appendChild(elemBold)
      elemBold.appendChild(spanEl)
      elemBold.appendChild(id)
      el.appendChild(wrapperCompleted)
      wrapperCompleted.appendChild(webSiteSpan)
      wrapperCompleted.appendChild(completed)

      list.appendChild(el)
   })
}

getUsers('https://jsonplaceholder.typicode.com/users')

// fetch('https://jsonplaceholder.typicode.com/users')
//    .then(res => res.json())
//    .then(data => data.slice(0, 8).forEach(item => {
//       const el = document.createElement('li')
//       const title = document.createElement('h3')
//       title.textContent = item.name
//       el.classList.add('list__item')

//       const elemBold = document.createElement('b')
//       const spanEl = document.createElement('span')
//       spanEl.textContent = 'username: '
//       spanEl.classList.add('list__span')

//       const id = document.createElement('span')
//       id.textContent = `${item.username}`

//       const wrapperCompleted = document.createElement('div')
//       const webSiteSpan = document.createElement('span')
//       webSiteSpan.textContent = 'website: '
//       webSiteSpan.classList.add('list__span')

//       const completed = document.createElement('a')
//       completed.textContent = item.website
//       completed.classList.add('list__item-complete')
//       completed.setAttribute('href', '#')

//       el.appendChild(title)
//       el.appendChild(elemBold)
//       elemBold.appendChild(spanEl)
//       elemBold.appendChild(id)
//       el.appendChild(wrapperCompleted)
//       wrapperCompleted.appendChild(webSiteSpan)
//       wrapperCompleted.appendChild(completed)

//       list.appendChild(el)
//    }))

list.classList.add('list')

form.addEventListener('submit', (e) => {
   e.preventDefault()

   handleSubmit()
})

const handleSubmit = () => {
   fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
         title: title.value,
         id: id.value,
         completed: completed.value,
      })
   })
}

const str = '<h1>Hello, world!</h1>'
const regexp = /<(.*?)>/g
let matchAll = str.matchAll(regexp)
console.log(matchAll)
matchAll = Array.from(matchAll)
console.log(matchAll)
const firstMatch = matchAll[0]
const secondMath = matchAll[1]
console.log(firstMatch[0])
console.log(firstMatch[1])
console.log(secondMath[0])
console.log(secondMath[1])

// let str = '<h1>Hello, world!</h1>';
// let regexp = /<(.*?)>/g;

// let matchAll = str.matchAll(regexp);

// console.log(matchAll); // [object RegExp String Iterator], не массив, а перебираемый объект

// matchAll = Array.from(matchAll); // теперь массив

// let firstMatch = matchAll[0];
// console.log(firstMatch[0]);  // <h1>